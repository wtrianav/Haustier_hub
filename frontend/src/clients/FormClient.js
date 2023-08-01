import React from "react";
import { Link } from "react-router-dom";

export default function FormClient({ client, onInputChange, onSubmit }) {

    // Desestructuración de los valores de client para utilizarlos en los inputs del formulario.
	const {
		documentType,
		documentNumber,
		namePerson,
		lastNamePerson,
		emailAddress,
		phoneNumber,
		department,
		city,
		address,
	} = client;

	return (
		<section className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold">Registrar Cliente</h3>
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
                        <div className="d-grid gap-4 d-md-flex justify-content-md-center">
                            <button type="submit" className="btn btn-primary btn-form">ACEPTAR</button>
                            <Link className="btn btn-danger btn-form" to="/tableclients">CANCELAR</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
	);
}
