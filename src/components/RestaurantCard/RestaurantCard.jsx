import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant, onClick }) => {
  const { name, image, rating, avgPrice, cuisine, deliveryTime } = restaurant;

  return (
    <div className="restaurant-card" onClick={onClick} role="button" tabIndex={0}>
      <img src={image} alt={name} className="restaurant-image" />

      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-cuisine">{cuisine}</p>

        <div className="restaurant-details">
          <span className="restaurant-rating">⭐ {rating}</span>
          <span className="restaurant-price">₹{avgPrice} for two</span>
          <span className="restaurant-time">{deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
