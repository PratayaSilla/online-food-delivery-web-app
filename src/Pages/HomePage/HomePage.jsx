import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { restaurants } from "../../data/restaurants";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Header />
      <Filter
        onSortChange={(val) => console.log("Sort:", val)}
        onCuisineChange={(val) => console.log("Cuisine:", val)}
        onPriceChange={(val) => console.log("Price:", val)}
      />

      <main className="restaurant-grid">
        {restaurants.map((rest) => (
          <RestaurantCard
            key={rest.id}
            restaurant={rest}
            onClick={() => navigate(`/restaurant/${rest.id}`)}
          />
        ))}
      </main>
    </div>
  );
}

export default HomePage;
