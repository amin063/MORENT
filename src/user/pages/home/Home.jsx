import React, { useEffect, useState } from "react";
import BasicContainer from "../../components/containers/BasicContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import MenuBtn from "../../components/button/MenuBtn";
import { getCars } from "../../../services/carServices";
function Home() {
  const [isMenu, setIsMenu] = useState(false);
  const [cars, setCars] = useState([])
  useEffect(() => {
    (async () => {
      const res = await getCars()
      setCars(res.carLists)
    })()
  }, [])
  console.log(cars);
  
  return (
    <div className={`h-full w-full grid grid-cols-10 gap-10 relative `}>
      <Sidebar cars={cars} setCars={setCars} isMenu={isMenu} setIsMenu={setIsMenu} />
      <div className="col-span-10 md:col-span-8">
        {
          cars.length ?
          <BasicContainer cars={cars} />
          :
          <p>Masin tapilmadi</p>
        }
        </div>
      <MenuBtn isMenu={isMenu} setIsMenu={setIsMenu} />
    </div>
  );
}

export default Home;
