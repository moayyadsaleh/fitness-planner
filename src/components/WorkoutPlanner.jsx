import React, { useState } from "react";
import WorkoutDetails from "./WorkoutDetails"; // Import the new component
import "../styles.css"; // Import the CSS file

function WorkoutPlanner() {
  const [state, setState] = useState({
    date: "",
    training: "",
    exerciseName: "",
    sets: [
      { weight: "", reps: "" },
      { weight: "", reps: "" },
      { weight: "", reps: "" },
      { weight: "", reps: "" },
      { weight: "", reps: "" },
    ],
    restIntervals: "",
    tempo: "",
    cardioType: "",
    duration: "",
    level: "",
    calories: "",
    notes: "",
  });
  const [showWorkoutDetails, setShowWorkoutDetails] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSetChange = (index, e) => {
    const { name, value } = e.target;
    const sets = [...state.sets];
    sets[index][name] = value;
    setState((prevState) => ({
      ...prevState,
      sets,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowWorkoutDetails(true); // Display workout details after submitting
    //send the form data to your server or perform any other actions.
    console.log(state);
  };

  const { sets } = state;

  return (
    <div>
      <h1>Workout Planner</h1>
      {showWorkoutDetails ? (
        <WorkoutDetails workoutData={state} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date of Workout:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={state.date}
            onChange={handleChange}
            required
            style={{ width: "40%" }}
          />
          <br />

          <label htmlFor="training">
            Type of Training (e.g., Strength, Cardio, Yoga):
          </label>
          <input
            type="text"
            id="training"
            name="training"
            value={state.training}
            onChange={handleChange}
            required
            style={{ width: "40%" }}
          />
          <br />

          <h2>Exercise Details</h2>
          <div className="exercise">
            <label htmlFor="exerciseName">Exercise Name:</label>
            <input
              type="text"
              id="exerciseName"
              name="exerciseName"
              placeholder="e.g., Bench Press, Running, Yoga..."
              value={state.exerciseName}
              onChange={handleChange}
              required
            />
            <br />

            {sets.map((set, index) => (
              <div key={index}>
                <label htmlFor={`set${index + 1}`}>Set {index + 1}:</label>
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight (lbs or kg)"
                  value={set.weight}
                  onChange={(e) => handleSetChange(index, e)}
                  required
                />
                <input
                  type="text"
                  name="reps"
                  placeholder="Reps"
                  value={set.reps}
                  onChange={(e) => handleSetChange(index, e)}
                  required
                />
                <br />
              </div>
            ))}

            <label htmlFor="restIntervals"> Rest Intervals (optional):</label>
            <input
              type="text"
              id="restIntervals"
              name="restIntervals"
              placeholder="e.g., 30 seconds rest between sets"
              value={state.restIntervals}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="tempo">Tempo (e.g., 2-0-2):</label>
            <input
              type="text"
              id="tempo"
              name="tempo"
              value={state.tempo}
              onChange={handleChange}
            />
            <br />
          </div>

          <h2>Cardio Details</h2>
          <div className="cardio">
            <label htmlFor="cardioType">
              {" "}
              Cardio Type (e.g., Running, Cycling, Swimming):
            </label>
            <input
              type="text"
              id="cardioType"
              name="cardioType"
              value={state.cardioType}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="duration">Duration (minutes):</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={state.duration}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="level"> Intensity Level (optional):</label>
            <input
              type="text"
              id="level"
              name="level"
              placeholder="e.g., High, Moderate, Low"
              value={state.level}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="calories">Estimated Calories Burned:</label>
            <input
              type="text"
              id="calories"
              name="calories"
              placeholder="e.g., 300 calories"
              value={state.calories}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={state.notes}
              placeholder="Any additional notes or comments..."
              onChange={handleChange}
            ></textarea>
            <br />
          </div>

          <button type="submit">Save and Submit Workout Details</button>
        </form>
      )}
    </div>
  );
}

export default WorkoutPlanner;
