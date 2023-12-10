import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormAdvisor from "./FormAdvisor";

export default function EditAdvisor() {
    const navigate = useNavigate();
    const { id } = useParams();

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

    // Actualiza el estado del asesor con el nuevo valor del campo.
    const onInputChange = (fieldName, value) => {
        setAdvisor({ ...advisor, [fieldName]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envía la solicitud PUT al servidor con el objeto advisor actualizado
            await axios.put(`http://localhost:3000/api/asesores/${id}`, advisor);
            // Navega a la página principal después de que se haya actualizado el asesor
            navigate("/tableadvisors");
        } catch (error) {
            console.log("Error al enviar la solicitud PUT:", error);
        }
    };

    const loadAdvisor = async () => {
        try {
            const result = await axios.get(`http://localhost:3000/api/asesores/${id}`);
            const advisorData = result.data;
            setAdvisor(advisorData);
        } catch (error) {
            console.log("Error al cargar datos del asesor:", error);
        }
    };

    useEffect(() => {
        // Carga los datos del asesor una vez que se monta el componente
        loadAdvisor();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (Object.values(advisor).every((value) => value === "")) {
        return <p>Cargando datos del asesor...</p>;
    }

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold mb-5">Editar Asesor</h3>
                    <FormAdvisor advisor={advisor} onInputChange={onInputChange} onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
}