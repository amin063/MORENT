import React from 'react'
import image1 from '../../../assets/images/car.png'
import image2 from '../../../assets/images/car2.png'
import image3 from '../../../assets/images/introCards/introCard.png'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import BasicBtn from '../../../components/button/BasicBtn';

const CarDetails = () => {
    return (
        <div className='grid grid-rows-2 gap-5 md:grid-cols-2 w-[90%] m-auto'>
            <div className='grid gap-10 grid-rows-3'>
                <div className='row-span-2 border border-primary p-10 flex justify-center items-center'><img src={image1} /></div>
                <div className='row-span-1 gap-5 grid grid-cols-3'>
                    <div className='border border-primary flex justify-center items-center'><img src={image1} /></div>
                    <div className='border border-primary flex justify-center items-center'><img src={image2} /></div>
                    <div className='border border-primary flex justify-center items-center'><img src={image3} /></div>
                </div>
            </div>
            <div className='bg-white flex flex-col justify-between gap-5 p-5'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1>Nissan GT - R</h1>
                        <div className='flex justify-center items-center gap-1'>
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <p className='ml-2'>440 Reviewer</p>
                        </div>
                    </div>
                    <FaHeart className='text-red-600' />
                </div>
                {/* INFO */}
                <p>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                {/* FEATURES */}
                <div className='flex gap-10'>
                    <div>
                        <p>Type Car: Sport</p>
                        <p>Steering: Manual</p>
                    </div>
                    <div>
                        <p>Type Car: Sport</p>
                        <p>Steering: Manual</p>
                    </div>
                </div>
                {/* BUY */}
                <div className='flex justify-between'>
                    $80.00/ days
                    <BasicBtn />
                </div>
            </div>
        </div>
    )
}

export default CarDetails