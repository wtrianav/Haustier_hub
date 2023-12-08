const mongoose = require('mongoose');

// Definición del esquema de persona
const clienteSchema = new mongoose.Schema({
	id: {
		type: Number,
		unique: true,
	},
	documentType: String,
	documentNumber: String,
	namePerson: String,
	lastNamePerson: String,
	emailAddress: String,
	phoneNumber: String,
	department: String,
	city: String,
	address: String,
	date: String, // Campo para almacenar la fecha en formato 'YYYY/MM/DD'
	time: String, // Campo para almacenar la hora en formato 'HH:MM:SS'
	mascotas: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Mascota' 
	}],
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
