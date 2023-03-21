import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from "jquery";



export default function Home() {
	const [clients, setClients] = useState([]);
    const tableClient = useRef(null);

	const URL = "http://localhost:8080/clients";
	const loadClients = async () => {
        const result = await axios.get(URL);
		setClients(result.data);
	};
    
    useEffect(() => {
        loadClients();
        $(tableClient.current).DataTable();
    }, []);

	return (
		<div className="container mt-5">
            <h3>Tabla clientes</h3>
			<table className="table border shadow" ref={tableClient}>
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">Tipo</th>
						<th scope="col">Documento</th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Email</th>
						<th scope="col">Teléfono</th>
						<th scope="col">Departamento</th>
						<th scope="col">Ciudad</th>
						<th scope="col">Dirección</th>
						<th className="text-center" scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
                    {
                        clients.map((client, index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{client.documentType}</td>
                                <td>{client.documentNumber}</td>
                                <td>{client.name}</td>
                                <td>{client.lastName}</td>
                                <td>{client.email}</td>
                                <td>{client.phoneNumber}</td>
                                <td>{client.department}</td>
                                <td>{client.city}</td>
                                <td>{client.address}</td>
                                <td colspan="3">
                                    <div className="btn-group">
                                        <button className="btn btn-primary mx-2">ver</button>
                                        <button className="btn btn-outline-primary mx-2">Editar</button>
                                        <button className="btn btn-danger mx-2">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
				</tbody>
			</table>
		</div>
	);
}
