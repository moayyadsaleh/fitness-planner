import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Home() {
  // Define inline styles as JavaScript objects
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    margin: "20px 0",
  };

  const paragraphStyle = {
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#666",
  };
  const motivationalStyle = {
    fontStyle: "italic",
    fontSize: "16px",
    color: "#888",
    marginTop: "10px",
  };
  const buttonStyle = {
    marginTop: "20px",
    marginBottom: "20px", // Adjust the value as needed
    padding: "10px 50px",
    fontSize: "20px",
    backgroundColor: "maroon",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Your Fitness Planner</h1>
      <img
        src="https://cdn.wallpapersafari.com/91/43/orOKdS.jpg"
        alt="Fitness Image"
        style={imageStyle}
      />
      <p style={paragraphStyle}>
        The Fitness Tracker app is your ultimate partner on your fitness
        journey! It's here to help you stay motivated, organized, and on track
        with your health and wellness goals. With an easy-to-use interface, you
        can effortlessly record and track your workouts, and monitor your
        progress all in one place. Whether you're a seasoned athlete or just
        starting your fitness adventure, this app is tailored to your needs.
        Your data is secure and accessible only to you, so you can track your
        progress with peace of mind. Start your fitness journey today with the
        Free Fitness Tracker app and unlock your full potential!
      </p>
      <img
        src="https://www.primefitnessusa.com/cdn/shop/files/Adjustable-Bench-Pic-Recovered_822c6f39-aa7e-406f-89c4-c13a58a4a71a_1024x615.jpg?v=1637210606" // Replace with the actual path to your second image
        alt="Second Image"
        style={imageStyle}
      />
      <p style={motivationalStyle}>
        "Don't wish for it, work for it." — Unknown
      </p>
      <p style={motivationalStyle}>
        "The only bad workout is the one that didn't happen." — Unknown
      </p>
      <p style={motivationalStyle}>
        "Believe in yourself and all that you are. Know that there is something
        inside you that is greater than any obstacle." — Christian D. Larson
      </p>
      <Link to="/signup" className="my-button" style={{ ...buttonStyle }}>
        Sign Up Now
      </Link>
    </div>
  );
}

export default Home;
