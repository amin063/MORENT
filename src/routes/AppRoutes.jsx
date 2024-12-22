import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import Home from '../pages/home/Home'
import Details from '../pages/details/Details'

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path='details' element={<Details />} />
                </Route>
            </Routes>
        </div>
    )
}

export default AppRoutes