import React, { useEffect, useState } from 'react'
import { filterCars } from '../../../services/carServices'

const Sidebar = ({ isMenu, setIsMenu, cars, setCars }) => {
    const [filterData, setFilterData] = useState({})
    const [price, setPrice] = useState(100)
    const fakeList = ["SUV", "Sedan", "Hatchback", "Coupe", "Van", "Wagon",]
    const fakeList1 = ["2", "4", "6", "8"]
    const handleFilter = async (e) => {
        setFilterData((prevData) => {
            const { name, value, checked } = e.target;
            if (checked) {
                return { ...prevData, [name]: [...(prevData[name] || []), value] };
            } else {
                return { ...prevData, [name]: prevData[name].filter((item) => item !== value) };
            }
        });
    }

        const searchCar = async () => {
            const { type, capacity } = filterData
            const res = await filterCars({ type, capacity, price })
            console.log(res);
            setCars(res.cars)
        }
    console.log(cars + " sidebar cars");
    

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
                            {item} Person
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
                        onChange={(e) => setPrice(e.target.value)}
                        className='bg-blue-[#3563E9]'
                        min={100}
                        max={300}
                        value={price}
                        type="range" />
                    <p className='text-[#596780] font-semibold'>{price}$ / day</p>
                </label>
            </div>
            {/* BTN */}
            <input
                onClick={searchCar}
                className='bg-primary text-white py-1 px-2 rounded-md cursor-pointer'
                type="submit"
                value={'Search'}
            />
        </div>
    )
}

export default Sidebar