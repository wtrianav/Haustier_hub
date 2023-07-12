import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditClient() {
    let navigate = useNavigate();
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

    const { documentType, documentNumber, namePerson, lastNamePerson, emailAddress, phoneNumber, department, city, address } = client;

    // actualiza el estado client con el nuevo valor del campo.
    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // envía la solicitud PUT al servidor con el objeto client actualizado
        await axios.put(`http://localhost:3000/api/personas/${id}`, client);
        // navega a la página principal después de que se haya actualizado el cliente
        navigate("/");
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
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Editar Cliente</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Documenttype" className="form-label fw-bold">
                                    Tipo de documento
                                </label>
                                <select
                                    className="form-select"
                                    name="documentType"
                                    value={documentType}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value="Select">Seleccione una opción</option>
                                    <option value="CC">CC</option>
                                    <option value="TI">TI</option>
                                    <option value="PP">PP</option>
                                </select>
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Documentnumber" className="form-label fw-bold">Número de documento</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su número de documento"
                                    name="documentNumber"
                                    value={documentNumber}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Name" className="form-label fw-bold">Nombre</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su nombre"
                                    name="namePerson"
                                    value={namePerson}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Lastname" className="form-label fw-bold">Apellido</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su apellido"
                                    name="lastNamePerson"
                                    value={lastNamePerson}
                                    onChange={(e) => onInputChange(e)} 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Email" className="form-label fw-bold">Email</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su email"
                                    name="emailAddress"
                                    value={emailAddress}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="Phonenumber" className="form-label fw-bold">Teléfono</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su número de teléfono"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-start mb-3 col">
                                <label htmlFor="Department" className="form-label fw-bold">Departamento</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su departamento"
                                    name="department"
                                    value={department}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="text-start mb-3 col">
                                <label htmlFor="City" className="form-label fw-bold">Ciudad</label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Ingrese su ciudad de residencia"
                                    name="city"
                                    value={city}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className="text-start mb-5">
                            <label htmlFor="Address" className="form-label fw-bold">Dirección</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Ingrese su dirección"
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Aceptar</button>
                        <Link className="btn btn-outline-danger mx-2" to="/tableclients">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
