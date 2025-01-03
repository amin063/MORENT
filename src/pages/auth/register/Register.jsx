import React from 'react'
import FormInput from '../../../components/inputs/FormInput'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <form className='bg-white border rounded-md'>
                <div className='bg-primary rounded-t-md text-white font-bold text-lg text-center p-3'>Register</div>
                <div className='p-5 flex flex-col gap-10'>
                    <FormInput placeholder={"Your Name"}  />
                    <FormInput placeholder={"Your Password"}  />
                <Link to={'/login'} className='text-center text-sm text-accent font-bold'>Already have a account?</Link>
                </div>
            </form>
        </div>

    )
}

export default Register