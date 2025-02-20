import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import car from "../../../assets/images/car.png";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFav, deleteFav, setUser } from "../../../redux/slices/userSlice";
import { addToFav } from "../../../services/carServices";
import { getUser } from "../../../services/userServices";
import { Link } from "react-router-dom"; // Link ekledik

function BasicCart(carData) {
  const [data, setData] = useState({
    userId: "",
    carId: "",
  });
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
    if (user && user._id && carData._id) {
      if (user.favList.includes(carData._id)) {
        setIsLiked(true);
      }
      setData({
        ...data,
        userId: user._id,
        carId: carData._id,
      });
    }
  }, []);

  useEffect(() => {
    getUser().then((res) => {
      dis(setUser(res));
    });
  }, [isLiked]);

  const setLike = async () => {
    setData({
      ...data,
      userId: user._id,
      carId: carData._id,
    });
    const res = await addToFav(data);
    if (res.message === "Maşın favoritlərə əlavə edildi") {
      setAnimationClass("animate-shrink");
      dis(addFav(data.carId));
    } else {
      setAnimationClass("animate-pop");
      dis(deleteFav(data.carId));
    }

    setTimeout(() => setAnimationClass(""), 300);
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-bold text-lg text-gray-800">{carData.name}</p>
            <p className="text-sm text-gray-500">{carData.type}</p>
          </div>
          <div onClick={setLike} className="cursor-pointer">
            {isLiked ? likedIcon : unLikedIcon}
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full h-40">
          <img
            src={carData.img}
            alt="Car"
            className="w-full h-full object-contain rounded-lg mb-4"
          />

        </div>
        {/* <img
          src={carData.img}
          alt="Car"
          className="w-full h-40 object-contain rounded-lg mb-4"
        /> */}

        {/* DETAIL */}
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

        {/* BUY */}
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