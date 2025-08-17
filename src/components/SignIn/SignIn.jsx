import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add authentication logic here
  };
    const navigate = useNavigate();

  return (
    <section className="signin">
      <div className="signin-card">
        <h2 className="signin-title">Welcome Back 👋</h2>
        <p className="signin-subtitle">Sign in to continue ordering your favorites</p>

        <form onSubmit={handleSubmit} className="signin-form">
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

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <div className="signin-footer">
          <a href="#">Forgot Password?</a>
          <p>
            Don’t have an account? <a href="/signup" onClick={() => navigate('/signup')}>Sign Up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
