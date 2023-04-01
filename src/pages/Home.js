import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Home() {
    const [clients, setClients] = useState([]);
    const URL = "http://localhost:8080/clients";

    const loadClients = async () => {
        const response = await axios.get(URL);
        setClients(response.data);
    };

    useEffect(() => {
        loadClients();
    }, []);

    const deleteClient = async (id) => {
        await axios.delete(`http://localhost:8080/client/${id}`);
        loadClients();
    }

    const columns = [
        {
            name: "id",
            label: "id",
        },
        {
            name: "documentType",
            label: "Tipo",
        },
        {
            name: "documentNumber",
            label: "Documento"
        },
        {
            name: "name",
            label: "Nombre"
        },
        {
            name: "lastName",
            label: "Apellido"
        },
        {
            name: "email",
            label: "Email"
        },
        {
            name: "phoneNumber",
            label: "Teléfono"
        },
        {
            name: "acciones",
            label: "Acciones",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    const client = clients[tableMeta.rowIndex];
                    return (
                        <td colSpan={3}>
                            <div className="btn-group">
                                <Link
                                    className="btn btn-primary mx-1"
                                    to={`/viewclient/${client.id}`}
                                >
                                    ver
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-1"
                                    to={`/editclient/${client.id}`}
                                >
                                    Editar
                                </Link>
                                <button
                                    className="btn btn-danger mx-1"
                                    onClick={() => deleteClient(client.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </td>
                    );
                },
            },
        },

    ]

    const options = {
        selectableRows: 'none',
    };

    return (
        <div className="container mt-5">
            <h2>Tabla clientes</h2>
            <MUIDataTable className="border shadow mt-2"
                data={clients}
                columns={columns}
                options={options}
            />
        </div>
    );
}

