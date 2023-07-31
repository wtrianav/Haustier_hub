import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Link } from "react-router-dom";
import './tableClients.css';


export default function TableClients() {
    const [clients, setClients] = useState([]);
    const URL = "http://localhost:3000/api/personas/";

    // Función que carga los clientes.
    const loadClients = async () => {
        const response = await axios.get(URL);
        setClients(response.data);
    };

    useEffect(() => {
        // Carga los clientes al cargar la página.
        loadClients();
    }, []);

    // Función que elimina un cliente
    const deleteClient = async (id) => {
        await axios.delete(`http://localhost:3000/api/personas/${id}`);
        // Recarga los clientes después de eliminar uno
        loadClients();
    }

    // Se establecen las columnas de la tabla.
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
            name: "namePerson",
            label: "Nombre"
        },
        {
            name: "lastNamePerson",
            label: "Apellido"
        },
        {
            name: "emailAddress",
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
                    // Obtiene el cliente de la fila actual.
                    const client = clients[tableMeta.rowIndex];
                    return (
                        <>
                            <div className="btn-group">
                                <Link
                                    className="btn btn-primary mx-1"
                                    to={`/viewclient/${client.id}`}
                                >
                                    VER
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-1"
                                    to={`/editclient/${client.id}`}
                                >
                                    EDITAR
                                </Link>
                                <button
                                    className="btn btn-danger mx-1"
                                    onClick={() => deleteClient(client.id)}
                                >
                                    ELIMINAR
                                </button>
                            </div>
                        </>
                    );
                },
            },
        },

    ]

    // Opciones de la tabla
    const options = {
        // Desactiva los checkbox de cada registro de la tabla.
        selectableRows: 'none',
    };

    return (
        <section className="section-client mt-5">
            <div className="table-client">
                <h3 className="fw-bold">Tabla clientes</h3>
                <MUIDataTable className="border shadow mt-2"
                    data={clients}
                    columns={columns}
                    options={options}
                />
            </div>
        </section>
    );
}

