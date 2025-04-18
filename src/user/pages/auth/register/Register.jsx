import React, { useState } from 'react'
import FormInput from '../../../components/inputs/FormInput'
import { Link } from 'react-router-dom'
import InfoBox from '../../../components/cart/InfoBox'
import { registerUser } from '../../../../services/userServices'

const Register = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const infoContent = {
        title: 'Welcome',
        message: 'You have successfully registered. You can now log in.',
        btnTxt: 'Ok'
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await registerUser(data)
        if (res.status === 201) {
            setIsOpen(true)
            setError('')
        } else {
            setError(res.data.msg)
        }
        setLoading(false)
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white'>
            <InfoBox
                title={infoContent.title}
                message={infoContent.message}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <form
                onSubmit={handleSubmit}
                className='w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn'
            >
                <div className='text-center text-2xl font-semibold text-blue-700 mb-6'>
                    Create an Account
                </div>
                <div className='flex flex-col gap-4'>
                    <FormInput
                        name='username'
                        onChange={handleChange}
                        placeholder='Username'
                    />
                    <FormInput
                        name='password'
                        onChange={handleChange}
                        placeholder='Password'
                        type='password'
                    />
                    <button
                        disabled={loading}
                        className={`${
                            loading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
                        } transition text-white font-semibold py-2 rounded-xl`}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                    {error && (
                        <div className='text-red-500 font-semibold text-sm text-center'>
                            {error}
                        </div>
                    )}
                    <Link
                        to='/login'
                        className='text-center text-sm text-blue-600 hover:underline'
                    >
                        Already have an account? Login
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register



// import React, { useState } from 'react'
// import FormInput from '../../../components/inputs/FormInput'
// import { Link } from 'react-router-dom'
// import InfoBox from '../../../components/cart/InfoBox'
// import { registerUser } from '../../../../services/userServices'

// const Register = () => {
//     const [isOpen, setIsOpen] = useState(false)
//     const [data, setData] = useState({})
//     const [error, setError] = useState('')
//     const [loading, setLoading] = useState(false)
//     const infoContent = {
//         title: 'Welcome',
//         message: 'You have successfully registered. You can now log in.',
//         btnTxt: 'Ok'
//     }
//     const handleChange = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setLoading(true)
//         const res = await registerUser(data)
//         if (res.status === 201) {
//             setIsOpen(true)
//             setError('')
//         }else{
//             console.log(res.data.msg);
            
//             setError(res.data.msg)
//             console.log(error);
            
//         }
//         setLoading(false)
//     }
//     return (
//         <div className='flex justify-center items-center h-[100vh] bg-gray-100'>
//             <InfoBox title={infoContent.title} message={infoContent.message} isOpen={isOpen} setIsOpen={setIsOpen}/>
//             <form onSubmit={handleSubmit} className='bg-white border w-[90%] rounded-md shadow-lg md:w-[50%] lg:w-[30%]'>
//                 <div className='bg-primary rounded-t-md text-white font-bold text-lg text-center p-3'>Register</div>
//                 <div className='p-5 flex flex-col gap-6'>
//                     <FormInput name={"username"} onChange={handleChange} placeholder={"Your Name"} className='p-2 border rounded-md' />
//                     <FormInput name={"password"} onChange={handleChange} placeholder={"Your Password"} className='p-2 border rounded-md' />
//                     <button disabled={loading} className={`p-2 rounded-md ${loading ? 'bg-gray-400' : 'bg-primary text-white'}`}>{loading ? "Loading" : "Register"}</button>
//                     {
//                          error && <div className='text-red-500 font-bold text-sm text-center'>{error}</div>
//                     }
//                     <Link to={'/login'} className='text-center text-sm text-accent font-bold'>Already have an account?</Link>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Register