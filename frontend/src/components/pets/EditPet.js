import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormPet from "./FormPet";

export default function EditPet() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [pet, setPet] = useState({
        name: "",
        birthDate: "",
        petType: "",
        breed: "",
        gender: "",
        color: "",
    });

    // actualiza el estado pet con el nuevo valor del campo.
    const onInputChange = (fieldName, value) => {
        setPet({ ...pet, [fieldName]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // Envía la solicitud PUT al servidor con el objeto client actualizado
        await axios.put(`http://localhost:3001/api/mascotas/${id}`, pet);
        // Navega a la página principal después de que se haya actualizado el cliente
        navigate("/tablepets");
    };

    const loadPet = async () => {
		try {
			const result = await axios.get(`http://localhost:3001/api/mascotas/${id}`);
			const petData = result.data;
			setPet(petData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
        // carga los datos del cliente una vez que se monta el componente
		loadPet();
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    if (Object.values(pet).every((value) => value === "")) {
		return <p>Cargando datos de la mascota...</p>;
	}

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold mb-5">Editar Mascota</h3>
                    <FormPet pet={pet} onInputChange={onInputChange} onSubmit={onSubmit}/>
                </div>    
            </div>        
        </section>
    );
}
