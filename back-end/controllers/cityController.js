const express = require('express');
const router = express.Router();
const City = require('../models/cityModel'); // Importa el modelo de ciudad
const Department = require('../models/departmentModel');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Ruta para obtener ciudades por department_id
router.get('/', async (req, res) => {
    const { department_id } = req.query;
    //console.log('id del departamento:', department_id);
    try {
        // Crear un solo objeto ObjectId
        const departmentObjectId = new ObjectId(department_id);

        // Comprobar si el departamento existe
        const department = await Department.findById(departmentObjectId);

        if (!department) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }

        const cities = await City.find({ department_id: departmentObjectId }); // Reutilizar departmentObjectId
        res.json({ cities });
    } catch (error) {
        console.error('Error en el servidor:', error);
        console.error("Error stack:", error.stack);
        res.status(500).json({ error: 'Error al obtener ciudades' });
    }
});

module.exports = router;