// import React, { useState } from "react";
// import { filterCars, getCars } from "../../../services/carServices";
// import {
//   FiFilter,
//   FiX,
//   FiCheck,
//   FiDollarSign,
//   FiUsers,
//   FiMenu,
// } from "react-icons/fi";

// const Sidebar = ({ cars, setCars, setTotalPages, setCurrentPage }) => {
//   const [filterData, setFilterData] = useState({});
//   const [price, setPrice] = useState(150);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const vehicleTypes = ["SUV", "Sedan", "Hatchback", "Coupe", "Van", "Wagon"];
//   const capacities = ["2", "4", "6", "8"];

//   // Blue and white color palette
//   const colors = {
//     primary: "#3B82F6",
//     primaryDark: "#2563EB",
//     background: "#FFFFFF",
//     text: "#1F2937",
//     border: "#E5E7EB",
//     accent: "#F3F4F6",
//   };

//   // Diğer fonksiyonlar aynı...
//   const handleFilter = async (e) => {
//     setFilterData((prevData) => {
//       const { name, value, checked } = e.target;
//       if (checked) {
//         return { ...prevData, [name]: [...(prevData[name] || []), value] };
//       } else {
//         return {
//           ...prevData,
//           [name]: prevData[name]?.filter((item) => item !== value) || [],
//         };
//       }
//     });
//   };

//   const searchCar = async () => {
//     try {
//       const { type, capacity } = filterData;
//       const res = await filterCars({ type, capacity, price });
//       setCars(res.cars);
//       setTotalPages(res.totalPages || 1);
//       setCurrentPage(1);
//     } catch (error) {
//       setCars([]);
//       setTotalPages(1);
//       setCurrentPage(1);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const resetFilters = async () => {
//     try {
//       setFilterData({});
//       setPrice(150);
//       const res = await getCars(1);
//       setCars(res.carLists);
//       setTotalPages(res.totalPages || 1);
//       setCurrentPage(1);
//     } catch (error) {
//       console.error("Error resetting filters:", error);
//       setCars([]);
//       setTotalPages(1);
//       setCurrentPage(1);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       {/* Mobile Hamburger Button */}
//       <button
//         onClick={() => setIsMobileMenuOpen(true)}
//         className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-md shadow-lg"
//         style={{ color: colors.primary }}
//       >
//         <FiMenu size={24} />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed md:relative inset-y-0 left-0 z-20 w-72 md:w-full h-full bg-white shadow-lg md:shadow-none transform transition-transform duration-300 ease-in-out ${
//           isMobileMenuOpen
//             ? "translate-x-0"
//             : "-translate-x-full md:translate-x-0"
//         }`}
//         style={{ backgroundColor: colors.background }}
//       >
//         {/* Close Button (Mobile Only) */}
//         <button
//           onClick={() => setIsMobileMenuOpen(false)}
//           className="md:hidden absolute top-4 right-4 p-1 rounded-full"
//           style={{ color: colors.text }}
//         >
//           <FiX size={20} />
//         </button>

//         <div className="p-4 h-full overflow-y-auto">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-6 md:mb-8">
//             <h2
//               className="text-xl md:text-2xl font-bold flex items-center gap-2"
//               style={{ color: colors.text }}
//             >
//               <FiFilter style={{ color: colors.primary }} /> Filters
//             </h2>
//           </div>

