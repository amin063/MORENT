import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import car from "../../../assets/images/car.png";
import { BsFillFuelPumpFill } from "react-icons/bs";
import BasicBtn from "../button/BasicBtn";
import { useSelector } from "react-redux";
import { addToFav } from "../../../services/carServices";

function BasicCart(carData) {
  const [data, setData] = useState({
    userId: "",
    carId: "",
  })
  const sel = useSelector((state) => state.user);
  const { user } = sel




  // console.log(carData)
  // console.log(data)
  // const getFav = async () => {
  //   const res = await getFavCars({ userId })
  // }
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
  }, [user, carData]);

  const setLike = async () => {
    setData({
      ...data,
      userId: user._id,
      carId: carData._id,
    })
    const res = await addToFav(data)
    console.log(res)
    if (res.message === 'Maşın favoritlərə əlavə edildi') {
      setAnimationClass("animate-shrink");
    } else {
      setAnimationClass("animate-pop");
    }

    setTimeout(() => setAnimationClass(""), 300);
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full max-w-[280px] max-h-[300px] pt-5 flex">
      <div className="flex flex-col gap-5 bg-white p-5 rounded-md shadow-md">
        {/* HEADER */}
        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-[20px]">{carData.name}</p>
            <div onClick={setLike}>{isLiked ? likedIcon : unLikedIcon}</div>
          </div>
          <p className="text-accent font-bold text-[14px]">{carData.type}</p>
        </div>
        {/* IMAGE */}
        <img
          src={car}
          alt="Car"
          className="w-full  object-cover rounded-md"
        />

        {/* DETAIL */}
        <div className="flex justify-between items-center text-accent text-[14px]">
          <div className="flex gap-1 items-center">
            <BsFillFuelPumpFill />
            {carData.fuelCapacity}L
          </div>
          <div className="flex gap-1 items-center">
            <BsFillFuelPumpFill />
            {carData.driveType}
          </div>
          <div className="flex gap-1 items-center">
            <BsFillFuelPumpFill />
            {carData.capacity} People
          </div>
        </div>

        {/* BUY */}
        <div className="flex justify-between items-center">
          <p className="font-bold">
            ${carData.price} / <span className="text-accent text-[14px]">day</span>
          </p>
          <BasicBtn path={`/details/${carData._id}`} />
        </div>
      </div>
    </div>
  );
}

export default BasicCart;
