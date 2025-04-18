  import React from "react";
  import Swiper from "./swiper/CarSwiper";
  import { Link } from "react-router-dom";

  const Suggestion = () => {
    return (
      <div className="w-[90%] mx-auto">
        {/* Recommended Car */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-[18px] font-semibold text-accent border-b-2 border-primary pb-2">
              Recommended Cars
            </h4>
            <Link to="/" className="text-primary font-medium hover:underline">
              View All
            </Link>
          </div>
          <Swiper />
        </div>
      </div>
    );
  };

  export default Suggestion;
