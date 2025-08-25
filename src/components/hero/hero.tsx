import React from "react";
import "./hero.css";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero-wrapper" id="Hero-ID">
      {/* Background Image */}
      <div className="hero-background" />

      {/* Foreground Content */}
      <div className="hero-content">
        <span className="hero-subtitle">
          SOMETHING BIG IS COOKING<br />BENEATH THE SURFACE
        </span>
      </div>
    </div>
  );
};

export default Hero;
