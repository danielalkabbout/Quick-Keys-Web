import React, { useState } from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";
import RecentCard from "../home/recent/RecentCard"; // Assuming RecentCard is in this path
import { list } from "../data/Data"; // Import your actual list here
import "../services/Services.css"

const Services = () => {
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [categoryType, setCategory] = useState("");
  const [filteredList, setFilteredList] = useState(list); // Initialize with the list data

  const handleFilter = () => {
    let filtered = list; // Start with the full list

    // Filter based on City/Street
    if (city) {
      filtered = filtered.filter((service) =>
        service.location.toLowerCase().includes(city.toLowerCase()) // Partial match for city
      );
    }

    // Filter based on Property Type
    if (propertyType) {
      filtered = filtered.filter((service) =>
        service.type.toLowerCase().includes(propertyType.toLowerCase()) // Case-insensitive match for property type
      );
    }

    if (categoryType) {
      filtered = filtered.filter((service) =>
        service.category.toLowerCase().includes(categoryType.toLowerCase()) // Case-insensitive match for property type
      );
    }

    // Filter based on Price Range
    if (priceRange) {
      const range = priceRange.split("-").map((val) => parseInt(val.trim().replace("$", "").replace(",", "")));
      if (range.length === 2 && !isNaN(range[0]) && !isNaN(range[1])) {
        filtered = filtered.filter(
          (service) => {
            // Convert price to a number, remove the "$" and "," if present
            const price = parseInt(service.price.replace("$", "").replace(",", ""));
            return price >= range[0] && price <= range[1];
          }
        );
      } else {
        alert("Invalid price range format. Use min-max (e.g., $600 - $500,000.)");
        return;
      }
    }

    // Update the state with the filtered data
    setFilteredList(filtered);
  };

  // Function to clear filters
  const clearFilters = () => {
    setCity(""); // Clear the city filter
    setPropertyType(""); // Clear the property type filter
    setPriceRange(""); // Clear the price range filter
    setCategory(""); // Clear the category filter
    setFilteredList(list); // Reset the filtered list to show all services
  };

  return (
    <>
      <section className="services mb">
        <Back name="Services" title="Services - All Services" cover={img} />
        <div className="featured container">
          <FeaturedCard />
        </div>
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <div className="box">
            <span>City/Street</span>
            <input
              type="text"
              placeholder="Location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="box">
            <span>Property Type</span>
            <input
              type="text"
              placeholder="Property Type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            />
          </div>
          <div className="box">
            <span>Price Range</span>
            <input
              type="text"
              placeholder=" $600 - $500,000 "
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>
          <div className="box">
            <span>Category</span>
            <input
              type="text"
              placeholder="Category"
              value={categoryType}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="box">
            <h4>Filter</h4>
          </div>
          <button className="btn1" onClick={handleFilter}>
            <i className="fa fa-search"></i>
          </button>

          {/* Clear Filters Button */}
          <button className="btn2" onClick={clearFilters} type="button">
            Clear Filters
          </button>
        </form>

        {/* Render filtered data using RecentCard */}
        <div className="recent-cards">
          {filteredList.length > 0 ? (
            <RecentCard services={filteredList} />
          ) : (
            <p className="p">
              No services found based on the applied filters.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
