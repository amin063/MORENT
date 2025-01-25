import React from 'react'
import FormInput from '../../../components/inputs/FormInput'
import visa from '../../../../assets/images/Visa.png'
import blueIcon from '../../../../assets/icons/pick.svg'

const Method = ({formData, setFormData}) => {
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <div className='bg-white p-5 rounded-md'>
            {/* HEADER */}
            <div className='flex justify-between items-center my-5'>
                <div>
                    <h3 className='font-bold text-lg'>Payment Method</h3>
                    <p className='text-[#90A3BF] text-xs font-bold'>Please enter your payment method</p>
                </div>
                <p className='text-[#90A3BF] text-xs font-bold'>Step 2 of 4</p>
            </div>
            {/* MAIN */}
            <div className='flex flex-col bg-[#F6F7F9] rounded-md p-3 justify-between'>
                {/* TITLE */}
                <div className='flex my-5 justify-between'>
                    <div className='flex gap-2'>
                        <img src={blueIcon} alt="" />
                        <h3 className='font-bold'>Credit Card</h3>
                    </div>
                    <img src={visa} alt="" />
                </div>
                {/* INPUTS */}
                <div className='flex flex-col gap-10 md:flex-row'>
                    <div className='flex flex-col gap-5 w-[100%]'>
                        <FormInput onChange={handleInputChange} name={"cardNumber"} color='[white]' label={"Card Number"} placeholder={"Card number"} />
                        <FormInput onChange={handleInputChange} name={"cardHolder"} color='[white]' label={"Card Holder"} placeholder={"Card holder"} />
                    </div>
                    <div className='flex flex-col gap-5 w-[100%]'>
                        <FormInput onChange={handleInputChange} name={"cardDate"} color='[white]' label={"Experation date"} type='date' />
                        <FormInput onChange={handleInputChange} name={"cardCvc"} color='[white]' label={"CVC"} placeholder={"CVC"} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Method