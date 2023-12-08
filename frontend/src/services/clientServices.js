import { apiClient } from "../api/apiClient";

export const addClient = async (client) => {
    try {
        const response = await apiClient.post("/clientes", client);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al agregar el cliente', error);
        throw error;
    }
}

export const getClients = async () => {
    try {
        const response = await apiClient.get("/clientes");
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener los clientes', error);
        throw error;
    }
}

export const getClient = async (id) => {
    try {
        const response = await apiClient.get(`/clientes/${id}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener el cliente', error);
        throw error;
    }
}

export const updateClient = async (client) => {
    console.log(client);
    try {
        const response = await apiClient.put(`/clientes/${client.id}`, client);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al actualizar el cliente', error);
        throw error;
    }
}

export const deleteClient = async (id) => {
    try {
        const response = await apiClient.delete(`/clientes/${id}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al eliminar el cliente', error);
        throw error;
    }
}