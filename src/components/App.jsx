import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import WorkoutPlanner from "./WorkoutPlanner";
import Navigation from "./Navigation";
import Home from "./Home";
import GoalsAndChallenges from "./GoalsAndChallenges";

import "../styles.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workout" element={<WorkoutPlanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/goals" element={<GoalsAndChallenges />} />{" "}
        {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
