import React from 'react'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './header/Header'

function UserLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default UserLayout