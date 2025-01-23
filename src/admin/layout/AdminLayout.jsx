import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../user/layout/header/Header"; // Üst Navbar
import Sidebar from "../components/sidebar/sidebar";

function AdminLayout() {
  return (
    <div className="flex h-screen w-full max-w-[2000px] m-auto overflow-hidden">
      {/* Sabit Üst Navbar */}
      <div className="fixed top-0 left-0 w-full z-10 h-[64px]">
        <Navbar />
      </div>

      {/* Sidebar ve İçerik Alanı */}
      <div className="flex flex-grow h-full pt-[64px]">
        {/* Sidebar */}
        <div className="w-[250px] h-full">
          <Sidebar />
        </div>

        {/* İçerik alanı */}
        <main className="flex-grow overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
