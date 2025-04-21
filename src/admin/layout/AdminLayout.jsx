import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../user/layout/header/Header";
import Sidebar from "../components/sidebar/sidebar";
import { getAdmin } from "../../services/adminServices";
import Header from "./header/AdminHeader";

function AdminLayout() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false); // Admin durumunu takip etmek için state

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const response = await getAdmin();
        if (response.status !== 200) {
          navigate("/admin-login"); // Admin değilse login sayfasına yönlendir
        } else {
          setIsAdmin(true); // Admin ise state'i güncelle
        }
      } catch (error) {
        console.error("Admin check failed:", error);
        navigate("/admin-login"); // Hata durumunda login sayfasına yönlendir
      }
    };

    checkAdminStatus();
  }, [navigate]);

  // Admin değilse, hiçbir şey render etme (Navigate işlemi zaten yönlendirme yapacak)
  if (!isAdmin) {
    return null;
  }

  return (
<div className="flex flex-col h-screen w-full max-w-[2000px] mx-auto">
  {/* Navbar */}
  <div className="h-[64px] sticky top-0 z-10">
    <Header />
  </div>

  {/* İçerik */}
  <div className="flex flex-1 overflow-hidden">
    {/* Sidebar */}
    <div className="w-[250px] bg-white shadow-md hidden md:block">
      <Sidebar />
    </div>

    {/* Main Content */}
    <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <Outlet />
    </main>
  </div>
</div>


  );
}

export default AdminLayout;