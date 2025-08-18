import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RestaurantPage.css";
import { restaurants } from "../../data/restaurants.js"; 

const RestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find restaurant by id
  const restaurant = restaurants.find((rest) => rest.id === id);

  if (!restaurant) {
    return (
      <div className="restaurant-page not-found">
        <h2>Restaurant not found</h2>
        <button onClick={() => navigate("/home")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="restaurant-page">
      {/* Hero Section */}
      <div className="restaurant-hero">
        <img src={restaurant.image} alt={restaurant.name} />
        <div className="restaurant-hero-info">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.cuisine}</p>
          <div className="restaurant-hero-meta">
            <span>⭐ {restaurant.rating}</span>
            <span>₹{restaurant.avgPrice} for two</span>
            <span>{restaurant.deliveryTime} mins</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="restaurant-menu">
        <h2>Menu</h2>
        <div className="menu-grid">
          {restaurant.menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
