import React, { useState } from "react";
import "../styles.css"; // Import the CSS file

function GoalsAndChallenges() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    type: "",
    target: 0,
    targetDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({ ...newGoal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, newGoal]);
    setNewGoal({
      type: "",
      target: 0,
      targetDate: "",
    });
  };

  return (
    <div className="goals-and-challenges-container">
      <h1 className="goals-and-challenges-heading">Set Your Fitness Goals</h1>
      <form onSubmit={handleSubmit}>
        <label className="goals-and-challenges-label" htmlFor="type">
          Goal Description (e.g., Run, Lift, Lose Weight):
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={newGoal.type}
          onChange={handleChange}
          required
          className="goals-and-challenges-input"
        />
        <br />

        <label className="goals-and-challenges-label" htmlFor="target">
          Target Value (e.g., 5 miles, 100 pounds, 150 pounds):
        </label>
        <input
          type="number"
          id="target"
          name="target"
          value={newGoal.target}
          onChange={handleChange}
          required
          className="goals-and-challenges-input"
        />
        <br />

        <label className="goals-and-challenges-label" htmlFor="targetDate">
          Target Date (When would you like to achieve this goal?):
        </label>
        <input
          type="date"
          id="targetDate"
          name="targetDate"
          value={newGoal.targetDate}
          onChange={handleChange}
          required
          className="goals-and-challenges-input"
        />
        <br />

        <button type="submit" className="goals-and-challenges-button">
          Set Goal
        </button>
      </form>

      <h2 className="goals-and-challenges-subheading">Your Fitness Goals</h2>
      {goals.length === 0 ? (
        <p className="goals-and-challenges-message">
          No fitness goals set yet. Start setting your goals today!
        </p>
      ) : (
        <ul className="goals-and-challenges-list">
          {goals.map((goal, index) => (
            <li key={index} className="goals-and-challenges-item">
              <strong>Type:</strong> {goal.type}
              <br />
              <strong>Target Value:</strong> {goal.target}
              <br />
              <strong>Target Date:</strong> {goal.targetDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GoalsAndChallenges;
