
const InfoBox = ({ title, message, btnTxt = 'Ok', isOpen, setIsOpen }) => {
    return (
        isOpen &&
        <div className='bg-white border border-primary rounded-lg p-6 fixed w-[50%] h-[50%] shadow-2xl flex justify-between flex-col'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-primary font-bold text-3xl'>{title}</h1>
                <p className='text-gray-600'>{message}</p>
            </div>
            <button
                onClick={() => setIsOpen(false)}
                className='bg-primary text-white rounded-lg p-3 hover:bg-primary-dark transition duration-300'>{btnTxt}</button>
        </div>
    )
}

export default InfoBox