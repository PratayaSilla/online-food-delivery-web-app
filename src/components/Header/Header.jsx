import React from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">FoodieApp</div>

      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search for restaurants, cuisines, dishes..." 
          className="search-input"
          aria-label="Search restaurants"
        />
      </div>

      {/* Action Buttons */}
      <div className="header-actions">
        <button className="cart-btn" aria-label="Cart">
          <FaShoppingCart className="icon" /> Cart
        </button>
        <button className="profile-btn" aria-label="Profile">
          <FaUserCircle className="icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;