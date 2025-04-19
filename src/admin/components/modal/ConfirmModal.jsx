import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;

    const isError = title === "Xəta";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
                <h2 className={`text-xl font-bold mb-4 ${isError ? 'text-red-600' : 'text-gray-800'}`}>{title}</h2>
                <p className="text-gray-600 mb-6">{message}</p>
                
                <div className="flex justify-end gap-4">
                    {!isError && (
                        <button 
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            Ləğv et
                        </button>
                    )}
                    <button 
                        onClick={onConfirm}
                        className={`px-4 py-2 ${isError 
                            ? 'bg-gray-500 hover:bg-gray-600' 
                            : 'bg-red-500 hover:bg-red-600'} 
                            text-white rounded-lg transition-colors duration-200`}
                    >
                        {isError ? 'Bağla' : 'Sil'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;