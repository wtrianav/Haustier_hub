import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormAdvisor from "./FormAdvisor"; // Asegúrate de importar el componente de formulario de asesor adecuado

export default function AddAdvisor() {
    const navigate = useNavigate();

    // Estado inicial del formulario con sus campos vacíos
    const [advisor, setAdvisor] = useState({
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
    const onInputChange = (fieldName, value) => {
        setAdvisor({ ...advisor, [fieldName]: value });
    };

    // Función que se ejecuta al enviar el formulario y realiza una petición POST al servidor para agregar el asesor a la base de datos.
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3000/api/asesores", advisor);
          navigate("/tableadvisors");
        } catch (error) {
          // Manejar errores en la solicitud POST aquí
          console.error("Error al agregar el asesor:", error);
        }
    };

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold">Registrar Asesor</h3>
                    <FormAdvisor advisor={advisor} onInputChange={onInputChange} onSubmit={onSubmit} />
                </div>    
            </div>        
        </section>
    );
}
