import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Signup from "./Signup.jsx"; // Use the correct filename with capital "S"
import Login from "./Login";
import WorkoutPlanner from "./WorkoutPlanner";
import Navigation from "./Navigation";
import Home from "./Home";
import ResetPassword from "./ResetPassword";
import GoalsAndChallenges from "./GoalsAndChallenges";
import Footer from "./Footer";

import "../styles.css";

function App() {
  const [workoutData, setWorkoutData] = useState([]);

  const addWorkoutData = (newWorkout) => {
    setWorkoutData([...workoutData, newWorkout]);
  };
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workout" element={<WorkoutPlanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/goals" element={<GoalsAndChallenges />} />{" "}
        <Route path="/forgot-password" element={<ResetPassword />} />
        {/* Add this route */}
      </Routes>
      {/* Place the Footer component outside of Routes */}
      <Footer />
    </Router>
  );
}

export default App;
