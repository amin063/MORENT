import React, { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, carData, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    capacity: "",
    desc: "",
  });

  useEffect(() => {
    if (carData) {
      setFormData({
        name: carData.name || "",
        price: carData.price || "",
        capacity: carData.capacity || "",
        desc: carData.desc || "",
      });
    }
  }, [carData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...carData, ...formData }); // carData'daki _id'yi koruyoruz
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-8 w-96 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Edit Car</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="desc"
            placeholder="Description"
            value={formData.desc}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="3"
          />
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
