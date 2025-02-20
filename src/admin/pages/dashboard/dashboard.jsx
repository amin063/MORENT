import React, { useEffect, useState } from "react";
import { deleteCar } from "../../../services/carServices";
import { FaSearch } from "react-icons/fa"; // Arama ikonu için

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [sortOption, setSortOption] = useState("rent");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://morentapi.onrender.com/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data.carLists))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const handleCarAdded = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const handleDeleteCar = async (carId) => {
    try {
      const res = await deleteCar(carId);
      console.log(res + " 21");
      setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedCars = [...cars];
    switch (option) {
      case "rent":
        sortedCars.sort((a, b) => (a.rentDetails ? 1 : -1));
        break;
      case "price":
        sortedCars.sort((a, b) => a.price - b.price);
        break;
      case "name":
        sortedCars.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setCars(sortedCars);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCars = cars?.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(cars);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Car Rental</h1>
        <p className="text-gray-600 mt-2">
          Choose your desired car and book it today!
        </p>
      </div>

      {/* Arama ve Sıralama Bileşenleri */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Arama Input'u */}
        <div className="w-full sm:w-1/2 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" /> {/* Arama ikonu */}
          </div>
          <input
            type="text"
            placeholder="Search for a car..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border placeholder:text-base border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
          />
        </div>

        {/* Sıralama Dropdown'u */}
        <div className="w-full sm:w-1/2 sm:text-right">
          <select
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm hover:shadow-md"
          >
            <option value="rent">Sort by Rent Status</option>
            <option value="price">Sort by Price</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>

      {/* Uzunlamasına kartlar */}
      <div className="flex flex-col gap-6 px-4">
        {filteredCars?.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-xl shadow-md flex flex-col sm:flex-row overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg relative"
            >
              <button
                onClick={() => handleDeleteCar(car._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Delete
              </button>
              <img
                src={car.img}
                alt={car.name}
                className="w-[350px] h-[295px] object-cover"
                // className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
              />
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {car.name}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    {car.desc || "No description available."}
                  </p>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${car.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">/ day</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        car.rentDetails ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-600">
                      {car.rentDetails ? "Rented" : "Available"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 py-6">
            No cars found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;