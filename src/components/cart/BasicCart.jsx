import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import car from '../../assets/images/car.png'
import { BsFillFuelPumpFill } from "react-icons/bs";
import BasicBtn from '../button/BasicBtn';
function BasicCart() {
    const [isLiked, setIsLiked] = useState(false)
    const likedIcon = <FaHeart className='text-[20px] text-red-600' />
    const unLikedIcon = <FaRegHeart className='text-[20px] text-accent' />
    const setLike = () => {
        setIsLiked(!isLiked)
    }


    return (
        <div className='w-[100%] sm:w-[50%] lg:w-[33%] xl:w-[25%] pt-4 pr-4 pb-4'>
            <div className='flex flex-col gap-9 bg-white p-5 rounded-md'>
                {/* HEADER */}
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-[20px]'>Koenigsegg</p>
                        <div onClick={setLike}>
                            {isLiked ? likedIcon : unLikedIcon}
                        </div>
                    </div>
                    <p className='text-accent font-bold text-[14px]'>Sport</p>
                </div>
                {/* IMAGE */}
                <img src={car} alt="" />

                {/* DETAIL */}
                <div className='flex justify-between items-center text-accent'>
                    <div className='flex gap-1 items-center'>
                        < BsFillFuelPumpFill />
                        90L
                    </div>
                    <div className='flex gap-1 items-center'>
                        < BsFillFuelPumpFill />
                        Manual
                    </div>
                    <div className='flex gap-1 items-center'>
                        < BsFillFuelPumpFill />
                        2 People
                    </div>
                </div>
                {/* BUY */}
                <div className='flex justify-between'>
                    <p className='font-bold'>$99.00 / <span className='text-accent text-[14px]'>day</span></p>
                    <BasicBtn />
                </div>
            </div>
        </div>
    )
}

export default BasicCart