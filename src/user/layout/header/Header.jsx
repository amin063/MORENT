import { FaHeart, FaSignOutAlt, FaEnvelope } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getUser, logout } from '../../../services/userServices';
import { setUser } from '../../../redux/slices/userSlice';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    getUser().then(res => {
      // if (!res.user) {
      //   nav('/login');
      //   return;
      // }
      dispatch(setUser(res));
    });
  }, []);

  const logoutUser = async () => {
    await logout();
    nav('/login');
    window.location.reload();
  };

  const { user } = useSelector((state) => state.user);

  return (
    <div className="w-full shadow bg-white top-0 left-0 z-50">
      <div className="flex items-center w-[85%] mx-auto justify-between bg-white text-primary h-[80px]">
        <Link to={"/"} className="text-2xl font-bold text-blue-600 cursor-pointer">
          MORENT
        </Link>

        <div className="relative group">
          <div className="flex items-center space-x-4 cursor-pointer">
            <p className="font-semibold text-gray-700 border-2 border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition duration-200">
              {user ? user.username : "Login"}
            </p>
          </div>
          
          <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex flex-col p-2">
              {user && (
                <>
                  <Link
                    to={'/favCars'}
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg transition duration-200 flex items-center space-x-2"
                  >
                    <FaHeart className="text-red-500" />
                    <span>Favorites</span>
                  </Link>
                  <Link
                    to={'/contact'}
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg transition duration-200 flex items-center space-x-2"
                  >
                    <FaEnvelope className="text-blue-500" />
                    <span>Messages</span>
                  </Link>
                  <button
                    onClick={logoutUser}
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg transition duration-200 flex items-center space-x-2 text-red-500"
                  >
                    <FaSignOutAlt className="text-red-500" />
                    <span>Logout</span>
                  </button>
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