//           {/* Vehicle Type Section */}
//           <div className="mb-6 xl:mb-8">
//             <h3
//               className="text-base lg:text-lg font-semibold mb-3 xl:mb-4 flex items-center gap-2"
//               style={{ color: colors.text }}
//             >
//               <FiCheck style={{ color: colors.primary }} /> Vehicle Type
//             </h3>
//             <div className="grid grid-cols-2 xl:grid-cols-1 gap-2 lg:gap-3">
//               {vehicleTypes.map((item) => (
//                 <label
//                   key={item}
//                   className="flex items-center space-x-2 lg:space-x-3 cursor-pointer min-w-0"
//                 >
//                   <div className="relative flex-shrink-0">
//                     <input
//                       name="type"
//                       value={item}
//                       onChange={handleFilter}
//                       type="checkbox"
//                       className="sr-only peer"
//                       checked={filterData.type?.includes(item) || false}
//                     />
//                     <div
//                       className="w-4 h-4 lg:w-5 lg:h-5 rounded flex items-center justify-center transition-all duration-200 border flex-shrink-0"
//                       style={{
//                         backgroundColor: filterData.type?.includes(item)
//                           ? colors.primary
//                           : colors.background,
//                         borderColor: filterData.type?.includes(item)
//                           ? colors.primary
//                           : colors.border,
//                       }}
//                     >
//                       {filterData.type?.includes(item) && (
//                         <FiCheck className="text-white text-xs lg:text-sm" />
//                       )}
//                     </div>
//                   </div>
//                   <span
//                     className="text-sm lg:text-base whitespace-nowrap overflow-hidden text-ellipsis min-w-0"
//                     style={{ color: colors.text }}
//                   >
//                     {item}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Capacity Section */}
//           <div className="mb-6 md:mb-8">
//             <h3
//               className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2"
//               style={{ color: colors.text }}
//             >
//               <FiUsers style={{ color: colors.primary }} /> Capacity
//             </h3>
//             <div className="flex flex-wrap gap-2 md:gap-3">
//               {capacities.map((item) => (
//                 <label
//                   key={item}
//                   className="relative inline-flex items-center cursor-pointer"
//                 >
//                   <input
//                     name="capacity"
//                     value={item}
//                     onChange={handleFilter}
//                     type="checkbox"
//                     className="sr-only peer"
//                     checked={filterData.capacity?.includes(item) || false}
//                   />
//                   <div
//                     className="px-3 py-1 md:px-4 md:py-2 rounded-full transition-all duration-200 border text-xs md:text-sm"
//                     style={{
//                       backgroundColor: filterData.capacity?.includes(item)
//                         ? colors.primary
//                         : colors.background,
//                       color: filterData.capacity?.includes(item)
//                         ? colors.background
//                         : colors.text,
//                       borderColor: filterData.capacity?.includes(item)
//                         ? colors.primary
//                         : colors.border,
//                     }}
//                   >
//                     {item} Person
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Price Range */}
//           <div className="mb-6 md:mb-8">
//             <h3
//               className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2"
//               style={{ color: colors.text }}
//             >
//               <FiDollarSign style={{ color: colors.primary }} /> Daily Price
//             </h3>
//             <div className="space-y-3 md:space-y-4">
//               <div className="text-center mb-2">
//                 <span
//                   className="text-xl md:text-2xl font-bold"
//                   style={{ color: colors.primary }}
//                 >
//                   ${price}
//                 </span>
//                 <span className="text-gray-500 ml-1 text-sm md:text-base">
//                   / day
//                 </span>
//               </div>
//               <input
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="w-full h-2 rounded-lg appearance-none cursor-pointer"
//                 style={{
//                   backgroundColor: colors.accent,
//                   accentColor: colors.primary,
//                 }}
//                 min="50"
//                 max="450"
//                 step="10"
//                 value={price}
//                 type="range"
//               />
//               <div
//                 className="flex justify-between text-xs md:text-sm"
//                 style={{ color: colors.text }}
//               >
//                 <span>$50</span>
//                 <span>$450</span>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col space-y-2 md:space-y-3">
//             <button
//               onClick={searchCar}
//               className="w-full text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base"
//               style={{
//                 backgroundColor: colors.primary,
//                 ":hover": { backgroundColor: colors.primaryDark },
//               }}
//             >
//               Search
//             </button>
//             <button
//               onClick={resetFilters}
//               className="w-full py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium border transition-all duration-300 active:scale-95 hover:bg-gray-50 text-sm md:text-base"
//               style={{
//                 color: colors.text,
//                 borderColor: colors.border,
//               }}
//             >
//               Reset Filters
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Overlay (Mobile Only) */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { filterCars, getCars } from "../../../services/carServices";
import {
  FiFilter,
  FiX,
  FiCheck,
  FiDollarSign,
  FiUsers,
} from "react-icons/fi";

