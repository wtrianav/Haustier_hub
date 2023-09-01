import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { ActionButtonGroup } from "./ActionButtonGroup";
import axios from "axios";
import FormClient from "./FormClient";

export default function AddClient({show, handleClose, loadClients}) {
    const navigate = useNavigate();

    // Estado para rastrear las mascotas en el componente AddClient
    const [mascotasInput, setMascotasInput] = useState("");

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
    });

    // Función que actualiza el estado del formulario al cambiar algún valor en los inputs
    const onInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "mascotas") {
            setMascotasInput(value); // Actualiza el estado de las mascotas
        } else {
            setClient({ ...client, [name]: value });
        }
    };

     // Función que se ejecuta al enviar el formulario y realiza una petición POST al servidor para agregar el cliente a la base de datos.
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convierte la cadena en un array de IDs de mascotas
            const mascotasArray = mascotasInput.split(",").map(id => id.trim());
            const clientDataToSend = { ...client, mascotas: mascotasArray }; 
            await axios.post("http://localhost:3000/api/clientes", clientDataToSend);

            // Llama a la función loadClients pasada como prop para obtener los datos actualizados
            if (typeof loadClients === 'function') {
                await loadClients();
            }

            // Restablecer el estado del formulario a valores iniciales
            setMascotasInput("");
            setClient({
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
            
            navigate("/tableclients");

            // Cierra el modal
            handleClose();
        } catch (error) {
            console.error("Error al agregar el cliente:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold">Registrar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body className="mx-5 mt-3">
                <FormClient
                    client={client}
                    onInputChange={onInputChange}
                    onSubmit={onSubmit}
                    mascotasInput={mascotasInput}
                />
            </Modal.Body>
            <Modal.Footer className="d-grid gap-4 d-md-flex mb-3 justify-content-md-center">
                <ActionButtonGroup
                    acceptText="ACEPTAR"
                    cancelText="CANCELAR"
                    onCancel={handleClose}
                    onAccept={onSubmit} 
                />
            </Modal.Footer>
        </Modal>
    );
}
