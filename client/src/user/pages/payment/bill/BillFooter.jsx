import React from 'react'

const BillFooter = ({price, days}) => {
  
  return (
    <div className='flex justify-between items-center'>
        <p className='font-bold text-lg'>Total Price:</p>
        <p className='font-bold text-2xl'> {price * days}$</p>
    </div>
  )
}

export default BillFooter