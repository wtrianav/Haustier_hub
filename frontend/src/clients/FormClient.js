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
import SelectField from "../components/formFields/SelectField";
import InputField from "../components/formFields/InputField";
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
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <SelectField
                    label="Tipo de documento"
                    name="documentType"
                    value={documentType}
                    onChange={(e) => onInputChange(e)}
                    options={[
                        { value: "Select", label: "Seleccione una opción" },
                        { value: "CC", label: "CC" },
                        { value: "TI", label: "TI" },
                        { value: "PP", label: "PP" },
                    ]}
                />
                <InputField
                    label="Número de documento"
                    name="documentNumber"
                    value={documentNumber}
                    error={errors.document.error ? errors.document.message : ""}
                    placeholder="Ingrese su número de documento"
                    onChange={(e) => {
                        onInputChange(e);
                        const validation = validarDocumento(e.target.value);
                        setErrors((prevState) => ({
                        ...prevState,
                        ...validation,
                        }));
                    }}
                    icon={
                        documentNumber && (
                            <i
                                className={errors.document.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
            </div>
            <div className="row">
                <InputField
                    label="Nombre"
                    name="namePerson"
                    value={namePerson}
                    error={errors.name.error ? errors.name.message : ""}
                    placeholder="Ingrese su nombre"
                    onChange={(e) => {
                        onInputChange(e);
                        const validation = validarNombre(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation,
                        }));
                    }}
                    icon={
                        namePerson && (
                            <i
                                className={errors.name.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
                <InputField
                    label="Apellido"
                    name="lastNamePerson"
                    value={lastNamePerson}
                    error={errors.lastName.error ? errors.lastName.message : ""}
                    placeholder="Ingrese su apellido"
                    onChange={(e) => {
                        onInputChange(e);
                        const validation = validarApellido(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation,
                        }));
                    }}
                    icon={
                        lastNamePerson && (
                            <i
                                className={errors.lastName.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
            </div>
            <div className="row">
                <InputField
                    label="Email"
                    name="emailAddress"
                    value={emailAddress}
                    error={errors.email.error ? errors.email.message : ""}
                    placeholder="Ingrese su email"
                    onChange={(e) => {
                        onInputChange(e);
                        const validation = validarEmail(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation,
                        }));
                    }}
                    icon={
                        emailAddress && (
                            <i
                                className={errors.email.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
                <InputField
                    label="Teléfono"
                    name="phoneNumber"
                    value={phoneNumber}
                    error={errors.phone.error ? errors.phone.message : ""}
                    placeholder="Ingrese su número telefónico"
                    onChange={(e) => {
                        onInputChange(e);
                        const validation = validarTelefono(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation,
                        }));
                    }}
                    icon={
                        phoneNumber && (
                            <i
                                className={errors.phone.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
            </div>
            <div className="row">
                <InputField
                    label="Departamento"
                    name="department"
                    value={department}
                    error={errors.department.error ? errors.department.message : ""}
                    placeholder="Ingrese su departamento"
                    onChange={(e) => {
                        onInputChange(e);
                        const validation = validarDepartamento(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation,
                        }));
                    }}
                    icon={
                        department && (
                            <i
                                className={errors.department.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
                <InputField
                    label="Ciudad"
                    name="city"
                    value={city}
                    error={errors.city.error ? errors.city.message : ""}
                    placeholder="Ingrese su ciudad de residencia"
                    onChange={(e) => {
                    onInputChange(e);
                        const validation = validarCiudad(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation,
                        }));
                    }}
                    icon={
                        city && (
                            <i
                                className={errors.city.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
            </div>
            <InputField
                label="Dirección"
                name="address"
                value={address}
                error={errors.address.error ? errors.address.message : ""}
                placeholder="Ingrese su dirección"
                onChange={(e) => {
                    onInputChange(e);
                    const validation = validarDireccion(e.target.value);
                    setErrors((prevState) => ({
                    ...prevState,
                    ...validation,
                    }));
                }}
                extraClass="text-start mb-4" // Agrega la clase específica para dirección
                icon={
                    address && (
                        <i
                            className={errors.address.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                        ></i>
                    )
                }
            />
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
	);
}
