import React from 'react'
import { FiFilter, FiX } from "react-icons/fi";

const MenuBtn = ({isMenu, setIsMenu}) => {
    return (
        <button 
            onClick={() => setIsMenu(!isMenu)}
            className='fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg md:hidden hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center'
            aria-label="Toggle filters"
        >
            {isMenu ? (
                <FiX className="w-5 h-5" />
            ) : (
                <FiFilter className="w-5 h-5" />
            )}
        </button>
    )
}

export default MenuBtn