import React from 'react'
import { FaFilter } from "react-icons/fa6";
const MenuBtn = ({isMenu, setIsMenu}) => {
    const toggleMenu  = ()=>{
        setIsMenu(!isMenu)
    }
    return (
        <div 
        onClick={toggleMenu}
        className='fixed bg-primary text-white right-5 bottom-5 p-5 rounded-full md:hidden'>
            <FaFilter />
        </div>
    )
}

export default MenuBtn