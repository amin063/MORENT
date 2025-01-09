import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserLayout from '../user/layout/UserLayout'
import Home from '../user/pages/home/Home'
import Details from '../user/pages/details/Details'
import Payment from '../user/pages/payment/Payment'
import Login from '../user/pages/auth/login/Login'
import Register from '../user/pages/auth/register/Register'

function AppRoutes() {
    return (
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path='details' element={<Details />} />
                    <Route path='payment' element={<Payment />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
    )
}

export default AppRoutes