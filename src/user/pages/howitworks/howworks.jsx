import React from 'react';
import { Car, CalendarCheck2, CreditCard, Smile } from 'lucide-react';

const steps = [
  {
    title: "1. Choose a Car",
    description: "Find your desired car using categories and filters. Compare prices, models, and other features.",
    icon: <Car className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "2. Make a Reservation",
    description: "Select the date and time, then complete your reservation in just a few clicks. Quick and easy!",
    icon: <CalendarCheck2 className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "3. Make a Payment",
    description: "Pay securely using our trusted payment system. Credit cards, debit cards, and other options available.",
    icon: <CreditCard className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "4. Drive & Enjoy",
    description: "Pick up the car and hit the road. Enjoy your ride!",
    icon: <Smile className="w-8 h-8 text-blue-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">How It Works</h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Rent your desired car in 4 simple steps. No registration required!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
