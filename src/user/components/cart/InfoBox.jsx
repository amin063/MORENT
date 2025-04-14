
const InfoBox = ({ title, message, btnTxt = 'Ok', isOpen, setIsOpen }) => {
    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white rounded-3xl shadow-2xl p-8 w-[90%] md:w-[40%] max-w-lg text-center flex flex-col gap-6 animate-scaleIn">

                    <h1 className="text-primary font-extrabold text-2xl md:text-3xl">{title}</h1>

                    <p className="text-gray-600 text-base leading-relaxed">{message}</p>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="bg-primary text-white rounded-full py-3 px-6 hover:bg-primary-dark active:scale-95 transition-all duration-300 shadow-md"
                    >
                        {btnTxt}
                    </button>
                </div>
            </div>
        )
    );
};

export default InfoBox;
