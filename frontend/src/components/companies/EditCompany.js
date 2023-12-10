import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormCompany from "./FormCompany";

export default function EditCompany() {
    const navigate = useNavigate();
    const { id } = useParams();

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
        products: [],
        services: [],
    });

    // Actualiza el estado de la empresa con el nuevo valor del campo.
    const onInputChange = (fieldName, value) => {
        console.log(`Campo ${fieldName} actualizado con valor: ${value}`);
        setCompany({ ...company, [fieldName]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // Envía la solicitud PUT al servidor con el objeto company actualizado
        await axios.put(`http://localhost:3000/api/empresas/${id}`, company);
        // Navega a la página principal después de que se haya actualizado la empresa
        navigate("/tablecompanies");
    };

    const loadCompany = async () => {
        try {
            const result = await axios.get(`http://localhost:3000/api/empresas/${id}`);
            const companyData = result.data;
            console.log("Datos de la empresa cargados:", companyData);
            setCompany(companyData);
        } catch (error) {
            console.log("Error al cargar datos de la empresa:", error);
        }
    };

    useEffect(() => {
        // Carga los datos de la empresa una vez que se monta el componente
        loadCompany();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (Object.values(company).every((value) => value === "")) {
        return <p>Cargando datos de la empresa...</p>;
    }

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold mb-5">Editar Empresa</h3>
                    <FormCompany company={company} onInputChange={onInputChange} onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
}
