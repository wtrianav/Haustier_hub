const express = require('express');
const moment = require('moment-timezone');
const Counter = require('../models/counterModel');
const Company = require('../models/companyModel');
const router = express.Router();

// Crear empresa
router.post("/", async (req, res) => {
    try {
        const company = new Company(req.body);

        const currentDate = moment.tz("America/Bogota");
        const formattedCurrentDate = currentDate.format("DD/MM/YYYY");
        const formattedCurrentTime = currentDate.format("HH:mm:ss");

        company.date = formattedCurrentDate;
        company.time = formattedCurrentTime;

        const lastCompany = await Company.findOne({}, {}, { sort: { id: -1 } });

        company.id = lastCompany ? lastCompany.id + 1 : 1;

        const savedCompany = await company.save();

        res.send(savedCompany);
    } catch (error) {
        console.error("Error al crear la empresa:", error);
        if (error.code === 11000) {
            res.status(400).send("Ya existe una empresa con ese NIT o datos duplicados.");
        } else {
            res.status(500).send(error);
        }
    }
});

// Mostrar empresas
router.get("/", async (req, res) => {
    try {
        const companies = await Company.find();
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Mostrar una sola empresa
router.get("/:id", async (req, res) => {
    try {
        const company = await Company.findOne({ id: parseInt(req.params.id) });
        if (company) {
            res.send(company);
        } else {
            res.status(404).send("Empresa no encontrada");
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// Editar o actualizar empresa
router.put("/:id", async (req, res) => {
    try {
        const updatedCompany = await Company.findOneAndUpdate(
            { id: parseInt(req.params.id) },
            req.body,
            {
                new: true,
            }
        );
        if (updatedCompany) {
            res.send(updatedCompany);
        } else {
            res.status(404).send("Empresa no encontrada");
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// Eliminar empresa
router.delete("/:id", async (req, res) => {
    try {
        const deletedCompany = await Company.findOneAndDelete({
            id: parseInt(req.params.id),
        });
        if (deletedCompany) {
            // Encuentra el último contador
            const lastCounter = await Counter.findOne({}, {}, { sort: { sequence_value: -1 } });
            
            // Descontar el contador solo si el id de la mascota eliminada es menor o igual al valor actual del contador
			if (lastCounter && lastCounter.sequence_value >= deletedCompany.id) {
				await Counter.findByIdAndUpdate(
					lastCounter._id,
					{ $inc: { sequence_value: -1 } },
					{ new: true }
				);
			}
			res.send(deletedCompany);
		} else {
			res.status(404).send("Empresa no encontrada");
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
