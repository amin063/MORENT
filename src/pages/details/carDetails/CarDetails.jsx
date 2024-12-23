import React from 'react'
import image1 from '../../../assets/images/image1.jpg'
import image2 from '../../../assets/images/image2.jpg'
import image3 from '../../../assets/images/image3.jpg'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import BasicBtn from '../../../components/button/BasicBtn';

const CarDetails = () => {
    return (
        <div className='grid grid-rows-2 gap-5 md:grid-cols-2 w-[90%] max-w-[1120px] m-auto mt-10'>
            {/* THUBNAILS */}
            <div className='grid gap-10 grid-rows-3'>
                <div className='row-span-2 flex justify-center items-center border'><img className='rounded-md' src={image3} /></div>
                <div className='row-span-1 gap-5 grid grid-cols-3'>
                    <div className='flex justify-center items-center border-2 border-primary rounded-md'><img className='rounded-md' src={image3} /></div>
                    <div className='flex justify-center items-center border'><img className='rounded-md' src={image2} /></div>
                    <div className='flex justify-center items-center border'><img className='rounded-md' src={image1} /></div>
                </div>
            </div>
            {/* INFO */}
            <div className='bg-white flex flex-col justify-between gap-5 p-5'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl'>Nissan GT - R</h1>
                        <div className='flex justify-center items-center gap-1'>
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <p className='ml-2 text-accent'>440 Reviewer</p>
                        </div>
                    </div>
                    <FaHeart className='text-red-600' />
                </div>
                {/* INFO */}
                <p className='text-accent'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                {/* FEATURES */}
                <div className='flex gap-10'>
                    <div>
                        <p className='text-accent'>Type Car: <span className='font-semibold text-[#596780]'>Sport</span></p>
                        <p className='text-accent'>Steering: <span className='font-semibold text-[#596780]'>Manual</span></p>
                    </div>
                    <div>
                        <p className='text-accent'>Type Car: <span className='font-semibold text-[#596780]'>Sport</span></p>
                        <p className='text-accent'>Steering: <span className='font-semibold text-[#596780]'>Manual</span></p>
                    </div>
                </div>
                {/* BUY */}
                <div className='flex justify-between'>
                    <p className='font-bold text-[25px]'>$80.00/ <span className='text-[#596780] text-base'>days</span></p>
                    <BasicBtn />
                </div>
            </div>
        </div>
    )
}

export default CarDetails