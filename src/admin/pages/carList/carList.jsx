import React, { useState } from "react";
import { addCar } from "../../../services/carServices";
import axios from "axios";

const AdminForm = ({ onCarAdded }) => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const inputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      setFormData((prev) => ({ ...prev, img: res.data.secure_url }));
    } catch (err) {
      console.error("Image upload failed", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addCar(formData);
      setMessage("Car added successfully!");
    } catch (err) {
      console.log(err + " catchdadi");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Admin Panel - Add New Car
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Car Name
            </label>
            <input
              type="text"
              name="name"
              onChange={inputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Car Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Explanation
            </label>
            <textarea
              name="desc"
              onChange={inputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Car Type
            </label>
            <input
              type="text"
              name="type"
              onChange={inputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              onChange={inputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Traction Type
            </label>
            <input
              type="text"
              name="driveType"
              onChange={inputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fuel Capacity (Liters)
            </label>
            <input
              type="number"
              name="fuelCapacity"
              onChange={inputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Daily Price ($)
            </label>
            <input
              type="number"
              name="price"
              onChange={inputChange}
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Add Car
          </button>
          {message && (
            <p className="mt-4 text-green-600 text-center font-semibold">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
