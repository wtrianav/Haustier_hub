import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateAdvisor, getAdvisor } from "../../services/advisorServices";
import toast from 'react-hot-toast';
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
        // console.log('Advisor a editar:', advisor);
        try {
            await updateAdvisor(advisor);
            toast.success("Asesor actualizado con éxito");
            setTimeout(() => {
                navigate("/tableadvisors");
            }, 3000);
        } catch (error) {
            console.error("Error al editar asesor:", error);
        }
    };

    const loadAdvisor = async () => {
        try {
            const response = await getAdvisor(id);
            console.log(response)
            setAdvisor({ ...response });
        } catch (error) {
            console.error("Error al cargar asesor:", error);
        }
    };

    useEffect(() => {
        // Carga los datos del asesor una vez que se monta el componente
        loadAdvisor();
    }, []);


    return (
        <>
            <section className="container">
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                        <h3 className="text-center fw-bold mb-5">Editar Asesor</h3>
                        <FormAdvisor advisor={advisor} onInputChange={onInputChange} onSubmit={onSubmit} />
                    </div>
                </div>
            </section>
        </>

    );
}