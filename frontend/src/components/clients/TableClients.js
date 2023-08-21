import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import './tableClients.css';

export default function TableClients() {
    const [selectedClientId, setSelectedClientId] = useState(null); // Estado para almacenar el ID del cliente seleccionado
    const [clients, setClients] = useState([]);
    const URL = "http://localhost:3000/api/personas/";

    // Función que carga los clientes.
    const loadClients = async () => {
        try {
            const response = await axios.get(URL);
            const sortedClients = response.data.sort((a, b) => a.id - b.id);
            setClients(sortedClients);
            setClients(response.data);
        } catch (error) {
            console.error("Error al cargar los clientes:", error);
        }
    };

    useEffect(() => {
        // Función para cargar clientes
        const loadInitialData = async () => {
            await loadClients();
        };
    
        // Carga inicial de datos
        loadInitialData();
    }, []);

    // Función que elimina un cliente
    const deleteClient = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/personas/${id}`);
            // Recarga los clientes después de eliminar uno
            loadClients();
        } catch (error) {
            console.error("Error al eliminar el cliente:", error);
        }
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
                    const clientIndex = columns.findIndex(column => column.name === 'id');
                    const clientId = tableMeta.rowData[clientIndex];
                    return (
                        <>
                            <div className="btn-group">
                                <Link
                                    className="btn btn-primary mx-1"
                                    to={`/viewclient/${clientId}`}
                                >
                                    VER
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-1"
                                    to={`/editclient/${clientId}`}
                                >
                                    EDITAR
                                </Link>
                                <button
                                    className="btn btn-danger mx-1"
                                    onClick={() => setSelectedClientId(clientId)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
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
                <div className="d-flex">
                    <Link className="btn btn-primary btn-table" to="/addclient">CREAR CLIENTE</Link>
                </div>
                <h3 className="fw-bold">Tabla clientes</h3>
                <MUIDataTable className="border shadow mt-2"
                    data={clients}
                    columns={columns}
                    options={options}
                />
                <DeleteModal 
                    deleteClient={deleteClient} //Renderiza el componente DeleteModal
                    selectedClientId={selectedClientId} //Pasa el ID del cliente seleccionado
                    setSelectedClientId={setSelectedClientId} //Pasa la función para actualizar el ID
                />
                
            </div>
        </section>
    );
}
