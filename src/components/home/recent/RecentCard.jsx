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
        const { cover, category, location, name, price, type ,description} = val;
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
                <div className="icons">
                  <i
                    className={`fa fa-heart ${isLiked ? "liked" : ""}`}
                    onClick={() => handleHeartClick(index)}
                    style={{ color: isLiked ? "red" : "gray" }}
                  ></i>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/96171649624`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <i className="fab fa-whatsapp"></i> 
                  </a>
                </div>
              </div>
              <h4>{name}</h4>
              <p>
                <i className="fa fa-location-dot"></i> {location}
              </p>
              <h5>
            {description}
              </h5>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">{price}</button>
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
