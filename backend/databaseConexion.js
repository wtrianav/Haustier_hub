const mongoose = require("mongoose");

const connectToDatabase = async () => {
	try {
		await mongoose.connect("mongodb+srv://wtrianav:admin2471@projectsdb.fnls1io.mongodb.net/haustier_hub", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("¡Conexión exitosa con la base de datos MongoDB!");
	} catch (error) {
		console.error("Error de conexión:", error);
	}
};

const disconnectFromDatabase = async () => {
	await mongoose.disconnect();
	console.log("Desconexión exitosa de la base de datos MongoDB");
};

module.exports = { connectToDatabase, disconnectFromDatabase };
