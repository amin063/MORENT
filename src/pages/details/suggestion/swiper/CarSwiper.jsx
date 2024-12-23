import React from "react";
import BasicCart from "../../../../components/cart/BasicCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import { Pagination } from "swiper/modules";

const CarSwiper = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20} // Slide'lar arasındaki boşluk
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // Mobil cihazlar
          0: {
            slidesPerView: 1, // 1 kart görünsün
          },
          // Tablet cihazlar
          768: {
            slidesPerView: 3, // 2 kart görünsün
          },
          // Laptop ve üzeri
          1024: {
            slidesPerView: 4, // 3 kart görünsün
          },
          // Büyük ekranlar
          1440: {
            slidesPerView: 5, // 5 kart görünsün
          },
        }}
      >
        {/* Kartlar */}
        <SwiperSlide>
          <BasicCart />
        </SwiperSlide>
        <SwiperSlide>
          <BasicCart />
        </SwiperSlide>
        <SwiperSlide>
          <BasicCart />
        </SwiperSlide>
        <SwiperSlide>
          <BasicCart />
        </SwiperSlide>
        <SwiperSlide>
          <BasicCart />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarSwiper;
