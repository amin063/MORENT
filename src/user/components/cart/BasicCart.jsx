import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import car from "../../assets/images/car.png";
import { BsFillFuelPumpFill } from "react-icons/bs";
import BasicBtn from "../button/BasicBtn";

function BasicCart() {
  const [isLiked, setIsLiked] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const likedIcon = (
    <FaHeart className={`text-[20px] text-red-600 ${animationClass}`} />
  );
  const unLikedIcon = (
    <FaRegHeart className={`text-[20px] text-accent ${animationClass}`} />
  );

  const setLike = () => {
    if (isLiked) {
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
            <p className="font-bold text-[20px]">Koenigsegg</p>
            <div onClick={setLike}>{isLiked ? likedIcon : unLikedIcon}</div>
          </div>
          <p className="text-accent font-bold text-[14px]">Sport</p>
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
            90L
          </div>
          <div className="flex gap-1 items-center">
            <BsFillFuelPumpFill />
            Manual
          </div>
          <div className="flex gap-1 items-center">
            <BsFillFuelPumpFill />
            2 People
          </div>
        </div>

        {/* BUY */}
        <div className="flex justify-between items-center">
          <p className="font-bold">
            $99.00 / <span className="text-accent text-[14px]">day</span>
          </p>
          <BasicBtn />
        </div>
      </div>
    </div>
  );
}

export default BasicCart;
