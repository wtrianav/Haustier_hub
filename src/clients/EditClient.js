import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditClient() {
    let navigate = useNavigate();
    const { id } = useParams();

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

    const { documentType, documentNumber, name, lastName, email, phoneNumber, department, city, address } = client;

    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/client/${id}`, client);
        navigate("/");
    };

    const loadClient = async () => {
        const result = await axios.get(`http://localhost:8080/client/${id}`);
        setClient(result.data);
    };

    useEffect(() => {
        loadClient();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Editar Cliente</h2>
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
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Lastname" className="form-label fw-bold">Apellido</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su apellido"
                                    name="lastName"
                                    value={lastName}
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
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Phonenumber" className="form-label fw-bold">Teléfono</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su número de teléfono"
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
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
