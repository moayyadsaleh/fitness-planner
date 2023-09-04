import React from "react";
import "../styles.css"; // Import the CSS file

function WorkoutDetails({ workoutData }) {
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
    </div>
  );
}

export default WorkoutDetails;
