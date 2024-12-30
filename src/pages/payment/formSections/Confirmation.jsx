import React from 'react'
import CheckInput from '../inputs/CheckInput'
import BasicBtn from '../../../components/button/BasicBtn'
import { AiOutlineSafety } from "react-icons/ai";

const Confirmation = () => {
    const confirmations = ['I agree with sending an Marketing and newsletter emails. No spam, promissed!', 'I agree with our terms and conditions and privacy policy.']
    return (
        <div className='bg-white flex flex-col gap-5 p-5 rounded-md'>
            {/* HEADER */}
            <div className='flex justify-between items-center my-5'>
                <div>
                    <h3 className='font-bold text-lg'>Confirmation</h3>
                    <p className='text-[#90A3BF] text-xs font-bold'>Just few clicks and your rental is ready!</p>
                </div>
                <p className='text-[#90A3BF] text-xs font-bold'>Step 3 of 3</p>
            </div>
            {/* CONFIRMATION */}
            <div className='flex flex-col gap-5'>
                {
                    confirmations.map((content, index) => <CheckInput key={index} content={content} />)
                }
            </div>
            {/* BUTTON */}
            <div>
                <BasicBtn />
            </div>
            {/* INFO SECURITY */}
            <div className='flex flex-col gap-3'>
                <AiOutlineSafety className='text-4xl text-primary'/>
                <p>All your data are safe</p>
                <p>We are using the most advanced security to provide you the best experience ever.</p>
            </div>
        </div>
    )
}

export default Confirmation