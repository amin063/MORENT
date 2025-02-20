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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Car Rental</h1>
        <p className="text-gray-600">Choose your desired car and book it today!</p>
      </div>

      <div className="flex flex-col gap-6 px-4">
        {cars
          .filter((car) => car.rentDetails !== null)
          .map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-xl shadow-md flex flex-col sm:flex-row overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg relative"
            >
              <div className="w-[350px] h-[295px] bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={car.img} alt={car.name} className="w-full h-full object-contain" />
              </div>
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h2>
                  <p className="text-gray-600 mb-2">{car.desc || "No description available."}</p>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                    <span className="text-sm text-gray-500 ml-1">/ day</span>
                  </div>
                </div>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full"
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
