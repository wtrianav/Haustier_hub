import { apiClient } from "../api/apiClient";

export const addCompany = async (company) => {
    try {
        const response = await apiClient.post("/empresas", company);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al agregar la empresa', error);
        throw error;
    }
}

export const getCompanies = async () => {
    try {
        const response = await apiClient.get("/empresas");
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener las empresas', error);
        throw error;
    }
}

export const getCompany = async (id) => {
    try {
        const response = await apiClient.get(`/empresas/${id}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener la empresa', error);
        throw error;
    }
}

export const updateCompany = async (company) => {
    console.log(company);
    try {
        const response = await apiClient.put(`/empresas/${company.id}`, company);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al actualizar la empresa', error);
        throw error;
    }
}

export const deleteCompany = async (id) => {
    try {
        const response = await apiClient.delete(`/empresas/${id}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al eliminar la empresa', error);
        throw error;
    }
}
