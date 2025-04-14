import React, { useState } from 'react'
import { AiOutlineSafety } from "react-icons/ai";
import { rentCar } from '../../../../services/carServices';
import InfoBox from '../../../components/cart/InfoBox';

const Confirmation = ({formData, setFormData }) => {
    const [isMessage, setIsMessage] = useState(false)
    const [mes, setMes] = useState('')
    const confirmation =  'I agree with our terms and conditions and privacy policy.'
    const rentNow = async () => {
        const res = await rentCar( formData )
        console.log(res);
        if(res.status === "OK"){
            setIsMessage(true)
            setMes("Maşın uğurla kiralandı. Qarajdan maşını götürə bilərsiniz.")
        }else{
            setIsMessage(true)
            setMes(res.data.message)
        }
    }
    const handleChecked = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
        
    }
    return (
        <div className='bg-white flex flex-col gap-5 p-5 rounded-md'>
            <InfoBox title={"Bildirim🔔"} message={mes} isOpen={isMessage} setIsOpen={setIsMessage}/>
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
                <label className='flex gap-2 p-3 rounded-md bg-[#F6F7F9]'>
                    <input
                    onChange={handleChecked} 
                    name='confirmation'
                    type="checkbox" />
                    <p className='font-semibold'>{confirmation}</p>
                </label>
            </div>
            {/* BUTTON */}
            <div>
                <button onClick={rentNow} className='bg-primary text-white py-1 px-2 rounded-md'>Rent</button>
            </div>
            {/* INFO SECURITY */}
            <div className='flex flex-col gap-3'>
                <AiOutlineSafety className='text-4xl text-primary' />
                <p>All your data are safe</p>
                <p>We are using the most advanced security to provide you the best experience ever.</p>
            </div>
        </div>
    )
}

export default Confirmation