import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";
import {list} from "../../data/Data"; // Adjust the path to your JSON file

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Browse our latest property listings to find your dream home or office space, now available in top locations!"
          />
          <RecentCard services={list} /> {/* Pass the JSON data */}
        </div>
      </section>
    </>
  );
};

export default Recent;
