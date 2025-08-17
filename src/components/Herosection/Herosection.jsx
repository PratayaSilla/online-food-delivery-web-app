import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Delicious Food, Delivered Fast</h1>
        <p className="hero-subtitle">
          Order from your favorite restaurants with just a few clicks. Fresh,
          hot, and right to your doorstep.
        </p>
        <div className="hero-actions">
          <input
            type="text"
            placeholder="Enter your location..."
            className="hero-input"
          />
          <button className="hero-btn">Find Food</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Food delivery"
        />
      </div>
    </section>
  );
};

export default HeroSection;

