import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewAdvisor() {
    const { id } = useParams();
    const [advisor, setAdvisor] = useState(null);

    useEffect(() => {
        const loadAdvisor = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/asesores/${id}`);
                setAdvisor(response.data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        loadAdvisor();
    }, [id]);

    return (
        <section className="container bg-white">
            {advisor ? (
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 p-4 mt-2">
                        <h3 className="text-center m-4 fw-bold">Detalle del asesor</h3>
                        <div className="card border-primary rounded shadow">
                            <div className="card-header bg-primary">
                                <p className="card-text text-white fw-bold">Asesor con el id : {id}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>ObjectID: </b>
                                    {advisor._id}
                                </li>
                                <li className="list-group-item">
                                    <b>Tipo de documento: </b>
                                    {advisor.documentType}
                                </li>
                                <li className="list-group-item">
                                    <b>Número de documento: </b>
                                    {advisor.documentNumber}
                                </li>
                                <li className="list-group-item">
                                    <b>Nombre: </b>
                                    {advisor.namePerson}
                                </li>
                                <li className="list-group-item">
                                    <b>Apellido: </b>
                                    {advisor.lastNamePerson}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {advisor.emailAddress}
                                </li>
                                <li className="list-group-item">
                                    <b>Teléfono: </b>
                                    {advisor.phoneNumber}
                                </li>
                                <li className="list-group-item">
                                    <b>Departamento: </b>
                                    {advisor.department}
                                </li>
                                <li className="list-group-item">
                                    <b>Ciudad: </b>
                                    {advisor.city}
                                </li>
                                <li className="list-group-item">
                                    <b>Dirección: </b>
                                    {advisor.address}
                                </li>
                                <li className="list-group-item">
                                    <b>Fecha de creación del registro: </b>
                                    {advisor.date}
                                </li>
                                <li className="list-group-item">
                                    <b>Hora de creación del registro: </b>
                                    {advisor.time}
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-primary my-2 mt-4" to={"/tableadvisors"}>
                            VOLVER
                        </Link>
                    </div>
                </div>
            ) : (
                <div>No se pudo cargar la información del asesor.</div>
            )}
        </section>
    );
}
