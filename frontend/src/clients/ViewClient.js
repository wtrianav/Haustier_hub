import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewClient() {
    const { id } = useParams();
    const [client, setClient] = useState(null);

    useEffect(() => {
        const loadClient = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/personas/${id}`);
                setClient(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        loadClient();
    }, [id]);

    return (
        <div className="container">
            {client ? (
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Detalle del cliente</h2>
                        <div className="card">
                            <div className="card-header">
                                <p className="fw-bold">Detalle del cliente con el id : {id}</p>
                                <ul className="list-group list-group-flush">
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
                                </ul>
                            </div>
                        </div>
                        <Link className="btn btn-primary my-2 mt-4" to={"/tableclients"}>
                            Volver
                        </Link>
                    </div>
                </div>
            ) : (
                <div>No se pudo cargar la información del cliente.</div>
            )}
        </div>
    );
}
