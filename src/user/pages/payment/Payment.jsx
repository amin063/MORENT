import React from 'react'
import Input from '../../components/inputs/FormInput'
import FormInput from '../../components/inputs/FormInput'
import Biling from './formSections/Biling'
import Method from './formSections/Methods'
import Confirmation from './formSections/Confirmation'
import BillHeader from './bill/BillHeader'
import BillMain from './bill/BillMain'
import BillFooter from './bill/BillFooter'
function Payment() {
  return (
    <div className='w-[90%] my-5 mx-auto max-w-[1120px] flex flex-col gap-5 lg:flex-row'>
      {/* FORM */}
      <div className='flex flex-col gap-5'>
        <Biling />
        <Method />
        <Confirmation />
      </div>
      {/* BILL */}
      <div className='bg-white p-5 flex flex-col gap-5 self-start'>
        <BillHeader />
        <BillMain />
        <BillFooter />
      </div>
    </div>
  )
}

export default Payment