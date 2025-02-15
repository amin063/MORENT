import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { getCars } from "../../../services/carServices";
import BasicCart from "../../components/cart/BasicCart";

function Home() {
  const [isMenu, setIsMenu] = useState(false);
  const [cars, setCars] = useState([]);

  // Araba verilerini çek
  useEffect(() => {
    (async () => {
      const res = await getCars();
      setCars(res.carLists);
    })();
  }, []);

  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-10 gap-4 relative">
      {/* Sidebar (Mobilde tam ekran, büyük ekranlarda 2 sütun) */}
      <div
        className={`fixed md:static inset-0 z-40 transform ${
          isMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 md:col-span-2 bg-white shadow-md`}
      >
        <Sidebar cars={cars} setCars={setCars} isMenu={isMenu} setIsMenu={setIsMenu} />
      </div>

      {/* Ana İçerik Alanı (Mobilde tam genişlik, büyük ekranlarda 8 sütun) */}
      <div className="col-span-1 md:col-span-8 p-4">
        {cars.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <BasicCart key={car._id} {...car} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Maşın tapılmadı</p>
        )}
      </div>

      {/* Mobil Menü Butonu (Sadece mobilde görünecek) */}
      <button
        onClick={() => setIsMenu(!isMenu)}
        className="fixed md:hidden bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg z-50"
      >
        {isMenu ? "✕" : "☰"}
      </button>
    </div>
  );
}

export default Home;