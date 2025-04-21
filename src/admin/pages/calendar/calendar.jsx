import React, { useState, useEffect } from "react";
import { getRentHistory } from "../../../services/carServices";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [time, setTime] = useState("");
  const [rentedCars, setRentedCars] = useState([]);
  const [selectedDateDetails, setSelectedDateDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchRentedDays = async () => {
      const res = await getRentHistory();
      if (res && res.rentedCars) {
        setRentedCars(res.rentedCars);
      }
    };
    fetchRentedDays();
  }, []);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

  const calendarDays = Array.from({ length: firstDayOfMonth }).fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  const getFormattedDate = (year, month, day) => {
    return new Date(year, month, day).toISOString().split("T")[0];
  };

  const getRentedCarCount = (day) => {
    const date = getFormattedDate(selectedYear, selectedMonth, day);
    return rentedCars.filter(car => car.date.startsWith(date)).length;
  };

  const openModalWithDetails = (day) => {
    const date = getFormattedDate(selectedYear, selectedMonth, day);
    const details = rentedCars.filter(car => car.date.startsWith(date));
    setSelectedDateDetails(details);
    setModalOpen(true);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-neutral-800">Rental Calendar</h1>
        <div className="text-sm font-medium text-neutral-500">{time}</div>
      </div>

      <div className="flex items-center justify-between gap-4 mb-6">
        <select
          className="border border-neutral-300 rounded-lg px-4 py-2 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
        <input
          type="number"
          className="border border-neutral-300 rounded-lg px-4 py-2 w-28 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-7 gap-4 text-center font-semibold text-neutral-600 mb-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="uppercase text-sm tracking-wide">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-3 text-center">
          {calendarDays.map((date, index) =>
            date ? (
              <div
                key={index}
                className={`h-20 flex flex-col items-center justify-center border rounded-xl hover:ring-2 hover:ring-blue-400 transition cursor-pointer relative group ${getRentedCarCount(date) > 0 ? "bg-blue-50 border-blue-300" : "bg-neutral-50"}`}
                onClick={() => openModalWithDetails(date)}
              >
                <span className="text-lg font-medium text-neutral-700">{date}</span>
                {getRentedCarCount(date) > 0 && (
                  <span className="absolute top-1 right-1 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 shadow-md">
                    {getRentedCarCount(date)}
                  </span>
                )}
              </div>
            ) : (
              <div key={index} className="h-20"></div>
            )
          )}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-neutral-800">Rental Details</h2>
              <button
                className="text-neutral-500 hover:text-neutral-800 text-xl"
                onClick={() => setModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <ul className="space-y-4">
              {selectedDateDetails.map((car, idx) => (
                <li key={idx} className="border-b pb-3">
                  <div className="font-semibold text-blue-700 text-lg">{car.carName}</div>
                  <div className="text-sm text-neutral-600">User: {car.username}</div>
                  <div className="text-sm text-neutral-600">Plate: {car.number}</div>
                  <div className="text-sm text-neutral-500">Date: {new Date(car.date).toLocaleString()}</div>
                  <div className="text-sm text-neutral-500">Total: ${car.total}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
