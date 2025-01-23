import React from 'react'

const FormInput = ({ label, placeholder, color = '[#F6F7F9]', onChange, name }) => {
  return (
    <label className='flex flex-col gap-3 font-bold'>
      {label}
      <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-${color} px-[32px] py-[16px] rounded-md placeholder:text-[14px] placeholder:text-[#90A3BF]`}
        type="text" />
    </label>
  )
}

export default FormInput