import React from 'react'
import car from '../../../../assets/images/image3.jpg'

const BillMain = () => {
    return (
        <div className='flex gap-3'>
            <img className='w-[30%]' src={car} alt="" />
            <div className='flex flex-col gap-2'>
                <h4 className='font-bold text-2xl'>Nissan GT-R</h4>
                <div className='flex items-center gap-3'>
                    <button className="w-8 h-8 bg-primary text-white text-xl font-bold rounded-full">-</button>
                    <p className='font-extrabold text-lg'>2</p>
                    <button className="w-8 h-8 bg-primary text-white text-xl font-bold rounded-full">+</button>
                    <p className='text-accent font-bold'>Days</p>
                </div>
            </div>
        </div>
    )
}

export default BillMain