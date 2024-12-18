import React from "react";
import carImage from "../../assets/images/car.png";
import carImage2 from "../../assets/images/car2.png";

const IntroCart = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* İlk Kart */}
      <div className="relative w-full sm:w-[640px] h-[360px] bg-lightblue overflow-hidden rounded-lg mt-[20px] mb-[0px]">
        {/* Arkaplan Deseni */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-moving-pattern bg-pattern-size animate-moveBackground"></div>

        {/* Sol Üst Metin ve Buton */}
        <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
          <p className="w-[272px] h-[96px] text-white font-semibold text-[32px] leading-[150%] tracking-[-0.03em] flex items-center">
            The Best Platform for Car Rental
          </p>
          <p className="w-[284px] h-[48px] text-white font-medium text-[16px] leading-[150%] tracking-[-0.02em] mt-[5px] mb-[10px]">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="px-[20px] py-[8px] w-[120px] h-[44px] bg-[#3563E9] text-white rounded-[4px] hover:bg-secondary transition duration-300">
            Rent Now
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <img
            src={carImage}
            alt="Car"
            className="w-[406px] h-[116px] object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* İkinci Kart - Yeni Arka Plan */}
      <div className="relative w-full sm:w-[640px] h-[360px] bg-lightblue overflow-hidden rounded-lg mt-[20px] mb-[20px]">
        {/* Yeni Arkaplan Deseni Tailwind ile */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-repeating-linear-pattern"></div>

        {/* Sol Üst Metin ve Buton */}
        <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
          <p className="w-[272px] h-[96px] text-black font-semibold text-[32px] leading-[150%] tracking-[-0.03em] flex items-center">
            Easy way to rent a car at a low price
          </p>
          <p className="w-[284px] h-[48px] text-black font-medium text-[16px] leading-[150%] tracking-[-0.02em] mt-[5px] mb-[10px]">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <button className="px-[20px] py-[8px] w-[120px] h-[44px] bg-[#54A6FF] text-white rounded-[4px] hover:bg-primary transition duration-300">
            Rent Now
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <img
            src={carImage2}
            alt="Car"
            className="w-[406px] h-[116px] object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroCart;
