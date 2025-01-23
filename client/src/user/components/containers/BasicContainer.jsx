import React, { useEffect, useState } from 'react'
import BasicCart from '../cart/BasicCart'

function BasicContainer({cars}) {

  console.log(cars);
  return (
    <div className='flex w-[100%] flex-wrap px-5 mb-[100px] max-w-[1120px] m-[auto]'>
      {
        cars.filter(car => car.isActive).map((car) => <BasicCart key={car._id} {...car} />)
      }
    </div>

  )
}

export default BasicContainer