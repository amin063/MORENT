import React from "react";

const CarRent = () => {
  // Örnek araç verisi
  const cars = [
    { id: 1, model: "BMW X5", price: 100, image: "https://media.ed.edmunds-media.com/bmw/x5/2025/oem/2025_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_600.jpg" },
    { id: 2, model: "Audi A6", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4eQagN9nMmltZ3SmXuXZiPGUwiWHr3sx4w&s"},
    { id: 3, model: "Mercedes GLC", price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynFYzBYnYLHTexOKgc3ycT01H0v2sgmfWgQ&s" },
    { id: 4, model: "Tesla Model 3", price: 180, image: "https://media.drivingelectric.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1698686429/drivingelectric/2023-10/Tesla%20Model%203%20facelift%201_awovfc.jpg" },
    { id: 5, model: "Honda Accord", price: 90, image: "https://www.cnet.com/a/img/resize/bfa75d75231dc8d14857ab41ed58c7fed7c75236/hub/2021/01/07/a9cb3648-5bc3-49ed-8bad-4c88b231a4ec/2021-honda-accord-008.jpg?auto=webp&fit=crop&height=900&width=1200" },
    { id: 6, model: "Ford Mustang", price: 110, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2019_Ford_Mustang_GT_Blue.jpg/800px-2019_Ford_Mustang_GT_Blue.jpg" },
    { id: 7, model: "Chevrolet Camaro", price: 140, image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg" },
    { id: 8, model: "Nissan Tida", price: 85, image: "https://avatars.mds.yandex.net/get-verba/216201/2a000001609d3121a32c2a9d622f8f027bef/auto_main" },
    { id: 9, model: "Toyota Corolla", price: 95, image: "https://di-uploads-pod25.dealerinspire.com/edmarktoyota/uploads/2024/02/2024-toyota-corolla-banner.jpg" },
  ];

  return (
    <div className="p-6 border shadow-lg">
      {/* Sayfa Başlık */}
      <div className="text-center mb-6 ">
        <h1 className="text-3xl font-bold text-gray-800">Car Rental</h1>
        <p className="text-gray-500">Choose your desired car and book it today!</p>
      </div>

      {/* Araç Listesi */}
      <div className="max-h-[70vh] overflow-y-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              {/* Araç Görseli */}
              <img src={car.image} alt={car.model} className="w-full h-56 object-cover" />

              {/* Araç Bilgileri */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{car.model}</h2>
                <p className="text-gray-500 mt-2">Starting from</p>
                <div className="flex items-baseline mt-2">
                  <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                  <span className="text-sm text-gray-500">/ day</span>
                </div>

                {/* Rezervasyon Butonu */}
                <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarRent;
