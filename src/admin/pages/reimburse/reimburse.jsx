import React from 'react';

const Reimburse = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Sayfa Başlığı */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Reimbursement Requests</h1>
        <p className="text-gray-500 text-sm">Manage and track your reimbursement claims</p>
      </div>

      {/* Başvuru Durumu Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Pending</h3>
          <p className="text-3xl font-bold text-gray-800">12</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Approved</h3>
          <p className="text-3xl font-bold text-gray-800">32</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Rejected</h3>
          <p className="text-3xl font-bold text-gray-800">5</p>
        </div>
      </div>

      {/* Başvuru Listesi */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Reimbursement Requests</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Employee</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-700">John Doe</td>
              <td className="px-4 py-2 text-sm text-gray-700">$250.00</td>
              <td className="px-4 py-2 text-sm text-green-500">Approved</td>
              <td className="px-4 py-2 text-sm text-gray-700">2025-01-10</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-700">Jane Smith</td>
              <td className="px-4 py-2 text-sm text-gray-700">$150.00</td>
              <td className="px-4 py-2 text-sm text-yellow-500">Pending</td>
              <td className="px-4 py-2 text-sm text-gray-700">2025-01-12</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-700">Michael Brown</td>
              <td className="px-4 py-2 text-sm text-gray-700">$400.00</td>
              <td className="px-4 py-2 text-sm text-red-500">Rejected</td>
              <td className="px-4 py-2 text-sm text-gray-700">2025-01-14</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Reimbursement Başvurusu İçin Buton */}
      <div className="text-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none">
          Submit New Request
        </button>
      </div>
    </div>
  );
};

export default Reimburse;
