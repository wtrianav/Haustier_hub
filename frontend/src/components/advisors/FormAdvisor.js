import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
    validarDocumento,
    validarNombre,
    validarApellido,
    validarEmail,
    validarTelefono,
    validarDireccion,
} from "../validations/AdvisorValidations";
import SelectField from "../formFields/SelectField";
import InputField from "../formFields/InputField";
import ButtonForm from "../buttons/ButtonForm";

export default function FormAdvisor({ advisor, onInputChange, onSubmit }) {
    
    // Verifica si está en modo edición (cuando pasa un objeto advisor)
    const isEdit = !!advisor;

    const [errors, setErrors] = useState({
        document: { error: false, message: "" },
        name: { error: false, message: "" },
        lastName: { error: false, message: "" },
        email: { error: false, message: "" },
        phone: { error: false, message: "" },
        address: { error: false, message: "" },
    });

    //Estado para rastrear el envío del formulario.
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [departments, setDepartments] = useState([]);
    const [cities, setCities] = useState([]);

    // Estado para que la app sepa cual es el departamento seleccionado
    const [selectedDepartment, setSelectedDepartment] = useState(advisor.department || "");

    const loadDepartments = async() => {
        try {
            const departmentsResponse = await axios.get(
                `http://localhost:3001/api/departments`
            );
            setDepartments(departmentsResponse.data || []);
        } catch (error) {
            console.log("Error al cargar los departamentos:", error);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //Realizar validación en todos los campos.
        const validationErrors = {
            document: validarDocumento(advisor.documentNumber),
            name: validarNombre(advisor.namePerson),
            lastName: validarApellido(advisor.lastNamePerson),
            email: validarEmail(advisor.emailAddress),
            phone: validarTelefono(advisor.phoneNumber),
            address: validarDireccion(advisor.address),
        };

        //Verificar si hay campos vacíos
        const hasEmptyFields = Object.values(advisor).some(value => value === "");

        if (hasEmptyFields) {
            setIsFormSubmitted(true);
            return;
        }

        if (Object.values(validationErrors).some(error => error.error)) {
            console.log("Errores de validación encontrados:", validationErrors);
            setErrors(validationErrors);
            return;
        }
        onSubmit(e);
    };

    useEffect(() => {
        loadDepartments();
    },[])

    const {
        documentType,
        documentNumber,
        namePerson,
        lastNamePerson,
        emailAddress,
        phoneNumber,
        address,
    } = advisor;

    
    const departmentOptions = useMemo(() => {
        return Array.isArray(departments.departments)
            ? departments.departments.map((dept) => ({
                value: dept._id,
                label: dept.name,
            }))
            : [];
    }, [departments]);

    const cityOptions = useMemo(() => {
        return Array.isArray(cities.cities)
            ? cities.cities.map((cty) => ({
                value: cty.name,
                label: cty.name,
            }))
            : [];
    }, [cities])

    // Carga o limpia el setSelectedDepartment basado en si se está editando o no
    useEffect(() => {
        if(isEdit) {
            if (advisor && advisor.department) {
                const departmentId = departmentOptions.find(dept => dept.label === advisor.department)?.value;
                setSelectedDepartment(departmentId);
            } else {
                setSelectedDepartment("");
            }
        } else {
            setSelectedDepartment("");
        }
    }, [isEdit, advisor, departmentOptions])

    // Carga las ciudades de acuerdo al id del departamento
    useEffect(() => {
        if (selectedDepartment) {
            const loadCities = async () => {
                try {
                    const citiesResponse = await axios.get(
                        `http://localhost:3001/api/cities?department_id=${selectedDepartment}`
                    );
                    setCities(citiesResponse.data || []);
                } catch (error) {
                    console.log("Error al cargar las ciudades:", error);
                }
            }
            loadCities();
        } else {
            setCities([]);
        }
    }, [selectedDepartment])

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <SelectField
                    label="Tipo de documento"
                    name="documentType"
                    value={documentType}
                    onChange={(e) => onInputChange("documentType", e.target.value)}
                    options={[
                        { value: "", label: "Seleccione una opción" },
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
                <SelectField
                        label="Departamento"
                        name="department"
                        value={selectedDepartment}
                        onChange={(e) => {
                            onInputChange("department", e.target.value);
                            setSelectedDepartment(e.target.value);
                            
                        }}
                        options={[
                            { value: "", label: "Seleccione un departamento" },
                            ...departmentOptions
                        ]}
                />
                <SelectField
                    label="Ciudad"
                    name="city"
                    value={advisor.city}
                    onChange={(e) => {
                        onInputChange("city", e.target.value);
                    }}
                    options={[
                        { value: "", label: "Seleccione una ciudad" },
                        ...cityOptions
                    ]}
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