import React, { useState } from "react";
import "../styles.css"; // Import the CSS file

function GoalsAndChallenges() {
  // State to manage fitness goals
  const [goals, setGoals] = useState([]);

  // State to manage the input fields for adding new goals
  const [newGoal, setNewGoal] = useState({
    type: "",
    target: 0,
    targetDate: "",
    comment: "", // Add a comment field to the newGoal state
  });

  // Function to handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({ ...newGoal, [name]: value });
  };

  // Function to send a POST request to save a new goal
  const saveGoal = async (goalData) => {
    try {
      const response = await fetch("/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(goalData),
      });

      if (response.status === 201) {
        console.log("Goal data saved successfully");
        // Optionally, you can fetch the updated list of goals from the server
        // and update your local state with the new data.
      } else {
        console.error("Error saving goal data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveGoal(newGoal); // Wait for the POST request to complete
    setGoals([...goals, newGoal]);
    setNewGoal({
      type: "",
      target: 0,
      targetDate: "",
      comment: "", // Reset the comment field after submission
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
          min="0"
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

        {/* Comment field within the form */}
        <label className="goals-and-challenges-label" htmlFor="comment">
          Comment (Optional):
        </label>
        <textarea
          id="comment"
          name="comment"
          value={newGoal.comment}
          onChange={handleChange}
          className="goals-and-challenges-input"
          rows="4"
          cols="50"
          placeholder="Add your comments"
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
              <br />
              {goal.comment && (
                <div>
                  <strong>Comment:</strong> {goal.comment}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GoalsAndChallenges;
