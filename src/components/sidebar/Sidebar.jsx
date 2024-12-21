import React from 'react'

const Sidebar = () => {
    // BU SEHIFEDE KI KODLAR SADECE FRONT UCUN YAZILIB VE DATA HEC YERDEN GETIRILMIR. API OLDUQDAN SONRA KOD STRUKTURU DEYISECEK
    const fakeList = ["Sport  (10)", "SUV  (12)", "MPV  (16)", "Sedan  (20)", "Coupe  (14)", "Hatchback  (14)"]
    const fakeList1 = ["2 Person  (10)", "4 Person  (14)", "6 Person  (12)", "8 or More  (16)"]
    return (
        <div className='h-[100%] flex flex-col gap-10 px-5 absolute left-0 bg-white md:static md:col-span-2'>
            {/* TYPE */}
            <div className='flex flex-col gap-5'>
                <p className='text-accent'>TYPE</p>
                {
                    fakeList.map(item =>
                    (
                        <label className='flex gap-1 text-[#596780]' htmlFor="">
                            <input type="checkbox" />
                            {item}
                        </label>
                    )
                    )
                }
            </div>

            {/* CAPACITY */}
            <div className='flex flex-col gap-5'>
                <p className='text-accent'>CAPACITY</p>
                {
                    fakeList.map(item =>
                    (
                        <label className='flex gap-1 text-[#596780]' htmlFor="">
                            <input type="checkbox" />
                            {item}
                        </label>
                    )
                    )
                }
            </div>
            {/* PRICE */}
            <div>
                <p className='text-accent'>PRICE</p>
                <label htmlFor="">
                    <input
                        className='bg-blue-[#3563E9]'
                        type="range" />
                    <p className='text-[#596780] font-semibold'>Max. $100.00</p>

                </label>

            </div>

        </div>
    )
}

export default Sidebar