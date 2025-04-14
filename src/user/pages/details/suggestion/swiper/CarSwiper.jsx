import React, { useEffect, useState } from "react";
import BasicCart from "../../../../components/cart/BasicCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import { Pagination } from "swiper/modules";
import { getCars } from "../../../../../services/carServices";
import { useParams } from "react-router-dom";

const CarSwiper = () => {
  const [cars, setCars] = useState([])
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  console.log(id)
  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        const res = await getCars();
        setCars(res.carLists);
      } catch (error) {
        console.error("Maşınlar yüklənərkən xəta baş verdi:", error);
      }
      setIsLoading(false);
    };
    fetchCars();
  }, []);


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
          isLoading ? (
            <div>
              <div className="gap-10 hidden lg:flex">
                <BasicCart isLoading={true} />
                <BasicCart isLoading={true} />
                <BasicCart isLoading={true} />
                <BasicCart isLoading={true} />
              </div>

              <div className="hidden gap-10 md:flex">
                <BasicCart isLoading={true} />
                <BasicCart isLoading={true} />
                <BasicCart isLoading={true} />
              </div>

              <div className="hidden gap-10 justify-center items-center sm:flex">
                <BasicCart isLoading={true} />
              </div>

              <div>

              </div>
            </div>
          ) : (
            cars.filter(car => !car.rentDay && car._id !== id).map(car => (
              <SwiperSlide key={car._id}>
                <BasicCart key={car._id} carData={car} />
              </SwiperSlide>
            ))
          )
        }
      </Swiper>
    </div>
  );
};

export default CarSwiper;
