import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormCompany from "./FormCompany"; // Asegúrate de importar el componente de formulario de empresa adecuado

export default function AddCompany() {
    const navigate = useNavigate();

    // Estado inicial del formulario de empresa con campos vacíos
    const [company, setCompany] = useState({
        documentType: "",
        documentNumber: "",
        nameCompany: "",
        companyType: "",
        emailAddress: "",
        phoneNumber: "",
        department: "",
        city: "",
        address: "",
        products: "",
        services: "",
    });

    // Función que actualiza el estado del formulario de empresa al cambiar algún valor en los inputs
    const onInputChange = (fieldName, value) => {
        setCompany({ ...company, [fieldName]: value });
    };

    // Función que se ejecuta al enviar el formulario y realiza una petición POST al servidor para agregar la empresa a la base de datos.
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/empresas", company);
            navigate("/tablecompanies");
        } catch (error) {
            // Manejar errores en la solicitud POST aquí
            console.error("Error al agregar la empresa:", error);
        }
    };

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-auto offset-md-2 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold mb-5">Registrar Empresa</h3>
                    <FormCompany company={company} onInputChange={onInputChange} onSubmit={onSubmit}
                    />
                </div>
            </div>
        </section>
    );
}
