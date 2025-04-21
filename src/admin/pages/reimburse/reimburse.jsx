import React, { useEffect, useState } from "react";
import { getRentHistory } from "../../../services/carServices";

const Reimburse = () => {
  const [rentHistory, setRentHistory] = useState([]);
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await getRentHistory();
      console.log(res.rentedCars);
      setRentHistory(res.rentedCars);
    })();
  }, []);

  useEffect(() => {
    let start = 0;
    const end = rentHistory.length;
    if (start === end) return;

    const easeOutQuad = (t) => t * (2 - t);

    const duration = 1000;
    const incrementTime = 10;
    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime; 
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(easeOutQuad(percentage) * end);

      setAnimatedCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [rentHistory.length]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
  };

  return (
    <div className="p-6 bg-gray-50 max-w-6xl mx-auto h-auto rounded-xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Reimbursement Requests</h1>
        <p className="text-gray-500 text-lg">Manage and track your reimbursement claims efficiently</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-white p-8 shadow-xl rounded-xl text-center w-72 border border-gray-300 hover:shadow-2xl transition-all">
          <h3 className="text-lg font-semibold text-gray-700">Total Pending</h3>
          <p className="text-3xl font-bold text-blue-600">{animatedCount}</p>
        </div>
      </div>

      <div className="bg-white p-8 shadow-xl rounded-xl border border-gray-300">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Reimbursement Requests</h3>
        <table className="w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="border-b bg-gray-200 text-gray-700 text-sm">
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Amount</th>
              <th className="px-6 py-4 text-left">Username</th>
              <th className="px-6 py-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {rentHistory.map((rent, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition text-base"
              >
                <td className="px-6 py-4 text-gray-700">{rent.carName}</td>
                <td className="px-6 py-4 text-gray-700">${rent.total}</td>
                <td className="px-6 py-4 text-gray-700">{rent.username}</td>
                <td className="px-6 py-4 text-gray-700">{formatDate(rent.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reimburse;
