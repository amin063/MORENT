import React from 'react'

const CheckInput = ({content}) => {
    return (
        <label className='flex gap-2 p-3 rounded-md bg-[#F6F7F9]'>
            <input type="checkbox" />
              <p className='font-semibold'>{content}</p>
        </label>
    )
}

export default CheckInput