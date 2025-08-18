import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);

  };
    const navigate = useNavigate();

  return (
    <section className="signup">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account ✨</h2>
        <p className="signup-subtitle">
          Sign up to start ordering your favorite meals
        </p>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account? <a href="/signin" onClick={() => navigate('/sign-in')}>Sign In</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
