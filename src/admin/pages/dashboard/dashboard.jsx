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
  const [successMessage, setSuccessMessage] = useState("");
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
      setSuccessMessage("Car deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage("Error deleting car");
      setTimeout(() => setErrorMessage(""), 3000);
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
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleUpdateCar = async (updatedCarData) => {
    try {
      const updatedCar = await updateCar(updatedCarData._id, updatedCarData);
      setCars((prevCars) =>
        prevCars.map((car) =>
          car._id === updatedCar._id ? updatedCar : car
        )
      );
      setIsEditModalOpen(false);
      setSelectedCarData(null);
      setSuccessMessage("Car updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error updating car");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {errorMessage && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
          {successMessage}
        </div>
      )}
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
        onClose={() => {
          setIsEditModalOpen(false);
          setErrorMessage("");
        }}
        carData={selectedCarData}
        onSave={handleUpdateCar}
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car._id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Car Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleEditClick(car)}
                    className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 shadow"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(car._id)}
                    className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-700 shadow"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Car Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {car.desc || "No description available."}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-xl font-bold text-gray-800">
                      ${car.price}
                    </span>
                    <span className="text-sm text-gray-500">/day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${car.rentDetails ? "bg-green-500" : "bg-red-500"
                        }`}
                    ></span>
                    <span className="text-sm text-gray-600">
                      {car.rentDetails ? "Rented" : "Available"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 py-6 col-span-full">
            No cars found matching your search.
          </div>
        )}
      </div>

    </div>
  );
};

export default Dashboard;
