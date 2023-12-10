import React, { useState, useEffect, useMemo } from "react";
import {
    validarDocumento,
    validarNombre,
    validarApellido,
    validarEmail,
    validarTelefono,
    validarDireccion,
} from "../validations/AdvisorValidations";
import ButtonForm from "../buttons/ButtonForm";
import { getDepartments, getCities } from "../../services/formServices";
import { getDepartmentOptions, getCityOptions } from "../../selectors/formSelectors";
import FormInput from "../formFields/FormInput/FormInput";

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

    useEffect(() => {
        const loadDepartments = async() => {
            try {
                const departmentsResponse = await getDepartments();
                console.log('Han sido cargados los departamentos');
                setDepartments(departmentsResponse || []);
            } catch (error) {
                console.log("Error al cargar los departamentos:", error);
            }
        };

        loadDepartments();
    },[])

    // Carga las ciudades de acuerdo al id del departamento
    useEffect(() => {
        const loadCities = async () => {
            try {
                const citiesResponse = await getCities(selectedDepartment);
                console.log('Han sido cargadas las ciudades');
                setCities(citiesResponse || []);
            } catch (error) {
                console.log("Error al cargar las ciudades:", error);
            }
        };

        if (selectedDepartment) {
            loadCities();
        } else {
            setCities([]);
        }
    }, [selectedDepartment])

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

    const handleChange = (newValue, e) => {
        const { name } = e.target;
        onInputChange(name, newValue);
    };

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
        return getDepartmentOptions(departments.departments);
    }, [departments]);

    const cityOptions = useMemo(() => {
        return getCityOptions(cities.cities);
    }, [cities]);

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

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <FormInput
                    label="Tipo de documento"
                    name="documentType"
                    type="select"
                    initialValue={documentType}
                    onChange={handleChange}
                    selectOptions={[
                        { value: "", label: "Seleccione una opción" },
                        { value: "CC", label: "CC" },
                        { value: "TI", label: "TI" },
                        { value: "PP", label: "PP" },
                    ]}
                />
               <FormInput
                    label="Número de documento"
                    name="documentNumber"
                    type="text"
                    initialValue={documentNumber}
                    placeholder="Ingrese su número de documento"
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <FormInput
                    label="Nombre"
                    name="namePerson"
                    type="text"
                    initialValue={namePerson}
                    placeholder="Ingrese su nombre"
                    onChange={handleChange}
                />
                <FormInput
                    label="Apellido"
                    name="lastNamePerson"
                    type="text"
                    initialValue={lastNamePerson}
                    placeholder="Ingrese su apellido"
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <FormInput
                    label="Email"
                    name="emailAddress"
                    type="email"
                    initialValue={emailAddress}
                    placeholder="Ingrese su email"
                    onChange={handleChange}
                />
                <FormInput
                    label="Teléfono"
                    name="phoneNumber"
                    type="text"
                    initialValue={phoneNumber}
                    placeholder="Ingrese su número telefónico"
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <FormInput
                    label="Departamento"
                    name="department"
                    type="select"
                    initialValue={selectedDepartment}
                    onChange={handleChange}
                    selectOptions={[
                        { value: "", label: "Seleccione un departamento" },
                        ...departmentOptions
                    ]}
                />
                <FormInput
                    label="Ciudad"
                    name="city"
                    type="select"
                    initialValue={advisor.city}
                    onChange={handleChange}
                    selectOptions={[
                        { value: "", label: "Seleccione una ciudad" },
                        ...cityOptions
                    ]}
                />
            </div>
            <div className="row">
                <FormInput
                    label="Dirección"
                    name="address"
                    type="text"
                    initialValue={address}
                    placeholder="Ingrese su dirección"
                    onChange={handleChange}
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