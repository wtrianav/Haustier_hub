import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewClient() {
    const { id } = useParams();
    const [client, setClient] = useState(null);

    useEffect(() => {
        const loadClient = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/clientes/${id}`);
                setClient(response.data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        loadClient();
    }, [id]);

    return (
        <section className="container bg-white">
            {client ? (
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 p-4 mt-2">
                        <h3 className="text-center m-4 fw-bold">Detalle del cliente</h3>
                        <div className="card border-primary rounded shadow">
                            <div className="card-header bg-primary">
                                <p className="card-text text-white fw-bold">Cliente con el id : {id}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>ObjectID: </b>
                                    {client._id}
                                </li>
                                <li className="list-group-item">
                                    <b>Tipo de documento: </b>
                                    {client.documentType}
                                </li>
                                <li className="list-group-item">
                                    <b>Número de documento: </b>
                                    {client.documentNumber}
                                </li>
                                <li className="list-group-item">
                                    <b>Nombre: </b>
                                    {client.namePerson}
                                </li>
                                <li className="list-group-item">
                                    <b>Apellido: </b>
                                    {client.lastNamePerson}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {client.emailAddress}
                                </li>
                                <li className="list-group-item">
                                    <b>Teléfono: </b>
                                    {client.phoneNumber}
                                </li>
                                <li className="list-group-item">
                                    <b>Departamento: </b>
                                    {client.department}
                                </li>
                                <li className="list-group-item">
                                    <b>Ciudad: </b>
                                    {client.city}
                                </li>
                                <li className="list-group-item">
                                    <b>Dirección: </b>
                                    {client.address}
                                </li>
                                {client.mascotas && client.mascotas.length > 0 ? (
                                    <li className="list-group-item">
                                        <b>Propietario de las mascotas: </b>
                                        {client.mascotas.map((mascotaId, index) => (
                                            <span key={index}>
                                                {mascotaId}
                                                {index < client.mascotas.length - 1 && ", "}
                                            </span>
                                        ))}
                                    </li>
                                ) : (
                                    <li className="list-group-item">
                                        <b>Propietario de las mascotas: </b>
                                        No se encontraron mascotas asociadas.
                                    </li>
                                )}
                                <li className="list-group-item">
                                    <b>Fecha de creación del registro: </b>
                                    {client.date}
                                </li>
                                <li className="list-group-item">
                                    <b>Hora de creación del registro: </b>
                                    {client.time}
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-primary my-2 mt-4" to={"/tableclients"}>
                            VOLVER
                        </Link>
                    </div>
                </div>
            ) : (
                <div>No se pudo cargar la información del cliente.</div>
            )}
        </section>
    );
}
