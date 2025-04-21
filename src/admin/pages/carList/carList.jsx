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
          {[
            { label: "Vehicle Name", name: "name", type: "text" },
            { label: "Description", name: "desc", type: "textarea" },
            { label: "Vehicle Type", name: "type", type: "text" },
            { label: "Capacity", name: "capacity", type: "number" },
            { label: "Drive Type", name: "driveType", type: "text" },
            { label: "Fuel Capacity (Liters)", name: "fuelCapacity", type: "number" },
            { label: "Daily Price ($)", name: "price", type: "number" },
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  onChange={inputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  onChange={inputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold tracking-wide"
          >
            Submit
          </button>

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
