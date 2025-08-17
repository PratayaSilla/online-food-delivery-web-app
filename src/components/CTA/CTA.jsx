import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="cta-content">
        <h2>Get Your Favorite Food Delivered Today!</h2>
        <p>
          Join thousands of happy customers who order with Foodie every day.
          Fast, fresh, and just a tap away.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Sign Up Now</button>
          <button className="cta-btn secondary">Download App</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
