import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewClient() {
    const [client, setClient] = useState({
        documentType: "",
        documentNumber: "",
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        department: "",
        city: "",
        address: "",
    });

    // Obtiene el parámetro 'id' de la URL usando el hook 'useParams'.
    const { id } = useParams();

    useEffect(() => {
        // Carga los datos del cliente usando el 'id' obtenido de la URL.
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadUser = async () => {
        // Realiza una solicitud GET a la API para obtener los datos del cliente con el 'id' especificado en la URL.
        const result = await axios.get(`http://localhost:8080/client/${id}`);
        // Actualiza el estado del componente con los datos del cliente obtenidos de la API
        setClient(result.data);
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Detalle del cliente</h2>
                    <div className="card">
                        <div className="card-header">
                            <p className="fw-bold">Detalle del cliente con el id : {client.id}</p>
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
                                    {client.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Apellido: </b>
                                    {client.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {client.email}
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
                    <Link className="btn btn-primary my-2 mt-4" to={"/"}>
                        Volver al Home
                    </Link>
                </div>
            </div>
        </div>
    );
}