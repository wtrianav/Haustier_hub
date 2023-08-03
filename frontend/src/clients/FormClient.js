import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
    validarDocumento,
    validarNombre, 
    validarApellido, 
    validarEmail, 
    validarTelefono,
    validarDepartamento,
    validarCiudad,
    validarDireccion,
} from "../components/validations/Validations";

import './formClient.css';


export default function FormClient({ client, onInputChange, onSubmit }) {

    const [errors, setErrors] = useState({
        document: { error: false, message: "" },
        name: { error: false, message: "" },
        lastName: { error: false, message: "" },
        email: { error: false, message: "" },
        phone: { error: false, message: "" },
        department: { error: false, message: "" },
        city: { error: false, message: "" },
        address: { error: false, message: "" },
    });

    //Nuevo estado para rastrear el envío del formulario.
    const [isFormSubmitted, setIsFormSubmitted] = useState(false); 

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //Realizar validación en todos los campos.
        const validationErrors = {
            document: validarDocumento(client.documentNumber),
            name: validarNombre(client.namePerson),
            lastName: validarApellido(client.lastNamePerson),
            email: validarEmail(client.emailAddress),
            phone: validarTelefono(client.phoneNumber),
            department: validarDepartamento(client.department),
            city: validarCiudad(client.city),
            address: validarDireccion(client.address),
        };

        //Verificar si hay campos vacíos
        const hasEmptyFields = Object.values(client).some(value => value === "");

        if (hasEmptyFields) {
            setIsFormSubmitted(true);
            return;
        }

        //Verificar si hay errores de validación en algún campo.
        if (Object.values(validationErrors).some(error => error.error)) {
            setErrors(validationErrors);
            return;
        }

        //Si todas las comprobaciones son exitosas, enviar el formulario.
        onSubmit(e);
    };


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
                    <form onSubmit={handleFormSubmit}>
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
                                <div className={`error-text ${errors.document.error ? "active" : ""}`}>
                                    {errors.document.error && <p>{errors.document.message}</p>}
                                </div>
                                <div className="form-group-input">
                                    <input
                                        type={"text"}
                                        className={`form-control ${errors.document.error ? "input-error" : ""}`}
                                        placeholder="Ingrese su número de documento"
                                        name="documentNumber"
                                        value={documentNumber}
                                        onChange={(e) => {
                                            onInputChange(e);
                                            const validation = validarDocumento(e.target.value);
                                            setErrors((prevState) => ({
                                                ...prevState,
                                                ...validation,
                                            }));
                                        }}
                                    />
                                    {documentNumber && (
                                        <i
                                            className={errors.document.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                                        ></i>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Name" className="form-label fw-bold">Nombre</label>
                                <div className={`error-text ${errors.name.error ? "active" : ""}`}>
                                    {errors.name.error && <p>{errors.name.message}</p>}
                                </div>
                                <div className="form-group-input">
                                    <input
                                        type={"text"}
                                        className={`form-control ${errors.name.error ? "input-error" : ""}`}
                                        placeholder="Ingrese su nombre"
                                        name="namePerson"
                                        value={namePerson}
                                        onChange={(e) => {
                                            onInputChange(e);
                                            const validation = validarNombre(e.target.value);
                                            setErrors((prevState) => ({
                                                ...prevState,
                                                ...validation,
                                            }));
                                        }}
                                    />
                                    {namePerson && (
                                        <i
                                            className={errors.name.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                                        ></i>
                                    )}
                                </div>
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Lastname" className="form-label fw-bold">Apellido</label>
                                <div className={`error-text ${errors.lastName.error ? "active" : ""}`}>
                                    {errors.lastName.error && <p>{errors.lastName.message}</p>}
                                </div>
                                <div className="form-group-input">
                                    <input
                                        type={"text"}
                                        className={`form-control ${errors.lastName.error ? "input-error" : ""}`}
                                        placeholder="Ingrese su apellido"
                                        name="lastNamePerson"
                                        value={lastNamePerson}
                                        onChange={(e) => {
                                            onInputChange(e);
                                            const validation = validarApellido(e.target.value);
                                            setErrors((prevState) => ({
                                                ...prevState,
                                                ...validation,
                                            }));
                                        }}
                                    />
                                    {lastNamePerson && (
                                        <i
                                            className={errors.lastName.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                                        ></i>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Email" className="form-label fw-bold">Email</label>
                                <div className={`error-text ${errors.email.error ? "active" : ""}`}>
                                    {errors.email.error && <p>{errors.email.message}</p>}
                                </div>
                                <div className="form-group-input">
                                    <input
                                        type={"text"}
                                        className={`form-control ${errors.email.error ? "input-error" : ""}`}
                                        placeholder="Ingrese su email"
                                        name="emailAddress"
                                        value={emailAddress}
                                        onChange={(e) => {
                                            onInputChange(e);
                                            const validation = validarEmail(e.target.value);
                                            setErrors((prevState) => ({
                                                ...prevState,
                                                ...validation,
                                            }));
                                        }}
                                    />
                                    {emailAddress && (
                                        <i
                                            className={errors.email.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                                        ></i>
                                    )}
                                </div>
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Phonenumber" className="form-label fw-bold">Teléfono</label>
                                <div className={`error-text ${errors.phone.error ? "active" : ""}`}>
                                    {errors.phone.error && <p>{errors.phone.message}</p>}
                                </div>
                                <div className="form-group-input">
                                    <input
                                        type={"text"}
                                        className={`form-control ${errors.phone.error ? "input-error" : ""}`}
                                        placeholder="Ingrese su número telefónico"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={(e) => {
                                            onInputChange(e);
                                            const validation = validarTelefono(e.target.value);
                                            setErrors((prevState) => ({
                                                ...prevState,
                                                ...validation,
                                            }));
                                        }}
                                    />
                                    {phoneNumber && (
                                        <i
                                            className={errors.phone.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                                        ></i>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Department" className="form-label fw-bold">Departamento</label>
                                <div className={`error-text ${errors.department.error ? "active" : ""}`}>
                                    {errors.department.error && <p>{errors.department.message}</p>}
                                </div>
                                <div className="form-group-input">
                                    <input
                                        type={"text"}
                                        className={`form-control ${errors.department.error ? "input-error" : ""}`}
                                        placeholder="Ingrese su departamento"
                                        name="department"
                                        value={department}
                                        onChange={(e) => {
                                            onInputChange(e);
                                            const validation = validarDepartamento(e.target.value);
                                            setErrors((prevState) => ({
                                                ...prevState,
                                                ...validation,
                                            }));
                                        }}
                                    />
                                    {department && (
                                        <i
                                            className={errors.department.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                                        ></i>
                                    )}
                                </div>
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="City" className="form-label fw-bold">Ciudad</label>
                                <div className={`error-text ${errors.city.error ? "active" : ""}`}>
                                    {errors.city.error && <p>{errors.city.message}</p>}
                                </div>
                                <div className="form-group-input">
                                    <input
                                        type={"text"}
                                        className={`form-control ${errors.city.error ? "input-error" : ""}`}
                                        placeholder="Ingrese su ciudad de residencia"
                                        name="city"
                                        value={city}
                                        onChange={(e) => {
                                            onInputChange(e);
                                            const validation = validarCiudad(e.target.value);
                                            setErrors((prevState) => ({
                                                ...prevState,
                                                ...validation,
                                            }));
                                        }}
                                    />
                                    {city && (
                                        <i
                                            className={errors.city.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                                        ></i>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="text-start mb-4">
                            <label htmlFor="Address" className="form-label fw-bold">Dirección</label>
                            <div className={`error-text ${errors.address.error ? "active" : ""}`}>
                                {errors.address.error && <p>{errors.address.message}</p>}
                            </div>
                            <div className="form-group-input">
                                <input
                                    type={"text"}
                                    className={`form-control ${errors.address.error ? "input-error" : ""}`}
                                    placeholder="Ingrese su dirección"
                                    name="address"
                                    value={address}
                                    onChange={(e) => {
                                        onInputChange(e);
                                        const validation = validarDireccion(e.target.value);
                                        setErrors((prevState) => ({
                                            ...prevState,
                                            ...validation,
                                        }));
                                    }}
                                />
                                {address && (
                                    <i
                                        className={errors.address.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                                    ></i>
                                )}
                            </div>
                        </div>
                        {isFormSubmitted && (
                            <div className="error-message">
                                <p>Todos los campos deben ser diligenciados.</p> 
                            </div>
                        )}
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
