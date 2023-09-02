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
        mascotas: [],
    });

    // Función que actualiza el estado del formulario al cambiar algún valor en los inputs
    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    // Función que se ejecuta al enviar el formulario y realiza una petición POST al servidor para agregar el cliente a la base de datos.
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/clientes", client);
            navigate("/tableclients");
        } catch (error) {
            // Manejar errores en la solicitud POST aquí
            console.error("Error al agregar el cliente:", error);
        }
    };

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold">Registrar Cliente</h3>
                    <FormClient client={client} onInputChange={onInputChange} onSubmit={onSubmit} />
                </div>    
            </div>        
        </section>
    );
}

