import { api } from "../api"

export const loginUser = async(data) => {
    try {
        const res = await api.post('/login', data)
        return res.data
    } catch (error) {
        return error.response.data        
    }
}

export const registerUser = async(data) => {
    try {
        const res = await api.post('/register', data)
        return res
    } catch (error) {
        return error.response
    }
}

export const getUser = async() => {
    try {
        const res = await api.get('/profile')
        console.log(res + " adsf")
        return res.data
    } catch (error) {
        console.log('catchdadi')
        return error.response.data
    }
}

