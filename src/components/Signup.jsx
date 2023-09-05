import axios from "axios";
import React, { useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");

  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check password strength
    checkPasswordStrength(value);
  };

  const checkPasswordStrength = (password) => {
    // Define your password strength criteria
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

    if (passwordRegex.test(password)) {
      setPasswordStrength("Strong");
    } else if (password.length >= 12) {
      setPasswordStrength("Moderate");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/signup", formData);

      if (response.status === 201) {
        // Signup successful, redirect to the desired page
        navigate("/workout");
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
            placeholder="Your name"
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
            placeholder="Your email address"
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
            placeholder="Enter a strong password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="password-strength">{passwordStrength}</span>
        </div>
        <div>
          <button className="form-submit-button" type="submit">
            Sign Up
          </button>
        </div>
        <div>
          {/* Add Sign In Link */}
          <p>
            Already have an account? <a href="/login">Log In</a>
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
