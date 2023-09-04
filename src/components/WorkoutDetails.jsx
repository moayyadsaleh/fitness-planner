import React from "react";
import "../styles.css"; // Import the CSS file

function WorkoutDetails({ workoutData, onEdit, onDelete }) {
  const buttonStyle = {
    marginRight: "10px", // Add some spacing between the buttons
    padding: "5px 10px", // Add padding to the buttons
    backgroundColor: "maroon", // Blue background color
    color: "#fff", // White text color
    border: "none", // Remove border
    borderRadius: "5px", // Add rounded corners
    cursor: "pointer", // Add a pointer cursor
  };

  return (
    <div className="workout-details-container">
      <h1>Workout Details</h1>
      <p>Date of Workout: {workoutData.date}</p>
      <p>Type of Training: {workoutData.training}</p>

      <h2 className="exercise-details">Exercise Details</h2>
      <ul>
        {workoutData.sets.map((set, index) => (
          <li key={index}>
            Set {index + 1}: Weight: {set.weight}, Reps: {set.reps}
          </li>
        ))}
      </ul>

      <p>Rest Intervals: {workoutData.restIntervals}</p>
      <p>Tempo: {workoutData.tempo}</p>

      <h2 className="cardio-details">Cardio Details</h2>
      <p>Cardio Type: {workoutData.cardioType}</p>
      <p>Duration (minutes): {workoutData.duration}</p>
      <p>Intensity Level: {workoutData.level}</p>
      <p>Estimated Calories Burned: {workoutData.calories}</p>
      <p>Notes: {workoutData.notes}</p>

      {/* Add Edit and Delete buttons with inline styling */}
      <button style={buttonStyle} onClick={onEdit}>
        Edit
      </button>
      <button style={buttonStyle} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default WorkoutDetails;
