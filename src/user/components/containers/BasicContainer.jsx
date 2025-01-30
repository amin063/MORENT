import React, { useEffect, useState } from 'react'
import BasicCart from '../cart/BasicCart'

function BasicContainer({ cars }) {
  if (!cars || !Array.isArray(cars)) {
    return <p>Yüklənir...</p>;
  }

  return (
    <div className='flex w-[100%] flex-wrap px-5 mb-[100px] max-w-[1120px] m-[auto]'>
      {
        cars.filter(car => !car.rentDetails?.name || car.rentDetails === null).map((car) => <BasicCart key={car._id} {...car} />)
      }
    </div>
  );
}


export default BasicContainer