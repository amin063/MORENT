import React from 'react'
import { Link } from 'react-router-dom'

function BasicBtn({path, title='Rent Now'}) {
    return (
        <Link to={path} className='bg-primary text-white py-1 px-2 rounded-md'>{title}</Link>
    )
}

export default BasicBtn