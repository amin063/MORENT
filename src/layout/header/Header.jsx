import { FaSearch, FaSlidersH, FaHeart, FaBell, FaCog } from 'react-icons/fa';
// import logo from '../../assets/images/Profil.png';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow h-[100px]">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 ml-[50px] cursor-pointer">
        MORENT
      </div>

      {/* Arama Kutusu */}
      <div className="relative flex items-center w-[34.53%] mr-[400px] max-w-[280px]">
        <FaSearch className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search something here"
          className="w-full pl-10 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <FaSlidersH className="absolute right-3 text-gray-400" />
      </div>

      {/* İkonlar */}
      <div className="flex items-center space-x-6 mr-[50px]">
        {/* Favori İkonu */}
        <FaHeart className="text-gray-500 text-lg w-[20px] h-[20px] hover:text-blue-500 cursor-pointer" />
        
        {/* Bildirim İkonu */}
        <div className="relative">
          <FaBell className="text-gray-500 text-lg w-[20px] h-[20px] hover:text-blue-500 cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Ayarlar İkonu */}
        <FaCog className="text-gray-500 text-lg w-[20px] h-[20px] hover:text-blue-500 cursor-pointer" />

        {/* Profil Fotoğrafı */}
        {/* <img
          src={logo}
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer object-cover"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
