import React from "react";

const Top5CarRental = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-[50%]">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Top 5 Car Rental</h2>
      {/* Grafik Placeholder */}
      <div className="w-full h-40 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
        <span className="text-gray-400">Graph Placeholder</span>
      </div>
      {/* Araç Türleri Listesi */}
      <ul className="space-y-2">
        <li className="flex justify-between text-sm text-gray-600">
          <span>Sport Car</span>
          <span className="font-bold">17,439</span>
        </li>
        <li className="flex justify-between text-sm text-gray-600">
          <span>SUV</span>
          <span className="font-bold">9,478</span>
        </li>
        <li className="flex justify-between text-sm text-gray-600">
          <span>Coupe</span>
          <span className="font-bold">18,197</span>
        </li>
        <li className="flex justify-between text-sm text-gray-600">
          <span>Hatchback</span>
          <span className="font-bold">12,510</span>
        </li>
        <li className="flex justify-between text-sm text-gray-600">
          <span>MPV</span>
          <span className="font-bold">14,406</span>
        </li>
      </ul>
    </div>
  );
};

export default Top5CarRental;
