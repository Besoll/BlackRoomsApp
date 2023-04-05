import React from "react";
import "./Hero2.css";

const Hero2 = () => {
  const scrollToNextSection = () => {
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-text-container">
      <h1 className="hero-text">Get Noticed Online</h1>
      <button className="cta-button" onClick={scrollToNextSection}>
        Start Here
      </button>
    </div>
  );
};

export default Hero2;
