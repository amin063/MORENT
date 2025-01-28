import { api } from "../api"

export const getCars = async () => {
    try {
        const res = await api.get('/cars')
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