import React from "react";
import "./Process.css";
import { FaSearchLocation, FaUtensils, FaBiking } from "react-icons/fa";

const Process = () => {
  const steps = [
    {
      icon: <FaSearchLocation />,
      title: "Find Restaurants",
      description: "Enter your location and discover restaurants near you."
    },
    {
      icon: <FaUtensils />,
      title: "Choose Your Meal",
      description: "Browse menus and pick your favorite dishes with ease."
    },
    {
      icon: <FaBiking />,
      title: "Get It Delivered",
      description: "Sit back and relax while we deliver your food hot & fresh."
    }
  ];

  return (
    <section className="process">
      <h2 className="process-title">How It Works</h2>
      <div className="process-steps">
        {steps.map((step, index) => (
          <div className="process-card" key={index}>
            <div className="process-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
