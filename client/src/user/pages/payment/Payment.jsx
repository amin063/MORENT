import React, { useEffect, useState } from 'react'
import Input from '../../components/inputs/FormInput'
import FormInput from '../../components/inputs/FormInput'
import Biling from './formSections/Biling'
import Method from './formSections/Methods'
import Confirmation from './formSections/Confirmation'
import BillHeader from './bill/BillHeader'
import BillMain from './bill/BillMain'
import BillFooter from './bill/BillFooter'
import { useParams } from 'react-router-dom'
import { getCarDetails } from '../../../services/carServices'
function Payment() {
  const [carData, setCarData] = useState({})
  const [days, setDays] = useState(1)
  const [formData, setFormData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const res = await getCarDetails(id)
            setCarData(res.car)
        })()
    }, [])
  return (
    <div className='w-[90%] my-5 mx-auto max-w-[1120px] flex flex-col gap-5 lg:flex-row'>
      {/* FORM */}
      <div className='flex flex-col gap-5'>
        <Biling />
        <Method />
        <Confirmation days={days} {...carData}/>
      </div>
      {/* BILL */}
      <div className='bg-white p-5 flex flex-col gap-5 self-start'>
        <BillHeader/>
        <BillMain {...carData} days={days} setDays={setDays}/>
        <BillFooter {...carData} days={days}/>
      </div>
    </div>
  )
}

export default Payment