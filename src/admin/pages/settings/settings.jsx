import React, { useState } from "react";
import { updateAdmin } from "../../../services/adminServices";

const Settings = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const handleInput = (e) => {
    setData((prev) => setData({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleUpdate = async (e) => {
    e.preventDefault()
    const res = await updateAdmin(data);
    console.log(res);
  };

  return (
    <div className="p-6 bg-gray-100 mt-3 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Settings
        </h1>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name='username'
              onChange={handleInput}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Save Changes
          </button>

          {message && (
            <p className="mt-4 text-center text-green-500 font-semibold">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
