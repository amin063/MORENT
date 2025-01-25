import React, { useEffect, useState } from "react";
import BasicContainer from "../../components/containers/BasicContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import MenuBtn from "../../components/button/MenuBtn";
import { getFavCars } from "../../../services/carServices";
import { useSelector } from "react-redux";
function FavCars() {
    const [isMenu, setIsMenu] = useState(false);
    const [cars, setCars] = useState([])
    const { user } = useSelector(state => state.user)
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
        <div className={`h-full w-full grid grid-cols-10 gap-10 relative `}>
            <div className="col-span-10 md:col-span-8">
                {
                    cars === "undefined"  ?
                    <p>Masin tapilmadi</p>
                    :
                    <BasicContainer cars={cars} />
                }
            </div>
            <MenuBtn isMenu={isMenu} setIsMenu={setIsMenu} />
        </div>
    );
}

export default FavCars;
