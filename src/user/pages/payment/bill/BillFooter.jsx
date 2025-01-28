import React, { useEffect } from 'react'

const BillFooter = ({price, days, formData, setFormData}) => {
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      total: price * days
    }));
  }, [days, price, setFormData]);
  return (
    <div className='flex justify-between items-center'>
        <p className='font-bold text-lg'>Total Price:</p>
        <p className='font-bold text-2xl'> {price * days}$</p>
    </div>
  )
}

export default BillFooter