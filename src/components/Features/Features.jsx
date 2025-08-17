import React from "react";
import "./Features.css";
import { FaPizzaSlice, FaShippingFast, FaCreditCard, FaMapMarkedAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaPizzaSlice />,
      title: "Wide Variety",
      description: "Order from 1000+ restaurants and cuisines near you."
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description: "Get your food delivered hot and fresh in under 30 minutes."
    },
    {
      icon: <FaCreditCard />,
      title: "Easy Payments",
      description: "Pay securely with cards, wallets, or cash on delivery."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Live Tracking",
      description: "Track your order in real-time, from kitchen to doorstep."
    }
  ];

  return (
    <section className="features">
      <h2 className="features-title">Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
