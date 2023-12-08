const request = require("supertest");
const app = require("../app");
const { Cliente } = require("../models/clientModel");
const { connectToDatabase, disconnectFromDatabase } = require('../databaseConexion');

describe("CRUD API Tests", () => {
	// Antes de las pruebas, conecta a la base de datos
	beforeAll(async () => {
		await connectToDatabase();
	});

	// Después de las pruebas, desconecta de la base de datos
	afterAll(async () => {
		await disconnectFromDatabase();
	});


	// Prueba para verificar si el servidor responde correctamente
	test("GET /", async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
		expect(response.text).toBe("Ruta INICIO");
	});

	// Prueba para crear una persona
	test("POST /api/clientes", async () => {
		// Obtenemos el último id creado en la base de datos
		const lastCliente = await Cliente.findOne({}, {}, { sort: { id: -1 } });
		const newCliente = {
			documentType: "CC",
			documentNumber: "1054599896",
			namePerson: "John Joaquin",
			lastNamePerson: "Doe Smith",
			emailAddress: "john@micorreo.com",
			phoneNumber: "3103586060",
			department: "Valle",
			city: "Cali",
			address: "Calle 30 # 45-36",
			id: lastCliente ? lastCliente.id + 1 : 1, // Incrementamos el id
		};

		const response = await request(app)
			.post("/api/clientes")
			.send(newCliente);

		expect(response.status).toBe(200);

	});
});
