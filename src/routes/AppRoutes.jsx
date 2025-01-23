import React from "react";
import { Route, Routes } from "react-router-dom";
// Layouts
import UserLayout from "../user/layout/UserLayout";
import AdminLayout from "../admin/layout/AdminLayout";
// USER Pages
import Home from "../user/pages/home/Home";
import Details from "../user/pages/details/Details";
import Payment from "../user/pages/payment/Payment";
import Login from "../user/pages/auth/login/Login";
import Register from "../user/pages/auth/register/Register";
// ADMIN Pages
import Dashboard from "../admin/pages/dashboard/dashboard";
import CarRent from "../admin/pages/carRent/carRent";
import Insight from "../admin/pages/insight/insight";
import Reimburse from "../admin/pages/reimburse/reimburse";
import Inbox from "../admin/pages/inbox/inbox";
import Calendar from "../admin/pages/calendar/calendar";
import Settings from "../admin/pages/settings/settings";
import HelpCenter from "../admin/pages/helpCenter/helpCenter";

function AppRoutes() {
    return (
        <Routes>
            {/* USER Routes */}
            <Route path='/' element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path='details/:id' element={<Details />} />
                <Route path='payment/:id' element={<Payment />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ADMIN Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="car-rent" element={<CarRent />} />
                <Route path="insight" element={<Insight />} />
                <Route path="reimburse" element={<Reimburse />} />
                <Route path="inbox" element={<Inbox />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="settings" element={<Settings />} />
                <Route path="help-center" element={<HelpCenter />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default AppRoutes;

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'

// import UserLayout from '../user/layout/UserLayout'
// import Home from '../user/pages/home/Home'
// import Details from '../user/pages/details/Details'
// import Payment from '../user/pages/payment/Payment'
// import Login from '../user/pages/auth/login/Login'
// import Register from '../user/pages/auth/register/Register'

// function AppRoutes() {
//     return (
//             <Routes>
//                 <Route path='/' element={<UserLayout />}>
//                     <Route index element={<Home />} />
//                     <Route path='details/:id' element={<Details />} />
//                     <Route path='payment/:id' element={<Payment />} />
//                 </Route>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//             </Routes>
//     )
// }

// export default AppRoutes