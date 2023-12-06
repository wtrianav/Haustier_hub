import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackToTableLink from "../buttons/BackToTableLink";

export default function ViewPet() {
    const { id } = useParams();
    const [pet, setPet] = useState(null);

    useEffect(() => {
        const loadPet = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/mascotas/${id}`);
                setPet(response.data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        loadPet();
    }, [id]);

    return (
        <section className="container bg-white">
            {pet ? (
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 p-4 mt-2">
                        <h3 className="text-center m-4 fw-bold">Detalle de la mascota</h3>
                        <div className="card border-primary rounded shadow">
                            <div className="card-header bg-primary">
                                <p className="card-text text-white fw-bold">Mascota con el id: {id}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>ObjectID: </b>
                                    {pet._id}
                                </li>
                                <li className="list-group-item">
                                    <b>Nombre: </b>
                                    {pet.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Fecha de Nacimiento: </b>
                                    {pet.birthDate}
                                </li>
                                <li className="list-group-item">
                                    <b>Tipo de Mascota: </b>
                                    {pet.petType}
                                </li>
                                <li className="list-group-item">
                                    <b>Raza: </b>
                                    {pet.breed}
                                </li>
                                <li className="list-group-item">
                                    <b>Género: </b>
                                    {pet.gender}
                                </li>
                                <li className="list-group-item">
                                    <b>Color: </b>
                                    {pet.color}
                                </li>
                                <li className="list-group-item">
                                    <b>Fecha de creación del registro: </b>
                                    {pet.date}
                                </li>
                                <li className="list-group-item">
                                    <b>Hora de creación del registro: </b>
                                    {pet.time}
                                </li>
                            </ul>
                        </div>
                        <BackToTableLink 
                            className="btn-primary my-2 mt-4 btn-back" 
                            to="/tablepets"
                            text="VOLVER"
                        />
                    </div>
                </div>
            ) : (
                <div>No se pudo cargar la información de la mascota.</div>
            )}
        </section>
    );
}
