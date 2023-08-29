import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validarNombre, validarRaza, validarColor } from "../validations/PetValidations";
import SelectField from "../formFields/SelectField";
import InputField from "../formFields/InputField";
import DateField from "../formFields/DateField";
import './formPet.css';


export default function FormPet({ pet, onInputChange, onSubmit }) {
    const [errors, setErrors] = useState({
        name: { error: false, message: "" },
        breed: { error: false, message: "" },
        color: { error: false, message: "" },
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Realizar validación en todos los campos.
        const validationErrors = {
            name: validarNombre(pet.name),
            breed: validarRaza(pet.breed),
            color: validarColor(pet.color),
        };

        // Verificar si hay campos vacíos
        const hasEmptyFields = Object.values(pet).some(value => value === "");

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
        name,
        birthDate,
        petType,
        breed,
        gender,
        color,
    } = pet;

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <InputField
                    label="Nombre"
                    name="name"
                    value={name}
                    error={errors.name.error ? errors.name.message : ""}
                    placeholder="Ingrese el nombre"
                    onChange={(e) => {
                        onInputChange(e.target.name, e.target.value);
                        const validation = validarNombre(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation, // Actualizar solo los errores del campo "Nombre"
                        }));
                    }}
                    icon={
                        name && (
                            <i
                                className={errors.name.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
                <DateField
                    label="Fecha de Nacimiento"
                    name="birthDate"
                    selectedDate={birthDate}
                    onDateChange={(name, date) => onInputChange(name, date)}
                />
            </div>
            <div className="row">
                <SelectField
                    label="Tipo"
                    name="petType"
                    value={petType}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)}
                    options={[
                        { value: "Select", label: "Seleccione un tipo" },
                        { value: "Perro", label: "Perro" },
                        { value: "Gato", label: "Gato" },
                    ]}
                />
                <InputField
                    label="Raza"
                    name="breed"
                    value={breed}
                    error={errors.breed.error ? errors.breed.message : ""}
                    placeholder="Ingrese la raza"
                    onChange={(e) => {
                        onInputChange(e.target.name, e.target.value);
                        const validation = validarRaza(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation, // Actualizar solo los errores del campo "Raza"
                        }));
                    }}
                    icon={
                        breed && (
                            <i
                                className={errors.breed.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
                            ></i>
                        )
                    }
                />
            </div>
            <div className="row">
                <SelectField
                    label="Género"
                    name="gender"
                    value={gender}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)}
                    options={[
                        { value: "Select", label: "Seleccione el género" },
                        { value: "Macho", label: "Macho" },
                        { value: "Hembra", label: "Hembra" },
                    ]}
                />
                <InputField
                    label="Color"
                    name="color"
                    value={color}
                    error={errors.color.error ? errors.color.message : ""}
                    placeholder="Ingrese el color"
                    onChange={(e) => {
                        onInputChange(e.target.name, e.target.value);
                        const validation = validarColor(e.target.value);
                        setErrors((prevState) => ({
                            ...prevState,
                            ...validation, // Actualizar solo los errores del campo "Color"
                        }));
                    }}
                    icon={
                        color && (
                            <i
                                className={errors.color.error ? "fa-solid fa-circle-xmark error-icon" : "fa-solid fa-circle-check success-icon"}
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
                <button type="submit" className="btn btn-primary btn-form">ACEPTAR</button>
                <Link className="btn btn-danger btn-form" to="/tablepets">CANCELAR</Link>
            </div>
        </form>
    );
}
