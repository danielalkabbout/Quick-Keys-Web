import React, { useState } from "react";
import RecentCard from "../home/recent/RecentCard" // Assuming RecentCard is a separate component

const Listing = () => {
  // State to store the added services
  const [services, setServices] = useState([]);

  // State to store form data
  const [formData, setFormData] = useState({
    cover: "",
    name: "",
    location: "",
    price: "",
    type: "",
    description: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the selected image file
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        cover: imageUrl,
      }));
    }
  };

  // Handle form submission to add service
  const handleSubmit = (e) => {
    e.preventDefault();
    setServices((prevServices) => [...prevServices, formData]);
    // Reset form data
    setFormData({
      cover: "",
      name: "",
      location: "",
      price: "",
      type: "",
      description: "",
    });
  };

  return (
    <div className="App">
      {/* Form to add new services */}
      <h1>Add New Service</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image:</label>
          <input type="file" name="cover" accept="image/*" onChange={handleImageChange} />
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Add Service</button>
      </form>

      {/* Display the added services using RecentCard component */}
      <h2>Recent Services</h2>
      <RecentCard services={services} />
    </div>
  );
};

export default Listing;
