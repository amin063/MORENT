import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "Maşın rezervasiyası necə işləyir?",
        answer: "Bizim platformada maşın seçdikdən sonra, sadəcə olaraq tarix seçib rezervasiya edə bilərsiniz. Təsdiqləndikdən sonra maşın sizə təhvil veriləcək."
    },
    {
        question: "İcarə müddətini necə uzada bilərəm?",
        answer: "Profilinizdə 'Rezervasiyalarım' bölməsindən mövcud icarəni seçib, tarix dəyişdirə bilərsiniz. Tələb sistem tərəfindən təsdiqləndikdən sonra müddət uzadılır."
    },
    {
        question: "Qəza zamanı nə etməliyəm?",
        answer: "Əvvəlcə təhlükəsizlik tədbirləri görün və sonra bizim dəstək komandası ilə əlaqə saxlayın. Biz sizə kömək etmək üçün 24/7 xidmət göstəririk."
    },
    {
        question: "Maşın təhvil verilməsi üçün hansı sənədlər lazımdır?",
        answer: "Maşın təhvil verilməsi üçün şəxsiyyət vəsiqəsi, sürücülük vəsiqəsi və kredit kartı tələb olunur. Həmçinin, maşının sığorta sənədini də təqdim etməlisiniz."
    },
    {
        question: "Sığorta necə işləyir?",
        answer: "İcarə zamanı maşın sığortası avtomatik olaraq sistem tərəfindən təmin edilir. Sığorta şərtləri ilə bağlı ətraflı məlumatı profilinizdə tapa bilərsiniz."
    },
    {
        question: "Müqaviləni necə ləğv edə bilərəm?",
        answer: "Profilinizdə 'Rezervasiyalarım' bölməsindən ləğv etmək istədiyiniz rezervasiyanı seçib, 'Ləğv et' düyməsini basmalısınız."
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Tez-Tez Verilən Suallar</h2>
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
                    Maşınlara bax
                </Link>
            </div>
        </div>
    );
};

export default Faq;
