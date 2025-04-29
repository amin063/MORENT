import React, { useEffect, useState } from "react";
import { deleteCar } from "../../../services/carServices";
import { FaSearch } from "react-icons/fa";
import ConfirmModal from "../../components/modal/ConfirmModal";
import { updateCar } from "../../../services/carServices";
import EditModal from "../../components/modal/EditModal";

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [sortOption, setSortOption] = useState("rent");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCarData, setSelectedCarData] = useState(null);

  useEffect(() => {
    fetch("https://morentapi.onrender.com/api/allcars")
      .then((res) => res.json())
      .then((data) => setCars(data.cars))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const handleCarAdded = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const handleDeleteClick = (carId) => {
    const car = cars.find((c) => c._id === carId);
    if (car.rentDetails) {
      setErrorMessage("This car is currently rented!");
      setIsModalOpen(true);
    } else {
      setSelectedCarId(carId);
      setErrorMessage("");
      setIsModalOpen(true);
    }
  };

  const handleDeleteConfirm = async () => {
    if (errorMessage) {
      setIsModalOpen(false);
      setErrorMessage("");
      return;
    }

    try {
      const res = await deleteCar(selectedCarId);
      setCars((prevCars) =>
        prevCars.filter((car) => car._id !== selectedCarId)
      );
    } catch (error) {
      console.error("Error deleting car:", error);
    } finally {
      setIsModalOpen(false);
      setSelectedCarId(null);
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
  const handleEditClick = (car) => {
    setSelectedCarData(car);
    setIsEditModalOpen(true);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setErrorMessage("");
        }}
        onConfirm={handleDeleteConfirm}
        title={errorMessage ? "Error" : "Confirm"}
        message={errorMessage || "Are you sure you want to delete this car?"}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        carData={selectedCarData}
        onSave={async (updatedCarData) => {
          try {
            const updatedCar = await updateCar(
              updatedCarData._id,
              updatedCarData
            );
            setCars((prevCars) =>
              prevCars.map((car) =>
                car._id === updatedCar._id ? updatedCar : car
              )
            );
            setIsEditModalOpen(false);
            setSelectedCarData(null);
          } catch (error) {
            console.error("Error updating car:", error);
          }
        }}
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">Car Rental</h1>
        <p className="text-gray-600 mt-2">
          Choose your desired car and book it today!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-6">
        {/* Search Input */}
        <div className="w-full sm:w-1/2 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for a car..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
          />
        </div>

        {/* Sort Dropdown */}
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

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <button
                onClick={() => handleDeleteClick(car._id)}
                className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Delete
              </button>
              <button
                onClick={() => handleEditClick(car)}
                className="absolute top-16 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Edit
              </button>

              <div className="w-full h-48 sm:h-64 bg-gray-200 flex items-center justify-center overflow-hidden rounded-t-lg">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {car.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {car.desc || "No description available."}
                </p>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-semibold text-gray-900">
                    ${car.price}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">/ day</span>
                </div>
                <div className="flex items-center justify-between">
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
