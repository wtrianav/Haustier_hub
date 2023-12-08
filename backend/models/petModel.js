const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    id: {
		type: Number,
		unique: true,
	},
    name: String,
    birthDate: String,
    petType: String,
    breed: String,
    gender: String,
    color: String,
    date: String, // Campo para almacenar la fecha en formato 'YYYY/MM/DD'
	time: String, // Campo para almacenar la hora en formato 'HH:MM:SS'
});

const Mascota = mongoose.model("Mascota", mascotaSchema);

module.exports = Mascota;