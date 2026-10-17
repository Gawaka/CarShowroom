import axios from 'axios';
import type { VehiclesResponse, Vehicle } from '../types/vehicle';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const getVehicles = async (): Promise<VehiclesResponse> => {
    const response = await api.get<VehiclesResponse>('/products/category/vehicle');
    return response.data;
};

export const getVehicleById = async (id: number): Promise<Vehicle> => {
    const response = await api.get<Vehicle>(`/products/${id}`);
    return response.data;
};