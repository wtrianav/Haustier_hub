import React, { useState } from "react";
import { validarDocumento, validarNombreEmpresa, validarEmail, validarTelefono, validarDepartamento, validarCiudad, validarDireccion } from "../validations/CompanyValidations";
import MultiSelectField from "../formFields/MultiSelectField";
import SelectField from "../formFields/SelectField";
import InputField from "../formFields/InputField";
import ButtonForm from "../buttons/ButtonForm";
import './formCompany.css';

export default function FormCompany({ company, onInputChange, onSubmit }) {
    const [errors, setErrors] = useState({
        document: { error: false, message: "" },
        company: { error: false, message: "" },
        email: { error: false, message: "" },
        phone: { error: false, message: "" },
        department: { error: false, message: "" },
        city: { error: false, message: "" },
        address: { error: false, message: "" },
    });

    //Estado para rastrear el envío del formulario.
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Realizar validación en todos los campos.
        const validationErrors = {
            documentNumber: validarDocumento(company.documentNumber),
            nameCompany: validarNombreEmpresa(company.nameCompany),
            emailAddress: validarEmail(company.emailAddress),
            phoneNumber: validarTelefono(company.phoneNumber),
            department: validarDepartamento(company.department),
            city: validarCiudad(company.city),
            address: validarDireccion(company.address),
        };

        // Verificar si hay campos vacíos
        const hasEmptyFields = Object.values(company).some(value => value === "");

        if (hasEmptyFields) {
            setIsFormSubmitted(true);
            return;
        }

        // Verificar si hay errores de validación en algún campo.
        if (Object.values(validationErrors).some(error => error.error)) {
            setErrors(validationErrors);
            return;
        }

        // Si todas las comprobaciones son exitosas, enviar el formulario.
        onSubmit(e);
    };

    const {
        documentType,
        documentNumber,
        nameCompany,
        companyType,
        emailAddress,
        phoneNumber,
        department,
        city,
        address,
        products,
        services,
    } = company;

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
                        { value: "NIT", label: "NIT" },
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
                <SelectField
                    label="Tipo de empresa"
                    name="companyType"
                    value={companyType}
                    onChange={(e) => onInputChange("companyType", e.target.value)}
                    options={[
                        { value: "Select", label: "Seleccione una opción" },
                        { value: "Persona Natural", label: "Persona Natural" },
                        { value: "Persona Jurídica", label: "Persona Jurídica" },
                    ]}
                />
            </div>
            <div className="row">
                <InputField
                    label="Nombre de la Empresa"
                    name="nameCompany"
                    value={nameCompany}
                    error={errors.company.error ? errors.company.message : ""}
                    placeholder="Ingrese el nombre de la empresa"
                    onChange={(e) => {
                        onInputChange("nameCompany", e.target.value);
                        const validation = validarNombreEmpresa(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation,
                        }));
                    }}
                    icon={
                        nameCompany && (
                            <i
                                className={errors.company.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
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
            <div className="row">
                <MultiSelectField
                    label="Productos"
                    name="products"
                    value={products}
                    onChange={(selectedItems) => onInputChange("products", selectedItems)}
                    options={[
                        { value: "product1", label: "Producto 1" },
                        { value: "product2", label: "Producto 2" },
                        { value: "product3", label: "Producto 3" },
                        { value: "product4", label: "Producto 4" },
                        { value: "product5", label: "Producto 5" },
                        { value: "product6", label: "Producto 6" },
                    ]}
                />
                <MultiSelectField
                    label="Servicios"
                    name="services"
                    value={services}
                    onChange={(selectedItems) => onInputChange("services", selectedItems)}
                    options={[
                        { value: "service1", label: "Servicio 1" },
                        { value: "service2", label: "Servicio 2" },
                        { value: "service3", label: "Servicio 3" },
                        { value: "service4", label: "Servicio 4" },
                        { value: "service5", label: "Servicio 5" },
                        { value: "service6", label: "Servicio 6" },
                    ]}
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
                        to="/tablecompanies"
                        text="CANCELAR"
                        className="btn-danger btn-form"
                    />
                </div>
        </form>
    );
}
