import React, { useState } from "react";
import { filterCars, getCars } from "../../../services/carServices";

const Sidebar = ({ cars, setCars, setTotalPages, setCurrentPage, isMenu, setIsMenu }) => {
  const [filterData, setFilterData] = useState({});
  const [price, setPrice] = useState(50);
  const fakeList = ["SUV", "Sedan", "Hatchback", "Coupe", "Van", "Wagon"];
  const fakeList1 = ["2", "4", "6", "8"];

  const handleFilter = async (e) => {
    setFilterData((prevData) => {
      const { name, value, checked } = e.target;
      if (checked) {
        return { ...prevData, [name]: [...(prevData[name] || []), value] };
      } else {
        return { ...prevData, [name]: prevData[name].filter((item) => item !== value) };
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
    setIsMenu(false);
  };
  

  const resetFilters = async () => {
    try {
      setFilterData({});
      setPrice(100);
  
      const res = await getCars(1);
      setCars(res.carLists);
      setTotalPages(res.totalPages || 1);
      setCurrentPage(1);
    } catch (error) {
      console.error("Filtre sıfırlama sırasında hata:", error);
      setCars([]);
      setTotalPages(1);
      setCurrentPage(1);
    }
    setIsMenu(false);
  };
  

  return (
    <div className="p-4 h-full overflow-y-auto">
      {/* TYPE */}
      <div className="flex flex-col gap-3 mb-6">
        <p className="text-accent font-semibold">TYPE</p>
        {fakeList.map((item, index) => (
          <label key={index} className="flex gap-2 items-center text-[#596780]">
            <input
              name="type"
              value={item}
              onChange={handleFilter}
              type="checkbox"
              className="w-4 h-4"
              checked={filterData.type?.includes(item) || false}
            />
            {item}
          </label>
        ))}
      </div>

      {/* CAPACITY */}
      <div className="flex flex-col gap-3 mb-6">
        <p className="text-accent font-semibold">CAPACITY</p>
        {fakeList1.map((item, index) => (
          <label key={index} className="flex gap-2 items-center text-[#596780]">
            <input
              name="capacity"
              value={item}
              onChange={handleFilter}
              type="checkbox"
              className="w-4 h-4"
              checked={filterData.capacity?.includes(item) || false}
            />
            {item} Person
          </label>
        ))}
      </div>

      {/* PRICE */}
      <div className="mb-6">
        <p className="text-accent font-semibold">PRICE</p>
        <label className="block">
          <input
            onChange={(e) => setPrice(e.target.value)}
            className="w-full"
            min={50}
            max={2500}
            value={price}
            type="range"
          />
          <p className="text-[#596780] font-semibold">{price}$ / day</p>
        </label>
      </div>

      {/* SEARCH BUTTON */}
      <button
        onClick={searchCar}
        className="w-full bg-primary text-white py-2 px-4 rounded-md cursor-pointer hover:bg-primary-dark transition-colors duration-300 mb-4"
      >
        Search
      </button>

      {/* RESET BUTTON */}
      <button
        onClick={resetFilters}
        className="w-full bg-gray-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-300"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;