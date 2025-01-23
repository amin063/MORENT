import React from "react";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./header/Header";

function UserLayout() {
  return (
    <div className="flex flex-col h-screen w-full max-w-[2000px] m-auto">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default UserLayout;
