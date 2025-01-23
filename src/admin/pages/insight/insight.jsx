import React, { useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

// Chart.js için gerekli modülleri kaydediyoruz
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Doughnut grafikleri için gereklidir
  PointElement, // Line grafikleri için gereklidir
  LineElement // Line grafikleri için gereklidir
);

const Insight = () => {
  // Line chart data
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [4000, 4500, 5000, 4800, 5200, 6000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Bar chart data
  const barChartData = {
    labels: ["North", "South", "East", "West"],
    datasets: [
      {
        label: "Sales",
        data: [2500, 3000, 2000, 3500],
        backgroundColor: "rgba(255, 159, 64, 1)",
      },
    ],
  };

  // Doughnut chart data
  const doughnutChartData = {
    labels: ["Active Users", "Inactive Users", "Guests"],
    datasets: [
      {
        data: [300, 200, 100],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  // State for selected year
  const [selectedYear, setSelectedYear] = useState("2025");

  return (
    <>

{/* <div className="p-4 space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Insight Dashboard</h1>
        <p className="text-gray-500 text-sm">Detailed insights and statistics</p>
      </div>

      <div className="flex justify-center mb-6">
        <select
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-lg rounded-lg text-center">
          <h3 className="text-sm font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-lg font-bold text-gray-900">$40,000</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg text-center">
          <h3 className="text-sm font-semibold text-gray-700">New Users</h3>
          <p className="text-lg font-bold text-gray-900">1,500</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg text-center">
          <h3 className="text-sm font-semibold text-gray-700">Total Sales</h3>
          <p className="text-lg font-bold text-gray-900">2,400</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">Monthly Revenue</h3>
          <Line
            data={lineChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    maxRotation: 0, // X axis üzerinde kaydırma yapmamayı sağlarız
                  },
                },
                y: {
                  beginAtZero: true, // Y eksenini sıfırdan başlatırız
                },
              },
            }}
            height={120} // Daha küçük boyut
          />
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">Sales by Region</h3>
          <Bar
            data={barChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    maxRotation: 0,
                  },
                },
                y: {
                  beginAtZero: true,
                },
              },
            }}
            height={180} // Orta boyut
          />
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">User Status</h3>
          <Doughnut
            data={doughnutChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      return tooltipItem.raw + " users";
                    },
                  },
                },
              },
            }}
            height={180} // Orta boyut
          />
        </div>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-sm font-semibold text-gray-800 mb-4">General Information</h3>
        <p className="text-gray-600 text-sm">This section can include general insights about the business. For example, market trends, recent news, or upcoming plans.</p>
      </div>
    </div> */}
    
    <div className="p-[220px] space-y-6">
      <div className="flex justify-center items-center">
        <div className="bg-blue-600 p-8 shadow-lg rounded-lg text-center">
          <h2 className="text-4xl font-bold text-white">
            Bu Sayfa Tadilatta!
          </h2>
        </div>
      </div>
    </div>

    </>
    
  );
};

export default Insight;
