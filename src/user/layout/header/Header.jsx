import { FaSearch, FaHeart, FaBell, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Yönlendirme için import ediyoruz
import serachIcon from "../../../assets/icons/search-normal.png";
import logo from "../../../assets/images/logo/Profil.png";

const Navbar = () => {
  const navigate = useNavigate(); // Yönlendirme fonksiyonu

  // Ana sayfaya yönlendirme fonksiyonu
  const handleLogoClick = () => {
    navigate("/"); // Ana sayfaya yönlendirir
  };

  return (
    <div className="w-full shadow bg-white">
      <div className="flex items-center w-[90%] mx-auto justify-between bg-white text-primary h-[100px]">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={handleLogoClick} // Logo tıklama olayını ekliyoruz
        >
          MORENT
        </div>

        {/* Arama Kutusu */}
        <div className="relative items-center w-[34.53%] max-w-[280px] hidden md:flex">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full pl-10 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm placeholder:text-sm"
          />
          <img
            src={serachIcon}
            alt="Search Icon"
            className="absolute left-3 h-5 w-5 pointer-events-none"
          />
        </div>

        {/* İkonlar */}
        <div className="flex items-center space-x-6">
          <FaHeart className="text-icon text-lg w-[20px] h-[20px] hover:text-primary cursor-pointer transition duration-200" />
          <FaCog className="text-icon text-lg w-[20px] h-[20px] hover:text-primary cursor-pointer transition duration-200" />
          <img
            src={logo}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
