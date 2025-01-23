import React from 'react'
import car from '../../../../assets/images/image3.jpg'

const BillMain = ({name, days, setDays}) => {
    const daysIncrement = () => {
        setDays(days + 1)
    }
    const daysDecrement = () => {
        if (days > 1) {
            setDays(days - 1)
        }
    }
    return (
        <div className='flex gap-3'>
            <img className='w-[30%]' src={car} alt="" />
            <div className='flex flex-col gap-2'>
                <h4 className='font-bold text-2xl'>{name}</h4>
                <div className='flex items-center gap-3'>
                    <button onClick={daysDecrement} className="w-8 h-8 bg-primary text-white text-xl font-bold rounded-full">-</button>
                    <p className='font-extrabold text-lg'>{days}</p>
                    <button onClick={daysIncrement} className="w-8 h-8 bg-primary text-white text-xl font-bold rounded-full">+</button>
                    <p className='text-accent font-bold'>Days</p>
                </div>
            </div>
        </div>
    )
}

export default BillMain