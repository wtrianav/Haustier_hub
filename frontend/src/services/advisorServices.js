import { apiClient } from "../api/apiClient";

export const addAdvisor = async (advisor) => {
    try {
        const response = await apiClient.post("/asesores", advisor);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al agregar el asesor', error);
        throw error;
    }
}

export const getAdvisors = async () => {
    try {
        const response = await apiClient.get("/asesores");
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener los asesores', error);
        throw error;
    }
}

export const getAdvisor = async (id) => {
    try {
        const response = await apiClient.get(`/asesores/${id}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener el asesor', error);
        throw error;
    }
}

export const updateAdvisor = async (advisor) => {
    console.log(advisor);
    try {
        const response = await apiClient.put(`/asesores/${advisor.id}`, advisor);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al actualizar el asesor', error);
        throw error;
    }
}

export const deleteAdvisor = async (id) => {
    try {
        const response = await apiClient.delete(`/asesores/${id}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al eliminar el asesor', error);
        throw error;
    }
}