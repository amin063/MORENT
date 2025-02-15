import React from "react";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./header/Header";

function UserLayout() {
  return (
    <div className="flex flex-col h-screen w-full max-w-[2000px] m-auto">
      {/* Navbar */}
      <Navbar />

      {/* Ana İçerik Alanı */}
      <main className="flex-grow">
        <Outlet /> {/* İçerik burada render edilecek */}
      </main>

      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default UserLayout;