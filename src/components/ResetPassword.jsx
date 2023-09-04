import React, { useState } from "react";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to send a reset email with a unique token here
  };

  // Define inline styles
  const formStyles = {
    width: "300px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "70px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "10px",
    fontWeight: "bold",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    fontSize: "16px",
  };

  const buttonStyles = {
    width: "100%",
    padding: "10px",
    backgroundColor: "maroon",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={containerStyles}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <label htmlFor="email" style={labelStyles}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyles}
        />
        <br />

        <label htmlFor="newPassword" style={labelStyles}>
          New Password:
        </label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={inputStyles}
        />
        <br />

        <label htmlFor="confirmPassword" style={labelStyles}>
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={inputStyles}
        />
        <br />

        <button type="submit" style={buttonStyles}>
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
