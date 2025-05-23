import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { getCars } from "../../../services/carServices";
import BasicCart from "../../components/cart/BasicCart";
import Pagination from "../../components/pagination/Pagination";
import Searchbar from "../../components/searchbar/Searchbar";

function Home() {
  const [isMenu, setIsMenu] = useState(false);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        const res = await getCars(currentPage);
        setCars(res.carLists);
        setFilteredCars(res.carLists);
        setTotalPages(res.totalPages);
      } catch (error) {
        console.error("Maşınlar alınmadı:", error);
      }
      setIsLoading(false);
    };

    fetchCars();
  }, [currentPage]);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [window.innerWidth]);

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }

  }, [isMenu]);

  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-10 gap-4 relative">
      <div
        className={`fixed md:static inset-0 z-40 transform ${isMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } transition-transform duration-300 md:col-span-2 bg-white`}
      >
        <Sidebar cars={cars} setCars={setCars} setTotalPages={setTotalPages} setCurrentPage={setCurrentPage} isMenu={isMenu} setIsMenu={setIsMenu} />
      </div>



      <div className="col-span-1 md:col-span-8 p-4">
        {
          isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {
                Array.from({ length: 8 }, (_, index) => <BasicCart key={index} isLoading={true} />)
              }
            </div>
          ) :
            cars.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cars.map((car) => (
                  <BasicCart key={car._id} carData={car} isLoading={isLoading} setIsLoading={setIsLoading} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 h-full flex justify-center items-center text-4xl font-bold">Maşın tapılmadı</p>
            )}
        {
          cars?.length ? (
            <Pagination
              cars={cars}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setTotalPages={setTotalPages}
            />
          ) : <p></p>
        }
      </div>




      <button
        onClick={() => setIsMenu(!isMenu)}
        className="fixed md:hidden bottom-4 right-4 bg-primary text-white p-3 flex justify-center items-center w-10 h-10 rounded-full shadow-lg z-50"
      >
        {isMenu ? "✕" : "☰"}
      </button>

    </div>
  );
}

export default Home;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import { getCars } from "../../../services/carServices";
// import BasicCart from "../../components/cart/BasicCart";
// import Pagination from "../../components/pagination/Pagination";
// import Searchbar from "../../components/searchbar/Searchbar";

// function Home() {
//   const [isMenu, setIsMenu] = useState(false);
//   const [cars, setCars] = useState([]);
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch cars data from API
//   const fetchCars = async (page) => {
//     setIsLoading(true);
//     try {
//       const res = await getCars(page);
//       setCars(res.carLists);
//       setFilteredCars(res.carLists); // Set filtered cars
//       setTotalPages(res.totalPages);
//     } catch (error) {
//       console.error("Maşınlar alınmadı:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchCars(currentPage);
//   }, [currentPage]);

//   // Resize listener to close menu on larger screens
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMenu(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Handle body overflow based on menu visibility
//   useEffect(() => {
//     document.body.style.overflow = isMenu ? "hidden" : "auto";
//     return () => document.body.style.overflow = "auto";
//   }, [isMenu]);

//   // Filter cars based on search input
//   const handleSearch = (searchTerm) => {
//     if (searchTerm === "") {
//       setFilteredCars(cars); // Show all cars if search term is empty
//     } else {
//       const filtered = cars.filter((car) =>
//         car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         car.model.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by name or model
//       );
//       setFilteredCars(filtered);
//     }
//   };

//   return (
//     <div className="h-full w-full grid grid-cols-1 md:grid-cols-10 gap-4 relative">
//       {/* Sidebar */}
//       <div
//         className={`fixed md:static inset-0 z-40 transform ${isMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//           } transition-transform duration-300 md:col-span-2 bg-white`}
//       >
//         <Sidebar
//           cars={cars}
//           setCars={setCars}
//           setTotalPages={setTotalPages}
//           setCurrentPage={setCurrentPage}
//           isMenu={isMenu}
//           setIsMenu={setIsMenu}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="col-span-1 md:col-span-8 p-4">
//         {/* Searchbar */}
//         <Searchbar onSearch={handleSearch} />

//         {/* Loading State */}
//         {isLoading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {Array.from({ length: 8 }, (_, index) => (
//               <BasicCart key={index} isLoading={true} />
//             ))}
//           </div>
//         ) : filteredCars.length ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredCars.map((car) => (
//               <BasicCart key={car._id} carData={car} isLoading={isLoading} setIsLoading={setIsLoading} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 h-full flex justify-center items-center text-4xl font-bold">Maşın tapılmadı</p>
//         )}

//         {/* Pagination */}
//         {filteredCars.length ? (
//           <Pagination
//             cars={filteredCars}
//             totalPages={totalPages}
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//             setTotalPages={setTotalPages}
//           />
//         ) : <p></p>}
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsMenu(!isMenu)}
//         className="fixed md:hidden bottom-4 right-4 bg-primary text-white p-3 flex justify-center items-center w-10 h-10 rounded-full shadow-lg z-50"
//       >
//         {isMenu ? "✕" : "☰"}
//       </button>
//     </div>
//   );
// }

// export default Home;
