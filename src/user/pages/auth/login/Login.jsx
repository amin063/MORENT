import React from 'react'
import FormInput from '../../../components/inputs/FormInput'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <form className='bg-white border rounded-md shadow-lg'>
                <div className='bg-primary rounded-t-md text-white font-bold text-lg text-center p-3'>Login</div>
                <div className='p-5 flex flex-col gap-6'>
                    <FormInput placeholder={"Your Name"} />
                    <FormInput placeholder={"Your Password"} />
                    <button className='bg-primary text-white p-2 rounded-md'>Login</button>
                    <Link to={'/register'} className='text-center text-sm text-accent font-bold'>Don't have a account?</Link>
                </div>
            </form>
        </div>
    )
}
export default Login