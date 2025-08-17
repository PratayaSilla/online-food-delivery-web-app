import React from "react";
import "./Restaurants.css";

const Restaurants = () => {
  const restaurants = [
    {
      name: "Pizza Palace",
      img: "https://images.unsplash.com/photo-1601924582971-df57a4d5a0e6",
      rating: "4.7"
    },
    {
      name: "Sushi World",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      rating: "4.5"
    },
    {
      name: "Burger Hub",
      img: "https://images.unsplash.com/photo-1606755962773-0c5efb9ef7e7",
      rating: "4.6"
    },
    {
      name: "Curry Express",
      img: "https://images.unsplash.com/photo-1604908177522-040c2c43f1b4",
      rating: "4.4"
    }
  ];

  return (
    <section className="restaurants">
      <h2 className="restaurants-title">Popular Restaurants</h2>
      <div className="restaurants-grid">
        {restaurants.map((res, index) => (
          <div className="restaurant-card" key={index}>
            <img src={res.img} alt={res.name} />
            <div className="restaurant-info">
              <h3>{res.name}</h3>
              <p>⭐ {res.rating}</p>
              <button className="restaurant-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
