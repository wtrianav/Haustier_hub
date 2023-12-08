const mongoose = require('mongoose');

// Define el esquema para la colección "departments"
const departmentSchema = new mongoose.Schema({
  name: String,
  // Otros campos relacionados con el departamento, si los tienes.
});

// Crea el modelo "Department" a partir del esquema
const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
