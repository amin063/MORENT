import React, { useState } from "react";
import { filterCars, getCars } from "../../../services/carServices";
import {
  FiFilter,
  FiX,
  FiCheck,
  FiDollarSign,
  FiUsers,
} from "react-icons/fi";

const Sidebar = ({ cars, setCars, setTotalPages, setCurrentPage, isMenu, setIsMenu }) => {
  const [filterData, setFilterData] = useState({});
  const [price, setPrice] = useState(150);

  const vehicleTypes = ["SUV", "Sedan", "Hatch", "Coupe", "Van", "Wagon"];
  const capacities = ["2", "4", "6", "8"];

  const colors = {
    primary: "#3B82F6",
    primaryDark: "#2563EB",
    background: "#FFFFFF",
    text: "#1F2937",
    border: "#E5E7EB",
    accent: "#F3F4F6",
  };

  const handleFilter = (e) => {
    const { name, value, checked } = e.target;
    setFilterData((prevData) => {
      if (checked) {
        return { ...prevData, [name]: [...(prevData[name] || []), value] };
      } else {
        return {
          ...prevData,
          [name]: prevData[name]?.filter((item) => item !== value) || [],
        };
      }
    });
  };

  const searchCar = async () => {
    try {
      const { type, capacity } = filterData;
      const res = await filterCars({ type, capacity, price });
      setCars(res.cars);
      setTotalPages(res.totalPages || 1);
      setCurrentPage(1);
    } catch (error) {
      setCars([]);
      setTotalPages(1);
      setCurrentPage(1);
    }
  };

  const resetFilters = async () => {
    try {
      setFilterData({});
      setPrice(150);
      const res = await getCars(1);
      setCars(res.carLists);
      setTotalPages(res.totalPages || 1);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error resetting filters:", error);
      setCars([]);
      setTotalPages(1);
      setCurrentPage(1);
    }
  };

  return (
    <div className="fixed md:static inset-0 z-40 transform transition-transform duration-300 ease-in-out md:transform-none">
      {/* Backdrop for mobile */}
      {isMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMenu(false)}
        />
      )}

      {/* Sidebar Content */}
      <div 
  className={`fixed md:static inset-0 transform ${
    isMenu ? 'translate-x-0' : '-translate-x-full'
  } md:translate-x-0 transition-transform duration-300 ease-in-out
  ${isMenu ? 'w-full h-full' : 'w-[280px] h-full'} md:w-full md:max-w-sm md:h-auto bg-white shadow-xl md:shadow-none overflow-y-auto flex flex-col`}
>

        <div className="p-4 md:p-6 h-full">
          {/* Close button for mobile */}
          <button
            onClick={() => setIsMenu(false)}
            className="md:hidden absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
          >
            <FiX className="w-6 h-6" style={{ color: colors.text }} />
          </button>

          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2" style={{ color: colors.text }}>
              <FiFilter style={{ color: colors.primary }} /> Filters
            </h2>
          </div>

          {/* Vehicle Type */}
          <div className="space-y-6 md:space-y-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
                <FiCheck style={{ color: colors.primary }} /> Vehicle Type
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {vehicleTypes.map((item) => (
                  <label key={item} className="flex items-center  gap-3 cursor-pointer">
                    <input
                      name="type"
                      value={item}
                      onChange={handleFilter}
                      type="checkbox"
                      className="sr-only peer"
                      checked={filterData.type?.includes(item) || false}
                    />
                    <div
                      className="w-5 h-5 rounded border flex items-center justify-center transition-colors duration-200"
                      style={{
                        backgroundColor: filterData.type?.includes(item) ? colors.primary : colors.background,
                        borderColor: filterData.type?.includes(item) ? colors.primary : colors.border,
                      }}
                    >
                      {filterData.type?.includes(item) && <FiCheck className="text-white text-sm" />}
                    </div>
                    <span className="text-sm md:text-base" style={{ color: colors.text }}>
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Capacity */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
                <FiUsers style={{ color: colors.primary }} /> Capacity
              </h3>
              <div className="flex flex-wrap gap-3">
                {capacities.map((item) => (
                  <label key={item} className="cursor-pointer">
                    <input
                      name="capacity"
                      value={item}
                      onChange={handleFilter}
                      type="checkbox"
                      className="sr-only peer"
                      checked={filterData.capacity?.includes(item) || false}
                    />
                    <div
                      className="px-4 py-2 rounded-full border text-sm transition-colors duration-200"
                      style={{
                        backgroundColor: filterData.capacity?.includes(item) ? colors.primary : colors.background,
                        color: filterData.capacity?.includes(item) ? colors.background : colors.text,
                        borderColor: filterData.capacity?.includes(item) ? colors.primary : colors.border,
                      }}
                    >
                      {item} Person
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
                <FiDollarSign style={{ color: colors.primary }} /> Daily Price
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                    ${price}
                  </span>
                  <span className="text-gray-500 ml-1">/ day</span>
                </div>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    backgroundColor: colors.accent,
                    accentColor: colors.primary,
                  }}
                  min="50"
                  max="450"
                  step="10"
                  value={price}
                  type="range"
                />
                <div className="flex justify-between text-sm" style={{ color: colors.text }}>
                  <span>$50</span>
                  <span>$450</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  searchCar();
                  setIsMenu(false);
                }}
                className="w-full text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                style={{ backgroundColor: colors.primary }}
              >
                Search
              </button>
              <button
                onClick={() => {
                  resetFilters();
                  setIsMenu(false);
                }}
                className="w-full py-3 px-6 rounded-lg font-medium border transition-all duration-300 active:scale-95 hover:bg-gray-50"
                style={{
                  color: colors.text,
                  borderColor: colors.border,
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
