const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    id: {
		type: Number,
		unique: true,
	},
    documentType: String,
    documentNumber: String,
    nameCompany: String,
    companyType: String,
    emailAddress: String,
    phoneNumber: String,
    department: String,
    city: String,
    address: String,
    products: [String], // Campo para almacenar múltiples productos como un arreglo de cadenas
    services: [String], // Campo para almacenar múltiples servicios como un arreglo de cadenas
    date: String, // Campo para almacenar la fecha en formato 'YYYY/MM/DD'
	time: String, // Campo para almacenar la hora en formato 'HH:MM:SS'
});

const Empresa = mongoose.model("Empresa", empresaSchema);

module.exports = Empresa;
