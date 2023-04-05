import React from "react";
import "./LocationInfo.css";

const LocationInfo = ({ displayedCity, displayedCountry }) => {
  return (
    <div className="location-info">
      <div className="displayed-location">
        {displayedCity}, {displayedCountry}
      </div>
    </div>
  );
};

export default LocationInfo;
