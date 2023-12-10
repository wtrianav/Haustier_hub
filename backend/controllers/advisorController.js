const express = require('express');
const moment = require('moment-timezone');
const Counter = require('../models/counterModel');
const Advisor = require('../models/advisorModel');
const Department = require('../models/departmentModel');
const router = express.Router();

// Crear asesor
router.post("/", async (req, res) => {
    try {
        const advisor = new Advisor(req.body);

        const currentDate = moment.tz("America/Bogota");
        const formattedCurrentDate = currentDate.format("DD/MM/YYYY");
        const formattedCurrentTime = currentDate.format("HH:mm:ss");

        advisor.date = formattedCurrentDate;
        advisor.time = formattedCurrentTime;

        const lastAdvisor = await Advisor.findOne({}, {}, { sort: { id: -1 } });

        advisor.id = lastAdvisor ? lastAdvisor.id + 1 : 1;
        
        // // Obtener el id del departamento del cuerpo de la solicitud
        // const { department } = req.body;

        // // Buscar el departamento por su id y obtener su nombre
        // const departmentName = await Department.findById(department);

        // if (departmentName) {
        //     advisor.department = departmentName.name; // Asignar el nombre del departamento al asesor
        // } else {
        //     console.error("Departamento no encontrado:", department);
        //     res.status(400).send("Departamento no encontrado");
        //     return;
        // }

        const savedAdvisor = await advisor.save()

        res.send(savedAdvisor);
    } catch (error) {
        console.error("Error al crear el asesor:", error);
        if (error.code === 11000) {
            res.status(400).send("Ya existe un asesor con ese id o datos duplicados.");
        } else {
            res.status(500).send(error);
        }
    }
});

// Mostrar asesores
router.get("/", async (req, res) => {
    try {
        const advisors = await Advisor.find();
        res.send(advisors);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Mostrar un solo asesor
router.get("/:id", async (req, res) => {
    try {
        const advisor = await Advisor.findOne({ id: parseInt(req.params.id) });
        if (advisor) {
            res.send(advisor);
        } else {
            res.status(404).send("Asesor no encontrado");
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// Editar o actualizar asesor
router.put("/:id", async (req, res) => {
    try {
        console.log("Request body:", req.body);
        const updatedAdvisor = await Advisor.findOneAndUpdate(
            { id: parseInt(req.params.id) },
            new Advisor(req.body),
            {
                new: true,
            }
        );

        if (updatedAdvisor) {
        //     // Obtener el id del departamento del cuerpo de la solicitud
        //     const { department } = req.body;
        //     console.log('Department', department);

        //     // Buscar el departamento por su id y obtener su nombre
        //     const departmentName = await Department.findById(department);

        //     if (departmentName) {
        //         updatedAdvisor.department = departmentName.name; // Asignar el nombre del departamento al asesor
        //     } else {
        //         console.error("Departamento no encontrado:", department);
        //         res.status(400).send("Departamento no encontrado");
        //         return;
        //     }

            // Guardar los cambios con el nombre del departamento actualizado
            const savedAdvisor = await updatedAdvisor.save();

            res.send(savedAdvisor);
        } else {
            console.log("Asesor no encontrado");
            res.status(404).send("Asesor no encontrado");
        }
    } catch (error) {
        console.error("Error en la ruta PUT /api/asesores/:id:", error);
        res.status(500).send(error);
    }
});

// Eliminar asesor
router.delete("/:id", async (req, res) => {
    try {
        const deletedAdvisor = await Advisor.findOneAndDelete({
            id: parseInt(req.params.id),
        });
        if (deletedAdvisor) {
            // Encuentra el último contador
			const lastCounter = await Counter.findOne({}, {}, { sort: { sequence_value: -1 } });

			// Descontar el contador solo si el id de la mascota eliminada es menor o igual al valor actual del contador
			if (lastCounter && lastCounter.sequence_value >= deletedAdvisor.id) {
				await Counter.findByIdAndUpdate(
					lastCounter._id,
					{ $inc: { sequence_value: -1 } },
					{ new: true }
				);
			}
			res.send(deletedAdvisor);
		} else {
			res.status(404).send("Asesor no encontrado");
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;