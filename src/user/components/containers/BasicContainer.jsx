import React from 'react'
import BasicCart from '../cart/BasicCart'

function BasicContainer() {
  return (
      <div className='flex w-[100%]  flex-wrap col-span-10 px-5 md:col-span-8 mb-[100px] max-w-[1120px] m-[auto]'>
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