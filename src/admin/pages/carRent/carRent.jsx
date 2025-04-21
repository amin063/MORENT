import React, { useEffect, useState } from "react";
import { withdrawalCar } from "../../../services/carServices.jsx";

const CarRent = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://morentapi.onrender.com/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data.carLists))
      .catch((error) => console.error("Error fetching cars:", error));
  }, [cars]);

  const getMoney = async (_id) => {
    const res = await withdrawalCar(_id);
    console.log(res);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">Car Rental</h1>
        <p className="text-gray-500">Choose your desired car and book it today!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {cars
          .filter((car) => car.rentDetails !== null)
          .map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden rounded-t-lg transition-transform duration-500">
                <img src={car.img} alt={car.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 transition-all duration-300 ease-in-out">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{car.name}</h2>
                <p className="text-gray-600 mb-4">{car.desc || "No description available."}</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-semibold text-gray-900">${car.price}</span>
                  <span className="text-sm text-gray-500 ml-2">/ day</span>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => getMoney(car._id)}
                >
                  Withdraw
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarRent;
