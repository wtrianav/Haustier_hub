import { apiClient } from "../api/apiClient";

export const getDepartments = async () => {
    try {
        const response = await apiClient.get("/departments");
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener los departamentos', error);
        throw error;
    }
}

export const getCities = async (departmentId) => {
    try {
        const response = await apiClient.get(`/cities?department_name=${departmentId}`);
        return response.data;
    } catch (error) {
        console.log('Hubo un error al obtener las ciudades', error);
        throw error;
    }
}