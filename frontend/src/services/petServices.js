import { apiClient } from "../api/apiClient";

export const addPet = async (pet) => {
    try {
        const response = await apiClient.post("/mascotas", pet);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al agregar la mascota', error);
        throw error;
    }
}

export const getPets = async () => {
    try {
        const response = await apiClient.get("/mascotas");
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener las mascotas', error);
        throw error;
    }
}

export const getPet = async (id) => {
    try {
        const response = await apiClient.get(`/mascotas/${id}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener la mascota', error);
        throw error;
    }
}

export const updatePet = async (pet) => {
    console.log(pet);
    try {
        const response = await apiClient.put(`/mascotas/${pet.id}`, pet);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al actualizar la mascota', error);
        throw error;
    }
}

export const deletePet = async (id) => {
    try {
        const response = await apiClient.delete(`/mascotas/${id}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al eliminar la mascota', error);
        throw error;
    }
}