import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddClient() {
    let navigate = useNavigate();

    // Estado inicial del formulario con sus campos vacíos
    const [client, setClient] = useState({
        documentType: "",
        documentNumber: "",
        namePerson: "",
        lastNamePerson: "",
        emailAddress: "",
        phoneNumber: "",
        department: "",
        city: "",
        address: "",
    });

    // Desestructuración de los valores de client para utilizarlos en los inputs del formulario.
    const { documentType, documentNumber, namePerson, lastNamePerson, emailAddress, phoneNumber, department, city, address } = client;

    // Función que actualiza el estado del formulario al cambiar algún valor en los inputs
    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    // Función que se ejecuta al enviar el formulario y realiza una petición POST al servidor para agregar el cliente a la base de datos.
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/personas", client);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Registrar Cliente</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Documenttype" className="form-label fw-bold">
                                    Tipo de documento
                                </label>
                                <select
                                    className="form-select"
                                    name="documentType"
                                    value={documentType}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value="Select">Seleccione una opción</option>
                                    <option value="CC">CC</option>
                                    <option value="TI">TI</option>
                                    <option value="PP">PP</option>
                                </select>
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Documentnumber" className="form-label fw-bold">Número de documento</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su número de documento"
                                    name="documentNumber"
                                    value={documentNumber}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Name" className="form-label fw-bold">Nombre</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su nombre"
                                    name="namePerson"
                                    value={namePerson}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Lastname" className="form-label fw-bold">Apellido</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su apellido"
                                    name="lastNamePerson"
                                    value={lastNamePerson}
                                    onChange={(e) => onInputChange(e)} 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Email" className="form-label fw-bold">Email</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su email"
                                    name="emailAddress"
                                    value={emailAddress}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Phonenumber" className="form-label fw-bold">Teléfono</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su número telefónico"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Department" className="form-label fw-bold">Departamento</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su departamento"
                                    name="department"
                                    value={department}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="City" className="form-label fw-bold">Ciudad</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su ciudad de residencia"
                                    name="city"
                                    value={city}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="text-start mb-5">
                            <label htmlFor="Address" className="form-label fw-bold">Dirección</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Ingrese su dirección"
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Aceptar</button>
                        <Link className="btn btn-outline-danger mx-2" to="/tableclients">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
