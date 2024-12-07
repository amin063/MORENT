import React from 'react'
import BasicCart from '../cart/BasicCart'

function BasicContainer() {
  return (
      <div className='flex w-[100%] flex-wrap mb-[100px]'>
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