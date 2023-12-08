const express = require('express');
const moment = require('moment-timezone');
const Counter = require('../models/counterModel');
const Mascota = require('../models/petModel');
const router = express.Router();

// Crear mascota
router.post("/", async (req, res) => {
	try {
		const mascota = new Mascota(req.body);

		const currentDate = moment.tz("America/Bogota");
		const formattedCurrentDate = currentDate.format("DD/MM/YYYY");
		const formattedCurrentTime = currentDate.format("HH:mm:ss");

		const birthDate = new Date(req.body.birthDate); // Convertir la cadena en un objeto de fecha
		const formattedBirthDate = moment(birthDate).format("DD/MM/YYYY"); // Formatear la fecha de nacimiento

		mascota.date = formattedCurrentDate;
		mascota.time = formattedCurrentTime;
		// Envía la fecha de nacimiento de la mascota en el formato preestablecido en formattedBirthDate (23/12/2023)
		mascota.birthDate = formattedBirthDate;

		const lastMascota = await Mascota.findOne({}, {}, { sort: { id: -1 } });

		mascota.id = lastMascota ? lastMascota.id + 1 : 1;

		const savedMascota = await mascota.save();

		res.send(savedMascota);
	} catch (error) {
		console.error("Error al crear la mascota:", error);
		if (error.code === 11000) {
			res.status(400).send("Ya existe una mascota con ese id o datos duplicados.");
		} else {
			res.status(500).send(error);
		}
	}
});

// Mostrar mascotas
router.get("/", async (req, res) => {
	try {
		const mascotas = await Mascota.find();
		res.send(mascotas);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Mostrar una sola mascota
router.get("/:id", async (req, res) => {
	try {
		const mascota = await Mascota.findOne({ id: parseInt(req.params.id) });
		if (mascota) {
			res.send(mascota);
		} else {
			res.status(404).send("Mascota no encontrada");
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

// Editar o actualizar mascota
router.put("/:id", async (req, res) => {
	try {
		const updatedMascota = await Mascota.findOneAndUpdate(
			{ id: parseInt(req.params.id) },
			req.body,
			{
				new: true,
			}
		);
		if (updatedMascota) {
			res.send(updatedMascota);
		} else {
			res.status(404).send("Mascota no encontrada");
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

// Eliminar mascota
router.delete("/:id", async (req, res) => {
	try {
		const deletedMascota = await Mascota.findOneAndDelete({
			id: parseInt(req.params.id),
		});
		if (deletedMascota) {
			// Encuentra el último contador
			const lastCounter = await Counter.findOne({}, {}, { sort: { sequence_value: -1 } });

			// Descontar el contador solo si el id de la mascota eliminada es menor o igual al valor actual del contador
			if (lastCounter && lastCounter.sequence_value >= deletedMascota.id) {
				await Counter.findByIdAndUpdate(
					lastCounter._id,
					{ $inc: { sequence_value: -1 } },
					{ new: true }
				);
			}
			res.send(deletedMascota);
		} else {
			res.status(404).send("Mascota no encontrada");
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
