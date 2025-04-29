import { api } from "../api"
import axios from "axios";

export const updateCar = async (carId, updatedCarData) => {
  try {
    const response = await api.put(`/updatecar/${carId}`, updatedCarData);
    return response.data.car;
  } catch (error) {
    console.error("Error updating car:", error);
    throw error;
  }
};

export const getCars = async (currentPage) => {
    try {
        const res = await api.get(`/cars?page=${currentPage}&limit=10`)
        return res.data
    } catch (error) {
        return error.response
    }
}

export const getCarDetails = async (id) => {
    try {
        const res = await api.get(`/details/${id}`)
        return res.data
    } catch (error) {
        return error.response
    }
}

export const rentCar = async (data) => {
    try {
        const res = await api.post('/rent', data)
        return res.data
    } catch (error) {
        return error.response
    }
}

export const filterCars = async (query) => {
    const res = await api.get("/filter", { params: query })
    return res.data
}

export const addToFav = async (data) => {
    try {
        const res = await api.post('/addFav', data)
        return res.data
    } catch (error) {
        return error.response
    }
}

export const getFavCars = async ({ userId }) => {
    try {
        const res = await api.post('/getFavCars', { userId })
        return res.data
    } catch (error) {
        return error.response
    }
}

// ----------------------

export const getRentHistory = async () => {
    try {
        const res = await api.get('getHistory')
        return res.data
    } catch (error) {
        return error.response
    }
}

export const addCar = async (data) => {
    try {
        const res = await api.post('/add', data)
        return res.data
    } catch (error) {
        return error.response
    }
}

export const deleteCar = async (id) => {
    try {
        const res = await api.delete(`/delete/${id}`)
        return res
    } catch (error) {
        return error.response
    }
}


export const withdrawalCar = async (_id) => {
    try {
        const res = await api.post('/withdrawalCar', { _id })
        return res
    } catch (error) {
        return error.response
    }
}

