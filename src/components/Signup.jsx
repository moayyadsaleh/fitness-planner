import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-container" style={{ marginTop: "70px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className="form-submit-button" type="submit">
            Sign Up
          </button>
        </div>
        <div>
          {/* Add Sign In Link */}
          <p>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
          {/* Add Sign Up with Facebook and Google buttons */}
          <button className="facebook-button">Sign Up with Facebook</button>
          <button className="google-button">Sign Up with Google</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
