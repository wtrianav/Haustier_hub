import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormClient from "./FormClient";

export default function EditClient() {
    const navigate = useNavigate();
    const { id } = useParams();
    

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
        mascotas: "",
    });

    const [mascotasInput, setMascotasInput] = useState("");

    // Actualiza el estado client con el nuevo valor del campo.
const onInputChange = (e) => {
	if (e.target.name === "mascotas") {
		// Verifica si el campo de entrada está vacío antes de actualizar el estado
		if (e.target.value === "") {
			setMascotasInput("");
		} else {
			setMascotasInput(e.target.value);
		}
		console.log("Valor de mascotasInput:", e.target.value);
	} else {
		// Actualiza otros campos del cliente
		setClient({ ...client, [e.target.name]: e.target.value });
	}
};

    const onSubmit = async (e) => {
        e.preventDefault();
        
        // Actualiza el campo de mascotas en el estado del cliente antes de enviarlo al servidor
        const updatedClient = { ...client, mascotas: mascotasInput ? mascotasInput.split(",").map((id) => id.trim()) : [] };
        console.log("Datos del cliente a enviar:", updatedClient);
    
        try {
            await axios.put(`http://localhost:3001/api/clientes/${id}`, updatedClient);
            // Navega a la página principal después de que se haya actualizado el cliente
            navigate("/tableclients");
        } catch (error) {
            console.error("Error al editar el cliente:", error);
        }
    };

    const loadClient = async () => {
        try {
            const result = await axios.get(`http://localhost:3001/api/clientes/${id}`);
            const clientData = result.data;
    
            // Asegurémonos de que 'mascotas' sea un array
            const mascotasArray = Array.isArray(clientData.mascotas) ? clientData.mascotas : [];
            const mascotasString = mascotasArray.join(", "); // Convierte el array en una cadena separada por comas
    
            setClient(clientData);
            setMascotasInput(mascotasString);
        } catch (error) {
            console.log(error);
        }
    };
    

    useEffect(() => {
        loadClient();
        // eslint-disable-next-line
    }, []); // Llamar a loadClient solo una vez al cargar el componente

    if (Object.values(client).every((value) => value === "")) {
        // Mostrar un mensaje o un indicador de carga mientras se cargan los datos
        return <p>Cargando datos del cliente...</p>;
    }

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold mb-5">Editar Cliente</h3>
                    <FormClient client={client} onInputChange={onInputChange} onSubmit={onSubmit} mascotasInput={mascotasInput} />
                </div>
            </div>
        </section>
    );
}
