import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import BasicBtn from '../../../components/button/BasicBtn';
import { getCarDetails } from '../../../../services/carServices';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const [carData, setCarData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedImage, setSelectedImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            setLoading(true);
            const res = await getCarDetails(id);
            setCarData(res.car);
            setLoading(false);
        })();
        window.scrollTo(0, 0);
    }, [id]);

    // Görsele tıklama işlemi
    const handleImageClick = (imgSrc) => {
        setSelectedImage(imgSrc);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; 
    };

    
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    if (loading) {
        return (
            <div className='grid grid-rows-1 gap-5 md:grid-cols-2 w-[90%] max-w-[1120px] m-auto mt-10 animate-pulse'>
                <div className='grid gap-10 grid-rows-3'>
                    <div className='row-span-3 flex justify-center items-center border'>
                        <div className='rounded-md w-[300px] h-[250px] bg-gray-200'></div>
                    </div>
                </div>
                <div className='bg-white flex flex-col justify-between gap-5 p-5'>
                    <div className='flex justify-between'>
                        <div className='h-6 w-40 bg-gray-200 rounded'></div>
                    </div>
                    <div className='h-4 w-full bg-gray-200 rounded'></div>
                    <div className='flex gap-10'>
                        <div className='space-y-2'>
                            <div className='h-4 w-32 bg-gray-200 rounded'></div>
                            <div className='h-4 w-32 bg-gray-200 rounded'></div>
                        </div>
                        <div className='space-y-2'>
                            <div className='h-4 w-32 bg-gray-200 rounded'></div>
                            <div className='h-4 w-32 bg-gray-200 rounded'></div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='h-6 w-32 bg-gray-200 rounded'></div>
                        <div className='h-10 w-24 bg-gray-200 rounded'></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='w-[90%] max-w-[1120px] m-auto mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Image Section */}
                <div className='flex justify-center items-center'>
                    <img 
                        className='rounded-md w-full h-[350px] object-cover cursor-pointer' 
                        src={carData.img} 
                        alt={carData.name} 
                        onClick={() => handleImageClick(carData.img)} // Görsele tıklandığında modal açılacak
                    />
                </div>

                {/* Details Section */}
                <div className='bg-white flex flex-col justify-between gap-6 p-6'>
                    {/* Title and Likes */}
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-3xl text-primary'>{carData.name}</h1>
                    </div>

                    {/* Description */}
                    <p className='text-accent text-lg'>{carData.desc}</p>

                    {/* Car Details */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5'>
                        <div>
                            <p className='text-accent text-sm'>Type Car: <span className='font-semibold text-[#596780]'>{carData.type}</span></p>
                            <p className='text-accent text-sm'>Drive Type: <span className='font-semibold text-[#596780]'>{carData.driveType}</span></p>
                        </div>
                        <div>
                            <p className='text-accent text-sm'>Capacity: <span className='font-semibold text-[#596780]'>{carData.capacity} Person</span></p>
                            <p className='text-accent text-sm'>Fuel: <span className='font-semibold text-[#596780]'>{carData.fuelCapacity}L</span></p>
                        </div>
                    </div>

                    {/* Price and Button */}
                    <div className='flex justify-between items-center mt-5'>
                        <p className='font-bold text-[30px] text-primary'>${carData.price}.00/ <span className='text-[#596780] text-base'>days</span></p>
                        <BasicBtn path={`/payment/${carData._id}`} />
                    </div>
                </div>
            </div>

            {/* Modal for Image */}
            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50' onClick={closeModal}>
                    <div className='relative'>
                        <img className='w-[500px] h-[400px] object-contain rounded-md' src={selectedImage} alt="Selected" />
                        <button 
                            onClick={closeModal} 
                            className='absolute top-0 right-0 text-white text-2xl p-3 bg-black bg-opacity-50 rounded-full'
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CarDetails;
