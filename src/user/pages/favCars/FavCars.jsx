import React, { useEffect, useState } from "react";
import MenuBtn from "../../components/button/MenuBtn";
import { getFavCars } from "../../../services/carServices";
import { useSelector } from "react-redux";
import BasicCart from "../../components/cart/BasicCart";

function FavCars() {
  const [isMenu, setIsMenu] = useState(false);
  const [cars, setCars] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      if (user) {
        try {
          const userId = user._id;
          const res = await getFavCars({ userId });
          console.log(JSON.stringify(res.favCars) + "res");
          if (res.favCars) {
            setCars(res.favCars);
          } else {
            setCars([]);
            console.error(res.message || "Xəta baş verdi.");
          }
        } catch (error) {
          console.error("API xəta:", error);
        }
      }
    })();
  }, [user]);

  console.log(cars);

  return (
    <div className="h-full w-full relative">
      {/* Ana İçerik Alanı */}
      <div className="p-6">
        {cars.length > 0 ? (
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
      <MenuBtn isMenu={isMenu} setIsMenu={setIsMenu} />
    </div>
  );
}

export default FavCars;