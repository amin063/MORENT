import React from 'react'
import car from '../../../assets/images/car2.png'
const Reviews = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='grid grid-rows-3'>
                <div className='row-span-2'><img src={car} /></div>
                <div className='row-span-1'><img src={car} /></div>
            </div>
            <div>
                asdfsafd
            </div>
        </div>
    )
}

export default Reviews