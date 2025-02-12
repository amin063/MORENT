import React, { useEffect, useState } from 'react'
import image1 from '../../../../assets/images/image1.jpg'
import image2 from '../../../../assets/images/image2.jpg'
import image3 from '../../../../assets/images/image3.jpg'
import { FaHeart } from "react-icons/fa";
import BasicBtn from '../../../components/button/BasicBtn';
import { getCarDetails } from '../../../../services/carServices';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const [carData, setCarData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const res = await getCarDetails(id)
            setCarData(res.car)
        })()
        window.scrollTo(0 , 0)
    }, [id])

    return (
        <div className='grid grid-rows-1 gap-5 md:grid-cols-2 w-[90%] max-w-[1120px] m-auto mt-10'>
            {/* THUBNAILS */}
            <div className='grid gap-10 grid-rows-3'>
                <div className='row-span-3 flex justify-center items-center border'><img className='rounded-md' src={image1} /></div>
            </div>
            {/* INFO */}
            <div className='bg-white flex flex-col justify-between gap-5 p-5'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-2xl'>{carData.name}</h1>
                </div>
                {/* INFO */}
                <p className='text-accent'>{carData.desc}</p>
                {/* FEATURES */}
                <div className='flex gap-10'>
                    <div>
                        <p className='text-accent'>Type Car: <span className='font-semibold text-[#596780]'>{carData.type}</span></p>
                        <p className='text-accent'>Drive Type: <span className='font-semibold text-[#596780]'>{carData.driveType}</span></p>
                    </div>
                    <div>
                        <p className='text-accent'>Capacity: <span className='font-semibold text-[#596780]'>{carData.capacity} Person</span></p>
                        <p className='text-accent'>Fuel: <span className='font-semibold text-[#596780]'>{carData.fuelCapacity}L</span></p>
                    </div>
                </div>
                {/* BUY */}
                <div className='flex justify-between'>
                    <p className='font-bold text-[25px]'>${carData.price}.00/ <span className='text-[#596780] text-base'>days</span></p>
                    <BasicBtn path={`/payment/${carData._id}`}/>
                </div>
            </div>
        </div>
    )
}

export default CarDetails