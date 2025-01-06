import React from 'react'
import FormInput from '../../../components/inputs/FormInput'

const Biling = () => {
    return (
        <div className='bg-white p-5 rounded-md'>
            {/* HEADER */}
            <div className='flex justify-between items-center my-5'>
                <div>
                    <h3 className='font-bold text-lg'>Billing Info</h3>
                    <p className='text-[#90A3BF] text-xs font-bold'>Please enter your billing info</p>
                </div>
                <p className='text-[#90A3BF] text-xs font-bold'>Step 1 of 4</p>
            </div>
            {/* INPUTS */}
            <div className='flex flex-col gap-10 justify-between md:flex-row'>
                <div className='flex flex-col gap-5 w-[100%]'>
                    <FormInput label={"Name"} placeholder={"Your name"} />
                    <FormInput label={"Address"} placeholder={"Address"} />
                </div>
                <div className='flex flex-col gap-5 w-[100%]'>
                    <FormInput label={"Phone Number"} placeholder={"Phone number"} />
                    <FormInput label={"Town/City"} placeholder={"Town city"} />
                </div>
            </div>
        </div>
    )
}

export default Biling

