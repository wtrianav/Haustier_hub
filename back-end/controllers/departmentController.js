const express = require('express');
const router = express.Router();
const Department = require('../models/departmentModel');


// Ruta para obtener todos los departamentos
router.get('/', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json( {departments} );
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener departamentos' });
    }
});

module.exports = router;