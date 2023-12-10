import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Link } from "react-router-dom";
import DeletePetModal from "./DeletePetModal";
import '../../index.css';

export default function TablePets() {
    const [selectedPetId, setSelectedPetId] = useState(null);
    const [pets, setPets] = useState([]);
    const URL = "http://localhost:3001/api/mascotas/"; // Adjust the URL to match your backend API

    const loadPets = async () => {
        try {
            const response = await axios.get(URL);
            const sortedPets = response.data.sort((a, b) => a.id - b.id);
            setPets(sortedPets);
        } catch (error) {
            console.error("Error al cargar las mascotas:", error);
        }
    };

    useEffect(() => {
        const loadInitialData = async () => {
            await loadPets();
        };

        loadInitialData();
    }, []);

    const deletePet = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/mascotas/${id}`);
            loadPets();
        } catch (error) {
            console.error("Error al eliminar la mascota:", error);
        }
    }

    const columns = [
        {
            name: "id",
            label: "id",
        },
        {
            name: "name",
            label: "Nombre",
        },
        {
            name: "birthDate",
            label: "Fecha de Nacimiento"
        },
        {
            name: "petType",
            label: "Tipo de Mascota"
        },
        {
            name: "breed",
            label: "Raza"
        },
        {
            name: "gender",
            label: "Género"
        },
        {
            name: "color",
            label: "Color"
        },
        {
            name: "actions",
            label: "Acciones",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    const petIndex = columns.findIndex(column => column.name === 'id');
                    const petId = tableMeta.rowData[petIndex];
                    return (
                        <>
                            <div className="btn-group">
                                <Link
                                    className="btn btn-primary mx-1 custom-link"
                                    to={`/viewpet/${petId}`}
                                >
                                    VER
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-1 custom-link"
                                    to={`/editpet/${petId}`}
                                >
                                    EDITAR
                                </Link>
                                <button
                                    className="btn btn-danger mx-1 custom-button"
                                    onClick={() => setSelectedPetId(petId)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#deletePetModal"
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
        <section className="section-table mt-5">
            <div className="div-table">
                <h3 className="fw-bold">MASCOTAS</h3>
                <div className="d-flex justify-content-md-end">
                    <Link className="btn btn-primary btn-table" to="/addpet">CREAR MASCOTA</Link>
                </div>
                <MUIDataTable className="border shadow mt-2"
                    data={pets}
                    columns={columns}
                    options={options}
                />
                <DeletePetModal 
                    deletePet={deletePet}
                    selectedPetId={selectedPetId}
                    setSelectedPetId={setSelectedPetId}
                />
            </div>
        </section>
    );
}


