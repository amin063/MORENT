import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [allCars, setAllCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("https://morentapi.onrender.com/api/allcars")
      .then(res => res.json())
      .then(data => setAllCars(data.cars))
      .catch(error => console.error("Error fetching cars:", error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.trim() === "") {
      setFilteredCars([]);
      return;
    }
    const filtered = allCars.filter(car =>
      car.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const handleSelectCar = () => {
    setSearchValue("");
    setFilteredCars([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setFilteredCars([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-xl mx-auto my-5 relative">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Maşın adı axtarın..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
        />
      </div>

      {filteredCars.length > 0 && (
        <div className="absolute w-full bg-white shadow-lg rounded-2xl mt-2 max-h-60 overflow-auto z-10">
          {filteredCars.map(car => (
           <Link
           to={`/details/${car._id}`}
           key={car._id}
           onClick={handleSelectCar}
           className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-all rounded-xl"
         >
           <div className="flex items-center gap-4">
             <img
               src={car.img}
               alt={car.name}
               className="w-14 h-10 object-cover rounded-lg shadow-sm"
             />
             <div className="text-gray-800 font-semibold text-base">{car.name}</div>
           </div>
           <span className="text-blue-400 text-sm">Detallara bax →</span>
         </Link>
         
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
