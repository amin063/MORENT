import React from "react";

const DetailsRental = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-[50%]">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Details Rental</h2>
      {/* Harita Görseli */}
      <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
          <img
          src="https://www.ionos.co.uk/digitalguide/fileadmin/_processed_/0/2/csm_google-my-maps_55b8661ca0.webp"
          alt="Car"
          className="w-full h-full rounded-md object-cover mr-4"
        />
      </div>
      {/* Araç Detayları */}
      <div className="flex items-center mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ4u5-7RpM-vKHrokFQ0b5LyBzGnOCsfXSA&s"
          alt="Car"
          className="w-20 h-14 rounded-md object-cover mr-4"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-800">Nissan GT - R</h3>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
      </div>
      {/* Pick-Up ve Drop-Off Bilgileri */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-bold text-gray-700">Pick-Up</h4>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Kota Semarang</span>
            <span>20 July 2022 | 07:00</span>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-700">Drop-Off</h4>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Kota Semarang</span>
            <span>21 July 2022 | 01:00</span>
          </div>
        </div>
      </div>
      {/* Fiyat Bilgisi */}
      <div className="mt-6 border-t pt-4 text-right">
        <h4 className="text-gray-600 text-sm">Total Rental Price</h4>
        <h3 className="text-lg font-bold text-gray-800">$80.00</h3>
      </div>
    </div>
  );
};

export default DetailsRental;