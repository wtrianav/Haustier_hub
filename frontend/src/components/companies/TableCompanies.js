import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteCompanyModal from "./DeleteCompanyModal";
import '../../index.css';

export default function TableCompanies() {
    const [selectedCompanyId, setSelectedCompanyId] = useState(null);
    const [companies, setCompanies] = useState([]);
    const URL = "http://localhost:3001/api/empresas/";

    const loadCompanies = async () => {
        try {
            const response = await axios.get(URL);
            const sortedCompanies = response.data.sort((a, b) => a.id - b.id);
            setCompanies(sortedCompanies);
        } catch (error) {
            console.error("Error al cargar las empresas:", error);
        }
    };

    useEffect(() => {
        const loadInitialData = async () => {
            await loadCompanies();
        };
    
        loadInitialData();
    }, []);

    const deleteCompany = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/empresas/${id}`);
            await loadCompanies();
        } catch (error) {
            console.error("Error al eliminar la empresa:", error);
        }
    }

    const columns = [
        {
            name: "id",
            label: "id",
        },
        {
            name: "nameCompany",
            label: "Nombre",
        },
        {
            name: "address",
            label: "Dirección"
        },
        {
            name: "phoneNumber",
            label: "Teléfono"
        },
        {
            name: "emailAddress",
            label: "Email"
        },
        {
            name: "acciones",
            label: "Acciones",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    const companyIndex = columns.findIndex(column => column.name === 'id');
                    const companyId = tableMeta.rowData[companyIndex];
                    return (
                        <>
                            <div className="btn-group">
                                <Link
                                    className="btn btn-primary mx-1 custom-link"
                                    to={`/viewcompany/${companyId}`}
                                >
                                    VER
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-1 custom-link"
                                    to={`/editcompany/${companyId}`}
                                >
                                    EDITAR
                                </Link>
                                <button
                                    className="btn btn-danger mx-1 custom-button"
                                    onClick={() => setSelectedCompanyId(companyId)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteCompanyModal"
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
                <h3 className="fw-bold">EMPRESAS</h3>
                <div className="d-flex justify-content-md-end">
                    <Link className="btn btn-primary btn-table" to="/addcompany" >CREAR EMPRESA</Link>
                </div>
                <MUIDataTable className="border shadow mt-2"
                    data={companies}
                    columns={columns}
                    options={options}
                />
                <DeleteCompanyModal 
                    deleteCompany={deleteCompany}
                    selectedCompanyId={selectedCompanyId}
                    setSelectedCompanyId={setSelectedCompanyId}
                />
            </div>
        </section>
    );
}
