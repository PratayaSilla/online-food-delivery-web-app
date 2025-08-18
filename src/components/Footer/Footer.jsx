import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaUtensils } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">
            <FaUtensils className="footer-icon" /> Foodie
          </h2>
          <p>
            Delicious food delivered to your doorstep. Fast, fresh, and reliable.
          </p>
        </div>


        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#restaurants">Restaurants</a></li>
            <li><a href="#process">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#cta">Get Started</a></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@foodie.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>


        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Foodie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
