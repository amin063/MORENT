import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateAdmin } from "../../../services/adminServices";

const Settings = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    if (!data.username || !data.password) {
      setErrorMessage("Both username and password are required.");
      return;
    }
  
    try {
      const res = await updateAdmin(data);
      console.log(res);
      if (res.status === 200) {
        setMessage("Changes saved successfully!");
        setErrorMessage("");
        setData({ username: "", password: "" });
  
        setTimeout(() => {
          navigate("/admin-login");
        }, 1500); // 1.5 saniyə gözləyir ki, mesajı istifadəçi görə bilsin
      } else {
        setMessage("");
        setErrorMessage("Failed to update admin details. Please try again.");
      }
    } catch (error) {
      setMessage("");
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="h-[100%] bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Account Settings
        </h1>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleInput}
              className="mt-1 p-4 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
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
              value={data.password}
              onChange={handleInput}
              className="mt-1 p-4 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Save Changes
          </button>

          {message && (
            <p className="mt-4 text-center text-green-600 font-semibold">
              {message}
            </p>
          )}

          {errorMessage && (
            <p className="mt-4 text-center text-red-600 font-semibold">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
