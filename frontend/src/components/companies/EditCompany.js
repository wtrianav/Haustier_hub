import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateCompany, getCompany } from "../../services/companyServices";
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
        try {
            await updateCompany(company);
            navigate("/tablecompanies");
        } catch (error) {
            console.error("Error al editar la compañia:", error);
        }
    };

    const loadCompany = async () => {
        try {
            const result = await getCompany(id);
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
