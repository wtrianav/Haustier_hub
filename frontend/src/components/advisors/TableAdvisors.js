import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteAdvisorModal from "./DeleteAdvisorModal";
import './tableAdvisors.css';

export default function TableAdvisors() {
    const [selectedAdvisorId, setSelectedAdvisorId] = useState(null);
    const [advisors, setAdvisors] = useState([]);
    const URL = "http://localhost:3000/api/asesores/";

    const loadAdvisors = async () => {
        try {
            const response = await axios.get(URL);
            const sortedAdvisors = response.data.sort((a, b) => a.id - b.id);
            setAdvisors(sortedAdvisors);
        } catch (error) {
            console.error("Error al cargar los asesores:", error);
        }
    };

    useEffect(() => {
        const loadInitialData = async () => {
            await loadAdvisors();
        };

        loadInitialData();
    }, []);

    const deleteAdvisor = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/asesores/${id}`);
            await loadAdvisors();
        } catch (error) {
            console.error("Error al eliminar el asesor:", error);
        }
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
            name: "namePerson",
            label: "Nombre",
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
                    const advisorIndex = columns.findIndex(column => column.name === 'id');
                    const advisorId = tableMeta.rowData[advisorIndex];
                    return (
                        <>
                            <div className="btn-group">
                                <Link
                                    className="btn btn-primary mx-1"
                                    to={`/viewadvisor/${advisorId}`}
                                >
                                    VER
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-1"
                                    to={`/editadvisor/${advisorId}`}
                                >
                                    EDITAR
                                </Link>
                                <button
                                    className="btn btn-danger mx-1"
                                    onClick={() => setSelectedAdvisorId(advisorId)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteAdvisorModal"
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

    const options = {
        selectableRows: 'none',
    };

    return (
        <section className="section-client mt-5">
            <div className="table-client">
                <div className="d-flex">
                    <Link className="btn btn-primary btn-table" to="/addadvisor" >CREAR ASESOR</Link>
                </div>
                <h3 className="fw-bold">ASESORES</h3>
                <MUIDataTable className="border shadow mt-2"
                    data={advisors}
                    columns={columns}
                    options={options}
                />
                <DeleteAdvisorModal
                    deleteAdvisor={deleteAdvisor}
                    selectedAdvisorId={selectedAdvisorId}
                    setSelectedAdvisorId={setSelectedAdvisorId}
                />
            </div>
        </section>
    );
}
