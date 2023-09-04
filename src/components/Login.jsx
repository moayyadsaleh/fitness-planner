import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission for login
  };

  return (
    <div className="form-container" style={{ marginTop: "70px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
            Log In
          </button>
        </div>
        <div>
          {/* Add Forgot Password Link */}
          <p>
            Forgot your password? <a href="/forgot-password">Reset Password</a>
          </p>
          {/* Add Sign Up with Facebook and Google buttons */}
          <button className="facebook-button">Log In with Facebook</button>
          <button className="google-button">Log In with Google</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
