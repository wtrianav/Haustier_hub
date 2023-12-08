const express = require("express");
const cors = require("cors");
const app = express();
const { connectToDatabase, disconnectFromDatabase } = require('./databaseConexion');
const advisorController = require('./controllers/advisorController');
const clientController = require('./controllers/clientController');
const petController = require('./controllers/petController');
const companyController = require('./controllers/companyController');
const departmentController = require('./controllers/departmentController');
const cityController = require('./controllers/cityController');

app.use(express.json());
app.use(cors());

// Conexión a la base de datos al iniciar el servidor
connectToDatabase();

// Rutas para el CRUD
app.use("/api/asesores", advisorController);
app.use("/api/clientes", clientController);
app.use("/api/mascotas", petController);
app.use("/api/empresas", companyController);

app.use("/api/departments", departmentController);
app.use("/api/cities", cityController);


app.get("/", function (req, res) {
	res.send("Ruta INICIO");
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

// Puerto para el servidor
const puerto = process.env.PUERTO || 3001;

// Inicia el servidor
app.listen(puerto, function () {
	console.log("Servidor funcionando correctamente en el puerto: " + puerto);
});

// Cierra la conexión a la base de datos al detener el servidor
const closeServer = () => {
	disconnectFromDatabase().then(() => {
		server.close();
	});
};

// Maneja el evento de cierre del proceso
process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);

module.exports = app;