import React from "react";

const eventCars = [
  {
    id: 1,
    name: "Porsche 911 Carrera",
    img: "https://www.wsupercars.com/wallpapers-regular/Porsche/2025-Porsche-911-Carrera-GTS-002-1080.jpg",
    desc: "High performance and elegant design – a prestigious driving experience.",
  },
  {
    id: 2,
    name: "Mercedes-Benz AMG GT",
    img: "https://www.wsupercars.com/wallpapers-regular/Mercedes-Benz/2017-Mercedes-Benz-AMG-GT-C-Roadster-005-1080.jpg",
    desc: "Create an impression on the road with a perfect harmony of luxury and power.",
  },
  {
    id: 3,
    name: "Tesla Model S Plaid",
    img: "https://www.wsupercars.com/wallpapers-wide/Tesla/2022-Tesla-Model-X-Plaid-001-1440w.jpg",
    desc: "The technology of the future with zero emissions.",
  },
];

const Event = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Event Cars</h1>
        <p className="mt-4 max-w-xl mx-auto text-lg">
          Simply selected models. Choices that combine luxury, performance and
          prestige.
        </p>
      </div>

      {/* Featured Cars */}
      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {eventCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-all"
          >
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {car.name}
              </h2>
              <p className="text-gray-500 mt-2">{car.desc}</p>
              <button className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm transition">
                Coming Soon...
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Why Featured Section */}
      <div className="max-w-5xl mx-auto px-4 mt-24 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Get ready for an unforgettable driving experience!
        </h3>
        <p className="text-gray-600 text-lg">
          For just a few days, 3 different supercars – the pinnacle of luxury
          and performance – will be at your disposal in our city! Take part in
          this exclusive event, rent the car of your dreams and experience real
          adrenaline behind the wheel!
        </p>
      </div>
    </div>
  );
};

export default Event;
