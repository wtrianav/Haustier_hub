import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormClient from "./FormClient";

export default function AddClient() {
    const navigate = useNavigate();

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

    // Función que actualiza el estado del formulario al cambiar algún valor en los inputs
    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    // Función que se ejecuta al enviar el formulario y realiza una petición POST al servidor para agregar el cliente a la base de datos.
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/personas", client);
            navigate("/tableclients");
        } catch (error) {
            // Manejar errores en la solicitud POST aquí
            console.error("Error al agregar el cliente:", error);
        }
    };

    return (
        <>
            <FormClient client={client} onInputChange={onInputChange} onSubmit={onSubmit} className="modal fade" id="createClientModal" tabIndex="-1" aria-labelledby="createClientModalLabel" aria-hidden="true"/>
        </>
    );
}
