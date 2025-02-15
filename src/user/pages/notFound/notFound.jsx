import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-blue-900">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="text-4xl font-semibold mt-4">Oops! Sayfa Bulunamadı</h2>
      <p className="text-xl mt-2 text-gray-600">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <a
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Ana Sayfaya Dön
      </a>
    </div>
  );
};

export default NotFoundPage;