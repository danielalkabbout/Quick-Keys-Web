import React, { useState } from "react";

const RecentCard = ({ services = [] }) => {
  const [likedProperties, setLikedProperties] = useState({});

  // Handle heart click to toggle the liked status
  const handleHeartClick = (index) => {
    setLikedProperties((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Conditional rendering for empty services
  if (services.length === 0) {
    return <p>No services available.</p>;
  }

  return (
    <div className="content grid3 mtop">
      {services.map((val, index) => {
        const { cover, category, location, name, price, type } = val;
        const isLiked = likedProperties[index];

        return (
          <div className="box shadow" key={index}>
            <div className="img">
              <img src={cover} alt={name} />
            </div>
            <div className="text">
              <div className="category flex">
                <span
                  style={{
                    background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                    color: category === "For Sale" ? "#25b579" : "#ff9800",
                  }}
                >
                  {category}
                </span>
                <i
                  className={`fa fa-heart ${isLiked ? "liked" : ""}`}
                  onClick={() => handleHeartClick(index)}
                  style={{ color: isLiked ? "red" : "gray" }}
                ></i>
              </div>
              <h4>{name}</h4>
              <p>
                <i className="fa fa-location-dot"></i> {location}
              </p>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">{price}</button>
                <label>/sqft</label>
              </div>
              <span>{type}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
