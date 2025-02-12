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
            console.log(res + "error")
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
/*
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../../services/userServices';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../redux/slices/userSlice';

const Login = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await loginUser(data);

    if (res.message) {
      setError(res.message);
    } else {
      dispatch(setUser(res));
      navigate('/');
    }

    setLoading(false);
  };

  return (
    <div className="relative py-3 sm:max-w-xs sm:mx-auto">
      <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center h-full select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gray-700"></div>
            <p className="m-0 text-[16px] font-semibold">Login to your Account</p>
            <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
              Get started with our app, just start section and enjoy experience.
            </span>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">Username</label>
              <input
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">Password</label>
              <input
                name="password"
                placeholder="••••••••"
                type="password"
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
              >
                {loading ? "Loading" : "Login"}
              </button>
            </div>
            {error && (
              <div className="mt-4 text-red-500 font-bold text-sm text-center">
                {error}
              </div>
            )}
            <Link
              to="/register"
              className="mt-4 text-center text-sm text-blue-500 font-bold block"
            >
              Don't have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

*/