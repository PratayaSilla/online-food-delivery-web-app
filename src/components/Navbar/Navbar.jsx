import React, { useState } from "react";
import "./Navbar.css";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo">
          <FaUtensils className="logo-icon" /> Foodie
        </a>


        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#restaurants" onClick={() => setIsOpen(false)}>Restaurants</a>
          <a href="#process" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="navbar-btn" onClick={() => navigate('/signin')}>Sign In</button>
        </nav>


        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
