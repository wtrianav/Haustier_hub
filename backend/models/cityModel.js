const mongoose = require('mongoose');

// Define el esquema para la colección "cities"
const citySchema = new mongoose.Schema({
	name: String,
	department_id: mongoose.Schema.Types.ObjectId, // Referencia al departamento al que pertenece esta ciudad
	// Otros campos relacionados con la ciudad, si los tienes.
});

// Crea el modelo "City" a partir del esquema
const City = mongoose.model('City', citySchema);

module.exports = City;
