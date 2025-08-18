import React from "react";
import "./Filter.css";

const Filter = ({ onSortChange, onCuisineChange, onPriceChange }) => {
  return (
    <div className="filter-bar">
      {/* Sort Dropdown */}
      <div className="filter-item">
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="rating">Rating</option>
          <option value="deliveryTime">Delivery Time</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Cuisine Dropdown */}
      <div className="filter-item">
        <label htmlFor="cuisine">Cuisine:</label>
        <select id="cuisine" onChange={(e) => onCuisineChange(e.target.value)}>
          <option value="all">All</option>
          <option value="indian">Indian</option>
          <option value="chinese">Chinese</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
        </select>
      </div>

      {/* Price Dropdown */}
      <div className="filter-item">
        <label htmlFor="price">Price:</label>
        <select id="price" onChange={(e) => onPriceChange(e.target.value)}>
          <option value="all">All</option>
          <option value="low">Under ₹300</option>
          <option value="mid">₹300 - ₹600</option>
          <option value="high">Above ₹600</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
