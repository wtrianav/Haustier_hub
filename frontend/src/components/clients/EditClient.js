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
    });


    // actualiza el estado client con el nuevo valor del campo.
    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // envía la solicitud PUT al servidor con el objeto client actualizado
        await axios.put(`http://localhost:3000/api/personas/${id}`, client);
        // navega a la página principal después de que se haya actualizado el cliente
        navigate("/tableclients");
    };

    const loadClient = async () => {
		try {
			const result = await axios.get(`http://localhost:3000/api/personas/${id}`);
			console.log(result.data); // Verificar los datos en la consola
			const clientData = result.data;
			setClient(clientData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// carga los datos del cliente una vez que se monta el componente
		loadClient();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    if (Object.values(client).every((value) => value === "")) {
		return <p>Cargando datos del cliente...</p>; // Mostrar un mensaje o un indicador de carga mientras se cargan los datos
	}

    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
                    <h3 className="text-center fw-bold">Editar Cliente</h3>
                    <FormClient client={client} onInputChange={onInputChange} onSubmit={onSubmit}/>
                </div>    
            </div>        
        </section>
    );
}
