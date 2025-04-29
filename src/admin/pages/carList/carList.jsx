import React, { useState } from "react";
import { addCar } from "../../../services/carServices";
import axios from "axios";

const AdminForm = ({ onCarAdded }) => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const vehicleTypes = ["SUV", "Sedan", "Hatch", "Coupe", "Van", "Wagon"];
  const capacities = ["2", "4", "6", "8"];

  const inputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        uploadData
      );
      setFormData((prev) => ({ ...prev, img: res.data.secure_url }));
    } catch (err) {
      console.error("Image upload failed", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCar(formData);
      setMessage("Vehicle successfully registered.");
      if (onCarAdded) onCarAdded();
    } catch (err) {
      console.log("Error while adding car:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-10 border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Admin Panel – Register Vehicle
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Vehicle Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Name
            </label>
            <input
              type="text"
              name="name"
              onChange={inputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="desc"
              onChange={inputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Vehicle Type (select) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Type
            </label>
            <select
              name="type"
              onChange={inputChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            >
              <option value="">Select a type</option>
              {vehicleTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Capacity (select) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacity
            </label>
            <select
              name="capacity"
              onChange={inputChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            >
              <option value="">Select capacity</option>
              {capacities.map((cap, idx) => (
                <option key={idx} value={cap}>
                  {cap} Persons
                </option>
              ))}
            </select>
          </div>

          {/* Drive Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Drive Type
            </label>
            <input
              type="text"
              name="driveType"
              onChange={inputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Fuel Capacity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fuel Capacity (Liters)
            </label>
            <input
              type="number"
              name="fuelCapacity"
              onChange={inputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Daily Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Daily Price ($)
            </label>
            <input
              type="number"
              name="price"
              onChange={inputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Vehicle Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Image
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                required
              />
              <div className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-600 flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-all duration-300">
                <span className="text-sm">
                  {fileName ? fileName : "Choose a file"}
                </span>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  Browse
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold tracking-wide"
          >
            Submit
          </button>

          {/* Message */}
          {message && (
            <p className="mt-4 text-green-600 text-center font-medium">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
