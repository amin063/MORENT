import React from 'react'

const BillMain = ({ setFormData, carData, formData, name, days, setDays }) => {
    const daysIncrement = () => {
        setDays((prevDays) => {
            const newDays = prevDays + 1;
            setFormData({ ...formData, ["rentDay"]: newDays });
            return newDays;
        });

    }
    const daysDecrement = () => {
        if (days > 1) {
            setDays((prevDays) => {
                const newDays = prevDays - 1;
                setFormData({ ...formData, ["rentDay"]: newDays });
                return newDays
            })
        }
    }
    return (
        <div className='flex gap-3'>
            <img className='w-[30%] h-[70px]' src={carData.img} alt="" />
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