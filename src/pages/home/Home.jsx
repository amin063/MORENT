import React from 'react'
import BasicCart from '../../components/cart/BasicCart'
import BasicContainer from '../../components/containers/BasicContainer'

function Home() {
  return (
    <div className="w-[90%] m-auto">
      <p className='text-[16px] text-accent my-5'>Popular Car</p>
      <BasicContainer />
      <p className='text-[16px] text-accent my-5'>Recommendend Car</p>
      <BasicContainer />

    </div>
  )
}

export default Home