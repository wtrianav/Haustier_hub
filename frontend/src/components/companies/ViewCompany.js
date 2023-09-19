import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCompany() {
    const { id } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const loadCompany = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/empresas/${id}`);
                setCompany(response.data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        loadCompany();
    }, [id]);

    return (
        <section className="container bg-white">
            {company ? (
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 p-4 mt-2">
                        <h3 className="text-center m-4 fw-bold">Detalle de la empresa</h3>
                        <div className="card border-primary rounded shadow">
                            <div className="card-header bg-primary">
                                <p className="card-text text-white fw-bold">Empresa con el id: {id}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>ObjectID: </b>
                                    {company._id}
                                </li>
                                <li className="list-group-item">
                                    <b>Tipo de documento: </b>
                                    {company.documentType}
                                </li>
                                <li className="list-group-item">
                                    <b>Número de documento: </b>
                                    {company.documentNumber}
                                </li>
                                <li className="list-group-item">
                                    <b>Nombre de la empresa: </b>
                                    {company.nameCompany}
                                </li>
                                <li className="list-group-item">
                                    <b>Tipo de empresa: </b>
                                    {company.companyType}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {company.emailAddress}
                                </li>
                                <li className="list-group-item">
                                    <b>Teléfono: </b>
                                    {company.phoneNumber}
                                </li>
                                <li className="list-group-item">
                                    <b>Departamento: </b>
                                    {company.department}
                                </li>
                                <li className="list-group-item">
                                    <b>Ciudad: </b>
                                    {company.city}
                                </li>
                                <li className="list-group-item">
                                    <b>Dirección: </b>
                                    {company.address}
                                </li>
                                <li className="list-group-item">
                                    <b>Productos: </b>
                                    {company.products.join(", ")}
                                </li>
                                <li className="list-group-item">
                                    <b>Servicios: </b>
                                    {company.services.join(", ")}
                                </li>
                                <li className="list-group-item">
                                    <b>Fecha de creación del registro: </b>
                                    {company.date}
                                </li>
                                <li className="list-group-item">
                                    <b>Hora de creación del registro: </b>
                                    {company.time}
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-primary my-2 mt-4" to={"/tablecompanies"}>
                            VOLVER
                        </Link>
                    </div>
                </div>
            ) : (
                <div>No se pudo cargar la información de la empresa.</div>
            )}
        </section>
    );
}
