import React, { useEffect, useState } from "react";
import BasicCart from "../../../../components/cart/BasicCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import { Pagination } from "swiper/modules";
import { getCars } from "../../../../../services/carServices";

const CarSwiper = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    getCars().then(res => setCars(res.carLists))
  }, [])
  
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
      >
        {/* Kartlar */}
        {
          cars.filter(car => car.isActive).map(car => (
            <SwiperSlide key={car._id}>
              <BasicCart {...car} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CarSwiper;
