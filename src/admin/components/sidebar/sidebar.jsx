import React, { useState } from "react";
import { FaHome, FaCar, FaChartLine, FaEnvelope, FaCalendar, FaCog, FaWallet, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/admin/" },
    { name: "Car Rent", icon: <FaCar />, path: "/admin/car-rent" },
    { name: "Insight", icon: <FaChartLine />, path: "/admin/insight" },
    { name: "Reimburse", icon: <FaWallet />, path: "/admin/reimburse" },
    { name: "Inbox", icon: <FaEnvelope />, path: "/admin/inbox" },
    { name: "Calendar", icon: <FaCalendar />, path: "/admin/calendar" },
  ];

  const preferenceItems = [
    { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
    { name: "Help & Center", icon: <FaQuestionCircle />, path: "/admin/help-center" },
  ];

  const handleNavigation = (name, path) => {
    setActivePage(name); // Aktif sayfayı güncelle
    navigate(path); // Sayfayı değiştir
  };

  return (
    <div className="w-[250px] h-[86vh] bg-white shadow-md flex flex-col">
      {/* Main Menu Başlığı */}
      <div>
        <div className="p-6 text-[12px] font-semibold text-[rgba(148,167,203,0.4)]">
          Main Menu
        </div>

        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavigation(item.name, item.path)}
              className={`group flex items-center space-x-3 cursor-pointer rounded-lg px-4 py-3 
                ${
                  activePage === item.name
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
            >
              <span
                className={`text-lg ${
                  activePage === item.name ? "text-white" : "text-customBlue"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-sm font-medium ${
                  activePage === item.name ? "text-white" : "text-customBlue"
                }`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Preferences Başlığı */}
      <div>
        <div className="p-6 text-[12px] font-semibold text-[rgba(148,167,203,0.4)]">
          PREFERENCES
        </div>

        <ul className="space-y-2 px-4">
          {preferenceItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavigation(item.name, item.path)}
              className={`group flex items-center space-x-3 cursor-pointer rounded-lg px-4 py-3 
                ${
                  activePage === item.name
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
            >
              <span
                className={`text-lg ${
                  activePage === item.name ? "text-white" : "text-customBlue"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-sm font-medium ${
                  activePage === item.name ? "text-white" : "text-customBlue"
                }`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>

        <ul className="space-y-2 px-4 mt-4">
          <li className="group flex items-center space-x-3 cursor-pointer rounded-lg px-4 py-3 hover:bg-blue-600 hover:text-white">
            <span className="text-sm font-medium text-customBlue group-hover:text-white">
              Log Out
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
  