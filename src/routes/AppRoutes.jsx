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
import FavCars from '../user/pages/favCars/FavCars'
import Contact from '../user/pages/contact/Contact'
import ProtectedRoute from "../user/components/protectedroute/ProtectedRoute";
// ADMIN Pages
import Dashboard from "../admin/pages/dashboard/dashboard";
import CarRent from "../admin/pages/carRent/carRent";
import Reimburse from "../admin/pages/reimburse/reimburse";
import Calendar from "../admin/pages/calendar/calendar";
import Settings from "../admin/pages/settings/settings";
import CarList from "../admin/pages/carList/carList";
import AdminLogin from "../admin/pages/auth/adminLogin";
import NotFound from "../user/pages/notFound/notFound";

function AppRoutes() {
    return (
        <Routes>
            {/* USER Routes */}
            <Route path='/' element={<ProtectedRoute><UserLayout /></ProtectedRoute>}
            >
                <Route index element={<Home />} />
                <Route path='details/:id' element={<Details />} />
                <Route path='payment/:id' element={<Payment />} />
                <Route path='favCars' element={<FavCars />} />
                <Route path='contact' element={<Contact />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ADMIN Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="car-rent" element={<CarRent />} />
                <Route path="car-list" element={<CarList />} />
                <Route path="reimburse" element={<Reimburse />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="settings" element={<Settings />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
