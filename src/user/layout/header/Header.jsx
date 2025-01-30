import { FaSearch, FaHeart, FaBell, FaCog } from "react-icons/fa";
import serachIcon from "../../../assets/icons/search-normal.png";
import logo from '../../../assets/images/logo/Profil.png';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { getUser, logout } from '../../../services/userServices'
import { setUser } from '../../../redux/slices/userSlice'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  useEffect(() => {
    getUser().then(res => {
      dispatch(setUser(res))
      console.log(res + " disNav");
    })
  }, [])

  const logoutUser = async () => {
    const res = await logout()
    console.log(res);
    nav('/login')
  }

  const { user } = useSelector((state) => state.user);
  return (
    <div className="w-full shadow bg-white">
      <div className="flex items-center w-[85%] mx-auto justify-between bg-white text-primary h-[100px]">
        {/* Logo */}
        <Link to={"/"} className="text-2xl font-bold text-blue-600 cursor-pointer">
          MORENT
        </Link>

        {/* Arama Kutusu */}
        {/* <div className="relative  items-center w-[34.53%] max-w-[280px] hidden md:flex">
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
        </div> */}

        {/* İkonlar */}
        <div className="relative group z-50">
          <p className="font-bold border p-2 cursor-pointer hover:bg-gray-100 transition duration-200 rounded">
            {user ? user.username : "Login"}
          </p>
          <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex flex-col p-2">
              {user && (
                <>
                  <Link to={'/favCars'} href="/profile" className="px-2 w-[80%] py-2 hover:bg-gray-100 rounded-lg transition duration-200">
                    Favorite
                  </Link>
                  <a onClick={logoutUser} className="px-2 py-2 w-[80%] cursor-pointer hover:bg-gray-100 rounded-lg transition duration-200 text-red-500">
                    Logout
                  </a>
                  <Link to={'/contact'} href="/profile" className="px-2 w-[80%] py-2 hover:bg-gray-100 rounded-lg transition duration-200">
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
