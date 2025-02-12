import React, { useState } from "react";
import { FaHome, FaCar, FaPlusCircle, FaCalendar, FaCog, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../../services/adminServices";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/admin" },
    { name: "Car Rent", icon: <FaCar />, path: "/admin/car-rent" },
    { name: "Add Car", icon: <FaPlusCircle />, path: "/admin/car-list" },
    { name: "Reimburse", icon: <FaWallet />, path: "/admin/reimburse" },
    { name: "Calendar", icon: <FaCalendar />, path: "/admin/calendar" },
  ];
  

  const preferenceItems = [
    { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
  ];

  const handleNavigation = (name, path) => {
    setActivePage(name);
    navigate(path);
  };

  // Logout fonksiyonu
  const handleLogout = async () => {
    const res = await logoutAdmin();
    console.log(res);
    window.location.reload(); // Sayfayı yenile
  };
  

  return (
    <div className="w-[250px] h-screen bg-white shadow-lg flex flex-col justify-between p-4">
      {/* Main Menu */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 mt-10 mb-2">MAIN MENU</h3>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavigation(item.name, item.path)}
              className={`flex items-center space-x-3 cursor-pointer rounded-lg px-4 py-3 transition duration-300 
                ${activePage === item.name ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white"}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Preferences */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 mt-4 mb-2">PREFERENCES</h3>
        <ul className="space-y-2">
          {preferenceItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavigation(item.name, item.path)}
              className={`flex items-center space-x-3 cursor-pointer rounded-lg px-4 py-3 transition duration-300 
                ${activePage === item.name ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white"}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
        
        {/* Log Out */}
        <div className="mt-4">
          <li
            onClick={handleLogout} // Logout fonksiyonunu buraya bağla
            className="flex items-center space-x-3 cursor-pointer rounded-lg px-4 py-3 hover:bg-red-600 hover:text-white transition duration-300"
          >
            <span className="text-sm font-medium mb-[100px]">Log Out</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;