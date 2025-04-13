import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFav, deleteFav, setUser } from "../../../redux/slices/userSlice";
import { addToFav } from "../../../services/carServices";
import { getUser } from "../../../services/userServices";
import { Link } from "react-router-dom";

function BasicCart({carData,  isLoading, setIsLoading }) {
  const [data, setData] = useState({ userId: "", carId: "" });
  const dis = useDispatch();
  const sel = useSelector((state) => state.user);
  const { user } = sel;
  const [isLiked, setIsLiked] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const likedIcon = (
    <FaHeart className={`text-[20px] text-red-600 ${animationClass}`} />
  );
  const unLikedIcon = (
    <FaRegHeart className={`text-[20px] text-accent ${animationClass}`} />
  );

  useEffect(() => {
    if (user && user._id && carData?._id) {
      if (user.favList.includes(carData._id)) {
        setIsLiked(true);
      }
      setData({
        userId: user._id,
        carId: carData._id,
      });
    }

  }, []);

  const setLike = async () => {
    if (!isLiked) {
      setAnimationClass("animate-shrink");
      dis(addFav(data.carId));
    } else {
      setAnimationClass("animate-pop");
      dis(deleteFav(data.carId));
    }

    setTimeout(() => setAnimationClass(""), 300);
    setIsLiked(!isLiked);
    setData({ userId: user._id, carId: carData._id });
    const res = await addToFav(data);
    console.log(res);
    getUser().then((res) => {
      dis(setUser(res));
    });
  };

  if (isLoading) {
    return (
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </div>
            <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          </div>

          <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>

          <div className="flex justify-between items-center text-gray-600 text-sm mb-4">
            <div className="h-4 w-14 bg-gray-200 rounded"></div>
            <div className="h-4 w-14 bg-gray-200 rounded"></div>
            <div className="h-4 w-14 bg-gray-200 rounded"></div>
          </div>

          <div className="flex justify-between items-center">
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-bold text-lg text-gray-800">{carData.name}</p>
            <p className="text-sm text-gray-500">{carData.type}</p>
          </div>
          <div onClick={setLike} className="cursor-pointer">
            {isLiked ? likedIcon : unLikedIcon}
          </div>
        </div>

        <div className="w-full h-40 mb-3">
          <img
            src={carData.img}
            alt="Car"
            className="w-full h-full object-contain rounded-lg mb-4"
          />
        </div>

        <div className="flex justify-between items-center text-gray-600 text-sm mb-4">
          <div className="flex items-center space-x-2">
            <BsFillFuelPumpFill className="text-gray-500" />
            <span>{carData.fuelCapacity}L</span>
          </div>
          <div className="flex items-center space-x-2">
            <BsFillFuelPumpFill className="text-gray-500" />
            <span>{carData.driveType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BsFillFuelPumpFill className="text-gray-500" />
            <span>{carData.capacity} People</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-gray-800">
            ${carData?.price} <span className="text-sm text-gray-500">/ day</span>
          </p>
          <Link
            to={`/details/${carData._id}`}
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BasicCart;
