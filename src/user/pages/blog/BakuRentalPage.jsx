import React from 'react';
import { Link } from 'react-router-dom';
import bakuHero from '../../../assets/images/baku-hero.jpg';
import bakuMap from '../../../assets/images/baku-map.jpg';
import oldCity from '../../../assets/images/old-city.jpg';
import flameTowers from '../../../assets/images/flame-towers.jpg';


const BakuRentalPage = () => {
  return (
    <div className="bg-[#F2F5FF] text-[#1A202C]">
      {/* Hero Section */}
      <section className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] w-full overflow-hidden rounded-b-3xl shadow-xl">
        <img
          src={bakuHero}
          alt="Baku City"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Discover Baku with <span className="text-blue-400">MORENT</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-sm">
            Your journey begins in the heart of Azerbaijan 🇦🇿
          </p>
        </div>
      </section>


      {/* About Section */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold mb-3 text-[#3563E9]">Why Baku?</h2>
        <p className="text-[#64748B] leading-relaxed">
          MORENT operates exclusively in Baku to provide you with the best car rental experience in Azerbaijan's vibrant capital.
          From modern architecture to historical landmarks, explore every corner of Baku with comfort and style.
        </p>
      </section>

      {/* Map & Pickup Points */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div>
            <img src={bakuMap} alt="Baku Map" className="rounded-2xl shadow-lg w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Pickup & Drop-off Locations</h3>
            <ul className="space-y-3 text-[#1A202C]">
              <li>📍 Heydar Aliyev International Airport</li>
              <li>📍 Downtown Baku (Nizami Street)</li>
              <li>📍 Port Baku Mall</li>
              <li>📍 Flame Towers Area</li>
            </ul>
            <p className="mt-5 text-[#64748B]">
              Convenient pickup points across the city for a hassle-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-2xl font-semibold mb-6 text-[#3563E9]">Explore Baku’s Highlights</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={oldCity} alt="Old City" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h4 className="font-semibold text-lg">Icherisheher (Old City)</h4>
              <p className="text-[#64748B] mt-2">
                Wander through the ancient streets of Baku's historic core.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={flameTowers} alt="Flame Towers" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h4 className="font-semibold text-lg">Flame Towers</h4>
              <p className="text-[#64748B] mt-2">
                Witness the city’s iconic skyline and modern architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3563E9] text-white text-center py-10 rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-6 text-[#F2F5FF]">Book your perfect ride with MORENT and explore Baku with ease.</p>
        <Link
          to="/"
          className="bg-white text-[#3563E9] font-semibold py-3 px-6 rounded-xl hover:bg-[#F2F5FF] transition"
        >
          Browse Cars
        </Link>
      </section>
    </div>
  );
};

export default BakuRentalPage;
