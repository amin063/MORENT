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
    const res = await api.post('/rent', data)
    return res
}

export const filterCars = async (query) => {
    const res = await api.get("/filter", { params: query })
    return res.data
}