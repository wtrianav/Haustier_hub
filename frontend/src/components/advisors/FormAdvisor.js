import React, { useState } from "react";
import {
    validarDocumento,
    validarNombre,
    validarApellido,
    validarEmail,
    validarTelefono,
    validarDepartamento,
    validarCiudad,
    validarDireccion,
} from "../validations/AdvisorValidations";
import SelectField from "../formFields/SelectField";
import InputField from "../formFields/InputField";
import ButtonForm from "../buttons/ButtonForm";
import './formAdvisor.css';

export default function FormAdvisor({ advisor, onInputChange, onSubmit }) {

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
            document: validarDocumento(advisor.documentNumber),
            name: validarNombre(advisor.namePerson),
            lastName: validarApellido(advisor.lastNamePerson),
            email: validarEmail(advisor.emailAddress),
            phone: validarTelefono(advisor.phoneNumber),
            department: validarDepartamento(advisor.department),
            city: validarCiudad(advisor.city),
            address: validarDireccion(advisor.address),
        };

        //Verificar si hay campos vacíos
        const hasEmptyFields = Object.values(advisor).some(value => value === "");

        if (hasEmptyFields) {
            setIsFormSubmitted(true);
            setErrors((prevState) => ({
                ...prevState,
                document: { error: true, message: "Este campo es obligatorio" },
                name: { error: true, message: "Este campo es obligatorio" },
                lastName: { error: true, message: "Este campo es obligatorio" },
                email: { error: true, message: "Este campo es obligatorio" },
                phone: { error: true, message: "Este campo es obligatorio" },
                department: { error: true, message: "Este campo es obligatorio" },
                city: { error: true, message: "Este campo es obligatorio" },
                address: { error: true, message: "Este campo es obligatorio" },
            }));
            return;
        }

        if (Object.values(validationErrors).some(error => error.error)) {
            console.log("Errores de validación encontrados:", validationErrors);
            setErrors(validationErrors);
            return;
        }

        onSubmit(e);
    };

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
    } = advisor;

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <SelectField
                    label="Tipo de documento"
                    name="documentType"
                    value={documentType}
                    onChange={(e) => onInputChange("documentType", e.target.value)}
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
                        onInputChange("documentNumber", e.target.value);
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
                        onInputChange("namePerson", e.target.value);
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
                        onInputChange("lastNamePerson", e.target.value);
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
                        onInputChange("emailAddress", e.target.value);
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
                        onInputChange("phoneNumber", e.target.value);
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
                        onInputChange("department", e.target.value);
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
                        onInputChange("city", e.target.value);
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
            <div className="row">
                <InputField
                    label="Dirección"
                    name="address"
                    value={address}
                    error={errors.address.error ? errors.address.message : ""}
                    placeholder="Ingrese su dirección"
                    onChange={(e) => {
                        onInputChange("address", e.target.value);
                        const validation = validarDireccion(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation,
                        }));
                    }}
                    icon={
                        address && (
                            <i
                                className={errors.address.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
            </div>
            {isFormSubmitted && (
                <div className="error-message">
                    <p>Todos los campos deben ser diligenciados.</p>
                </div>
            )}
            <div className="d-grid gap-4 d-md-flex mt-3 justify-content-md-center">
                <ButtonForm
                    type="submit"
                    text="ACEPTAR"
                    className="btn-primary btn-form"
                />
                <ButtonForm
                    to="/tableadvisors"
                    text="CANCELAR"
                    className="btn-danger btn-form"
                />
            </div>
        </form>
    );
}
