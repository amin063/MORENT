import React, { useState } from 'react'
import FormInput from '../../../components/inputs/FormInput'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../../../services/userServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../../redux/slices/userSlice'

const Login = () => {
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})        
    }
    const  handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        console.log(data);
        
        const res = await loginUser(data)
        console.log(res)
        
        if(res.message) {
            setError(res.message)
        } else {
            dispatch(setUser(res))
            console.log(res)
            navigate('/')
        }
        
        setLoading(false)
    }
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <form 
            onSubmit={handleSubmit}
            className='bg-white border rounded-md shadow-lg'>
                <div className='bg-primary rounded-t-md text-white font-bold text-lg text-center p-3'>Login</div>
                <div className='p-5 flex flex-col gap-6'>
                    <FormInput name={"username"} onChange={handleChange} placeholder={"Your Name"} />
                    <FormInput name={"password"} onChange={handleChange} placeholder={"Your Password"} />
                    <button 
                    disabled={loading}
                    className={`bg-primary text-white p-2 rounded-md`}>{loading ? "Loading": "Login"}</button>
                    {
                        error && <div className='text-red-500 font-bold text-sm text-center'>{error}</div>
                    }
                    <Link to={'/register'} className='text-center text-sm text-accent font-bold'>Don't have a account?</Link>
                </div>
            </form>
        </div>
    )
}
export default Login