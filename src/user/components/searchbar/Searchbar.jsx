import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react'; // modern ikon eklendi

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
    <div ref={containerRef} className="w-full max-w-xl mx-auto my-6 relative">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search for a car..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all duration-300 shadow-md hover:shadow-lg placeholder-gray-400 text-gray-800"
        />
      </div>

      {filteredCars.length > 0 && (
        <div className="absolute w-full bg-white shadow-lg rounded-xl mt-2 max-h-60 overflow-auto z-10 animate-fade-in">
          {filteredCars.map(car => (
            <Link
              to={`/details/${car._id}`}
              key={car._id}
              onClick={handleSelectCar}
              className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 transition-all rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-16 h-12 object-cover rounded-lg border shadow-sm"
                />
                <span className="text-gray-800 font-medium">{car.name}</span>
              </div>
              <span className="text-blue-500 text-sm">read more →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
