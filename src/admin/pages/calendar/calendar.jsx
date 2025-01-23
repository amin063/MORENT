import React, { useState, useEffect } from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [time, setTime] = useState("");

  // Saat güncelleme
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Aylar listesi
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Seçilen ayın günlerini hesaplama
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

  // İlk gün hangi haftaya denk geliyor
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

  // Takvim günlerini doldurmak için
  const calendarDays = Array.from({ length: firstDayOfMonth }).fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="p-6">
      {/* Üst Çubuk */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Calendar</h1>
        <div className="text-sm font-medium text-gray-500">{time}</div>
      </div>

      {/* Ay ve Yıl Seçimi */}
      <div className="flex items-center justify-between mb-4">
        {/* Ay Seçici */}
        <select
          className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>

        {/* Yıl Seçici */}
        <input
          type="number"
          className="border rounded px-3 py-2 w-24 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        />
      </div>

      {/* Takvim */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Gün Başlıkları */}
        <div className="grid grid-cols-7 gap-4 text-center font-medium text-gray-500 mb-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="uppercase">
              {day}
            </div>
          ))}
        </div>

        {/* Günler */}
        <div className="grid grid-cols-7 gap-4 text-center">
          {calendarDays.map((date, index) =>
            date ? (
              <div
                key={index}
                className="h-16 flex items-center justify-center border rounded-lg hover:bg-blue-100 cursor-pointer text-gray-700"
              >
                {date}
              </div>
            ) : (
              <div key={index} className="h-16"></div> // Boş hücreler
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
