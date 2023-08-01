import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormClient from "./FormClient";
import './formClient.css';

export default function AddClient() {
    let navigate = useNavigate();

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
        await axios.post("http://localhost:3000/api/personas", client);
        navigate("/tableclients");
    };

    return (
        <>
            <FormClient client={client} onInputChange={onInputChange} onSubmit={onSubmit}/>
        </>
    );
}
