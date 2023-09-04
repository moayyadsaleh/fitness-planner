import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/workout">Workout Planner</Link>
        </li>
        <li>
          <Link to="/goals">Set and View Goals</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
