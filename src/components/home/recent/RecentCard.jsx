import React, { useState } from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  // Create a state to store the heart status of each property
  const [likedProperties, setLikedProperties] = useState({});

  // Handle click to toggle heart status
  const handleHeartClick = (index) => {
    setLikedProperties((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the like status of the specific property
    }));
  };

  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          const isLiked = likedProperties[index]; // Get the heart status for the current item

          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  {/* Add a click event to the heart icon */}
                  <i
                    className={`fa fa-heart ${isLiked ? "liked" : ""}`}
                    onClick={() => handleHeartClick(index)} // Toggle heart for specific item
                    style={{
                      color: isLiked ? "red" : "gray", // Change color based on state
                    }}
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
                  <label htmlFor="">/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
