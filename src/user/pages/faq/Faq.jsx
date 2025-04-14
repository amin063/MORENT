import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "How does car reservation work?",
        answer: "On our platform, after selecting a car, simply choose the dates and make a reservation. Once confirmed, the car will be handed over to you."
    },
    {
        question: "How can I extend the rental period?",
        answer: "In your profile, under 'My Reservations', select the current rental and change the dates. Once the request is confirmed by the system, the period will be extended."
    },
    {
        question: "What should I do in case of an accident?",
        answer: "First, take necessary safety precautions and then contact our support team. We offer 24/7 assistance to help you."
    },
    {
        question: "What documents are required to pick up the car?",
        answer: "To pick up the car, you will need your ID, driver's license, and credit card. Additionally, you must provide the car's insurance document."
    },
    {
        question: "How does insurance work?",
        answer: "During the rental period, car insurance is automatically provided by the system. You can find detailed information about the insurance terms in your profile."
    },
    {
        question: "How can I cancel the reservation?",
        answer: "In your profile, under 'My Reservations', select the reservation you want to cancel and click the 'Cancel' button."
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-blue-200 rounded-2xl shadow-md overflow-hidden transition-all">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-5 text-left bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 rounded-2xl focus:outline-none transition-all"
                        >
                            <span className="font-semibold text-gray-800">{faq.question}</span>
                            <span className={`transform text-xl text-blue-600 transition-transform duration-300 ${activeIndex === index ? "rotate-45" : "rotate-0"}`}>
                                ➕
                            </span>
                        </button>

                        <div
                            className={`px-5 text-gray-600 transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0 py-0"
                                } overflow-hidden`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-10 text-center'>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all"
                >
                    View Cars
                </Link>
            </div>
        </div>
    );
};

export default Faq;
