import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormPet from "./FormPet"; // Assuming you have a FormPet component for adding pets

export default function AddPet() {
    const navigate = useNavigate();

    const [pet, setPet] = useState({
        name: "",
        birthDate: "",
        petType: "",
        breed: "",
        gender: "",
        color: "",
    });

    const onInputChange = (name, value) => {
        setPet({ ...pet, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/mascotas", pet);
            navigate("/tablepets");
        } catch (error) {
            console.error("Error al agregar la mascota:", error);
        }
    };

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold">CREAR MASCOTA</h3>
                    <FormPet pet={pet} onInputChange={onInputChange} onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
}
