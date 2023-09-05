import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", formData);
      if (response.status === 200) {
        // Successful login, handle it accordingly (e.g., store the token in localStorage)
        console.log("Login successful");

        // Redirect to the WorkoutPlanner component upon successful login
        navigate("/workout");
      } else {
        // Failed login, handle it accordingly (e.g., show an error message)
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
            placeholder="Your email address"
            onChange={handleChange}
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
            placeholder="Your password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="form-submit-button" type="submit">
            Log In
          </button>
        </div>
        <div>
          <p>
            Forgot your password?{" "}
            <Link to="/forgot-password">Reset Password</Link>
          </p>
          <button className="facebook-button">Log In with Facebook</button>
          <button className="google-button">Log In with Google</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
