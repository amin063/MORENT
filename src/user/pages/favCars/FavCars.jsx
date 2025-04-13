import React, { useEffect, useState } from "react";
import MenuBtn from "../../components/button/MenuBtn";
import { getFavCars } from "../../../services/carServices";
import { useSelector } from "react-redux";
import BasicCart from "../../components/cart/BasicCart";

function FavCars() {
  const [isMenu, setIsMenu] = useState(false);
  const [cars, setCars] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (user) {
        setIsLoading(true);
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
        setIsLoading(false);
      }
    })();
  }, [user]);

  console.log(cars);

  return (
    <div className="h-full w-full relative">
      <div className="p-6">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <BasicCart isLoading={true}  />
          <BasicCart isLoading={true}  />
          <BasicCart isLoading={true}  />
          <BasicCart isLoading={true}  />
          </div>
        ) : cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <BasicCart key={car._id} carData={car} isLoading={isLoading} setIsLoading={setIsLoading} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Maşın tapılmadı</p>
        )}
      </div>


      <MenuBtn isMenu={isMenu} setIsMenu={setIsMenu} />
    </div>
  );
}

export default FavCars;