const express = require('express');
const moment = require('moment-timezone');
const mongoose = require('mongoose');
const Counter = require('../models/counterModel');
const Cliente = require('../models/clientModel');
const router = express.Router();

// Crear cliente
router.post("/", async (req, res) => {
	try {
		const clienteData = req.body;
		const cliente = new Cliente(clienteData);

		const currentDate = moment.tz("America/Bogota"); // Obtiene la fecha y hora en la zona horaria de Bogotá
		const formattedDate = currentDate.format("DD/MM/YYYY");
		const formattedTime = currentDate.format("HH:mm:ss");

		clienteData.date = formattedDate;
		clienteData.time = formattedTime;

		const lastCliente = await Cliente.findOne({}, {}, { sort: { id: -1 } });

		// Incrementa el ID en lugar de utilizar el valor del contador directamente
		clienteData.id = lastCliente ? lastCliente.id + 1 : 1;

		// Procesar los IDs de las mascotas
		if (clienteData.mascotas && Array.isArray(clienteData.mascotas)) {
			const mascotasArray = clienteData.mascotas.map(id => id.trim()).filter(id => id);
			// console.log("Valores de los IDs de mascotas antes de convertir:", mascotasArray);
			// Convertir cada ID de mascota a un ObjectId válido
			clienteData.mascotas = mascotasArray.map(id => new mongoose.Types.ObjectId(id));
		} else {
			clienteData.mascotas = [];
		}

		const savedCliente = await Cliente.create(clienteData);

		res.send(savedCliente);
	} catch (error) {
		console.error("Error al crear el cliente:", error);
		if (error.code === 11000) {
			res.status(400).send("Ya existe un cliente con ese id o datos duplicados.");
		} else {
			res.status(500).send(error);
		}
	}
});

// Mostrar clientes
router.get("/", async (req, res) => {
	try {
		const clientes = await Cliente.find();
		res.send(clientes);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Mostrar un solo cliente
router.get("/:id", async (req, res) => {
	try {
		const cliente = await Cliente.findOne({ id: parseInt(req.params.id) });
		if (cliente) {
			res.send(cliente);
		} else {
			res.status(404).send("Cliente no encontrado");
		}
	} catch (error) {
		res.status(500).send(error);
	}
});


// Editar o actualizar cliente
router.put("/:id", async (req, res) => {
	try {

		const { id } = req.params; // ID del cliente
		const { mascotas, ...updatedData } = req.body; // Datos actualizados del cliente y los IDs de mascotas

		if (typeof mascotas === 'string') {
			// Solo intentar dividir 'mascotas' si es una cadena
			const mascotasArray = mascotas.split(",").map(id => id.trim());
			// Actualizar el campo 'mascotas' con el nuevo array de IDs de mascotas
			updatedData.mascotas = mascotasArray;
		} else if (Array.isArray(mascotas)) {
			// Si 'mascotas' ya es un arreglo, asegúrate de que esté formateado correctamente
			updatedData.mascotas = mascotas.map(id => id.trim());
		} else {
			// Si no es ni cadena ni arreglo, establece 'mascotas' como un arreglo vacío
			updatedData.mascotas = [];
		}

		// Encuentra y actualiza el cliente en la base de datos
		const updatedCliente = await Cliente.findOneAndUpdate(
			{ id: parseInt(id) },
			updatedData,
			{ new: true }
		);

		console.log("ID del cliente a actualizar:", id);
		console.log("Datos actualizados:", updatedData);
		console.log("Cliente actualizado:", updatedCliente);

		if (updatedCliente) {
			res.send(updatedCliente);
		} else {
			console.log("Cliente no encontrado");
			res.status(404).send("Cliente no encontrado");
		}
	} catch (error) {
		console.error("Error al actualizar el cliente:", error);
		res.status(500).send(error);
	}
});


// Eliminar cliente
router.delete("/:id", async (req, res) => {
	try {
		const deletedCliente = await Cliente.findOneAndDelete({
			id: parseInt(req.params.id),
		});
		if (deletedCliente) {
			// Encuentra el último contador
			const lastCounter = await Counter.findOne({}, {}, { sort: { sequence_value: -1 } });

			// Descontar el contador solo si el id del cliente eliminado es menor o igual al valor actual del contador
			if (lastCounter && lastCounter.sequence_value >= deletedCliente.id) {
				await Counter.findByIdAndUpdate(
					lastCounter._id,
					{ $inc: { sequence_value: -1 } },
					{ new: true }
				);
			}
			res.send(deletedCliente);
		} else {
			res.status(404).send("Cliente no encontrado");
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;