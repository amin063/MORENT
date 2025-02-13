import React from "react";
import Swiper from "./swiper/CarSwiper";
import { Link } from "react-router-dom";
const Suggestion = () => {
  return (
    <div className="w-[90%] mx-[auto]">
      {/* RentCar */}
      {/* <div className="">
        <div className="w-[70%] md:w-[98%] mx-[auto] flex justify-between mt-10">
          <h4 className="text-[16px] text-accent">Recent Car</h4>
          <Link>View All</Link>
        </div>
        <Swiper />
      </div> */}
      {/* recomendationCar */}
      <div>
      <div className="w-[70%] md:w-[98%] mx-[auto] flex justify-between mt-10">
          <h4 className="text-[16px] text-accent">Recomendation Car</h4>
          <Link to={'/'}>View All</Link>
        </div>
        <Swiper />
      </div>
    </div>
  );
};

export default Suggestion;
