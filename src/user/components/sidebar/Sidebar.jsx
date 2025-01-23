import React, { useEffect, useState } from 'react'
import { filterCars } from '../../../services/carServices'

const Sidebar = ({ isMenu, setIsMenu, cars, setCars }) => {
    const [filterData, setFilterData] = useState({})
    // BU SEHIFEDE KI KODLAR SADECE FRONT UCUN YAZILIB VE DATA HEC YERDEN GETIRILMIR. API OLDUQDAN SONRA KOD STRUKTURU DEYISECEK UJIS
    const fakeList = ["Sport  (10)", "SUV  (12)", "MPV  (16)", "Sedan  (20)", "Coupe  (14)", "Hatchback  (14)"]
    const fakeList1 = ["2 Person  (10)", "4 Person  (14)", "6 Person  (12)", "8 or More  (16)"]
    const handleFilter = async (e) => {
        setFilterData((prevData) => {
            const {name , value , checked} = e.target
            if(checked){
                
            }
            
        })
        // const res = await filterCars({...filterData, [e.target.name]: e.target.value})
    }
    console.log(filterData);
    return (
        <div className={`${isMenu ? "hidden" : "flex"} flex flex-col h-full gap-10 px-5 absolute left-0 bg-white md:static md:col-span-2 md:flex max-w-[500px]`}>
            {/* TYPE */}
            <div className='flex flex-col gap-5 mt-10'>
                <p className='text-accent'>TYPE</p>
                {
                    fakeList.map((item, index) =>
                    (
                        <label key={index} className='flex gap-1 text-[#596780]' htmlFor="">
                            <input name="type" value={item} onChange={handleFilter} type="checkbox" />
                            {item}
                        </label>
                    )
                    )
                }
            </div>

            {/* CAPACITY */}
            <div className='flex flex-col gap-5'>
                <p className='text-accent'>CAPACITY</p>
                {
                    fakeList1.map((item, index) =>
                    (
                        <label key={index} className='flex gap-1 text-[#596780]' htmlFor="">
                            <input name="capacity" value={item} onChange={handleFilter} type="checkbox" />
                            {item}
                        </label>
                    )
                    )
                }
            </div>
            {/* PRICE */}
            <div>
                <p className='text-accent'>PRICE</p>
                <label htmlFor="">
                    <input
                        onChange={filterCars}
                        className='bg-blue-[#3563E9]'
                        type="range" />
                    <p className='text-[#596780] font-semibold'>Max. $100.00</p>

                </label>

            </div>

        </div>
    )
}

export default Sidebar