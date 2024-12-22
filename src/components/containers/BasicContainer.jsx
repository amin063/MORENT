import React from 'react'
import BasicCart from '../cart/BasicCart'

function BasicContainer() {
  return (
      <div className='flex w-[100%] flex-wrap justify-center items-center col-span-10 px-5 md:col-span-8 mb-[100px]'>
        <BasicCart />
        <BasicCart />
        <BasicCart />
        <BasicCart />
        <BasicCart />
        <BasicCart />
        <BasicCart />
        <BasicCart />
      </div>

  )
}

export default BasicContainer