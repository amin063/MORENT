import React from 'react'
import FormInput from '../../../components/inputs/FormInput'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='flex justify-center items-center h-[100vh] bg-gray-100'>
            <form className='bg-white border rounded-md shadow-lg'>
                <div className='bg-primary rounded-t-md text-white font-bold text-lg text-center p-3'>Register</div>
                <div className='p-5 flex flex-col gap-6'>
                    <FormInput placeholder={"Your Name"} className='p-2 border rounded-md' />
                    <FormInput placeholder={"Your Password"} className='p-2 border rounded-md' />
                    <button className='bg-primary text-white p-2 rounded-md'>Register</button>
                    <Link to={'/login'} className='text-center text-sm text-accent font-bold'>Already have an account?</Link>
                </div>
            </form>
        </div>
    )
}

export default Register