const Sidebar = ({ cars, setCars, setTotalPages, setCurrentPage }) => {
  const [filterData, setFilterData] = useState({});
  const [price, setPrice] = useState(150);

  const vehicleTypes = ["SUV", "Sedan", "Hatchback", "Coupe", "Van", "Wagon"];
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
    <div
      className="w-72 md:w-full h-full bg-white shadow-lg md:shadow-none p-4 overflow-y-auto"
      style={{ backgroundColor: colors.background }}
    >
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2
          className="text-xl md:text-2xl font-bold flex items-center gap-2"
          style={{ color: colors.text }}
        >
          <FiFilter style={{ color: colors.primary }} /> Filters
        </h2>
      </div>

      {/* Vehicle Type */}
      <div className="mb-6 xl:mb-8">
        <h3
          className="text-base lg:text-lg font-semibold mb-3 xl:mb-4 flex items-center gap-2"
          style={{ color: colors.text }}
        >
          <FiCheck style={{ color: colors.primary }} /> Vehicle Type
        </h3>
        <div className="grid grid-cols-2 xl:grid-cols-1 gap-2 lg:gap-3">
          {vehicleTypes.map((item) => (
            <label
              key={item}
              className="flex items-center space-x-2 lg:space-x-3 cursor-pointer"
            >
              <input
                name="type"
                value={item}
                onChange={handleFilter}
                type="checkbox"
                className="sr-only peer"
                checked={filterData.type?.includes(item) || false}
              />
              <div
                className="w-4 h-4 lg:w-5 lg:h-5 rounded border flex items-center justify-center"
                style={{
                  backgroundColor: filterData.type?.includes(item)
                    ? colors.primary
                    : colors.background,
                  borderColor: filterData.type?.includes(item)
                    ? colors.primary
                    : colors.border,
                }}
              >
                {filterData.type?.includes(item) && (
                  <FiCheck className="text-white text-xs lg:text-sm" />
                )}
              </div>
              <span
                className="text-sm lg:text-base"
                style={{ color: colors.text }}
              >
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Capacity */}
      <div className="mb-6 md:mb-8">
        <h3
          className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2"
          style={{ color: colors.text }}
        >
          <FiUsers style={{ color: colors.primary }} /> Capacity
        </h3>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {capacities.map((item) => (
            <label
              key={item}
              className="cursor-pointer inline-flex items-center"
            >
              <input
                name="capacity"
                value={item}
                onChange={handleFilter}
                type="checkbox"
                className="sr-only peer"
                checked={filterData.capacity?.includes(item) || false}
              />
              <div
                className="px-3 py-1 md:px-4 md:py-2 rounded-full border text-xs md:text-sm"
                style={{
                  backgroundColor: filterData.capacity?.includes(item)
                    ? colors.primary
                    : colors.background,
                  color: filterData.capacity?.includes(item)
                    ? colors.background
                    : colors.text,
                  borderColor: filterData.capacity?.includes(item)
                    ? colors.primary
                    : colors.border,
                }}
              >
                {item} Person
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 md:mb-8">
        <h3
          className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2"
          style={{ color: colors.text }}
        >
          <FiDollarSign style={{ color: colors.primary }} /> Daily Price
        </h3>
        <div className="space-y-3 md:space-y-4">
          <div className="text-center mb-2">
            <span
              className="text-xl md:text-2xl font-bold"
              style={{ color: colors.primary }}
            >
              ${price}
            </span>
            <span className="text-gray-500 ml-1 text-sm md:text-base">
              / day
            </span>
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
          <div
            className="flex justify-between text-xs md:text-sm"
            style={{ color: colors.text }}
          >
            <span>$50</span>
            <span>$450</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-2 md:space-y-3">
        <button
          onClick={searchCar}
          className="w-full text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base"
          style={{ backgroundColor: colors.primary }}
        >
          Search
        </button>
        <button
          onClick={resetFilters}
          className="w-full py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium border transition-all duration-300 active:scale-95 hover:bg-gray-50 text-sm md:text-base"
          style={{
            color: colors.text,
            borderColor: colors.border,
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
