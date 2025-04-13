import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import BasicBtn from '../../../components/button/BasicBtn';
import { getCarDetails } from '../../../../services/carServices';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const [carData, setCarData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            setLoading(true);
            const res = await getCarDetails(id);
            setCarData(res.car);
            setLoading(false);
        })();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className='grid grid-rows-1 gap-5 md:grid-cols-2 w-[90%] max-w-[1120px] m-auto mt-10 animate-pulse'>
                <div className='grid gap-10 grid-rows-3'>
                    <div className='row-span-3 flex justify-center items-center border'>
                        <div className='rounded-md w-[200px] h-[150px] bg-gray-200'></div>
                    </div>
                </div>
                <div className='bg-white flex flex-col justify-between gap-5 p-5'>
                    <div className='flex justify-between'>
                        <div className='h-6 w-40 bg-gray-200 rounded'></div>
                    </div>
                    <div className='h-4 w-full bg-gray-200 rounded'></div>
                    <div className='flex gap-10'>
                        <div className='space-y-2'>
                            <div className='h-4 w-32 bg-gray-200 rounded'></div>
                            <div className='h-4 w-32 bg-gray-200 rounded'></div>
                        </div>
                        <div className='space-y-2'>
                            <div className='h-4 w-32 bg-gray-200 rounded'></div>
                            <div className='h-4 w-32 bg-gray-200 rounded'></div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='h-6 w-32 bg-gray-200 rounded'></div>
                        <div className='h-10 w-24 bg-gray-200 rounded'></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='grid grid-rows-1 gap-5 md:grid-cols-2 w-[90%] max-w-[1120px] m-auto mt-10'>
            <div className='grid gap-10 grid-rows-3'>
                <div className='row-span-3 flex justify-center items-center border'>
                    <img className='rounded-md w-[200px]' src={carData.img} />
                </div>
            </div>
            <div className='bg-white flex flex-col justify-between gap-5 p-5'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-2xl'>{carData.name}</h1>
                </div>
                <p className='text-accent'>{carData.desc}</p>
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
                <div className='flex justify-between'>
                    <p className='font-bold text-[25px]'>${carData.price}.00/ <span className='text-[#596780] text-base'>days</span></p>
                    <BasicBtn path={`/payment/${carData._id}`} />
                </div>
            </div>
        </div>
    );
}

export default CarDetails;
