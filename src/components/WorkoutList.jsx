import React, { Component } from "react";
import axios from "axios";

class WorkoutList extends Component {
  state = {
    workouts: [],
    error: null,
  };

  componentDidMount() {
    // Make a GET request to retrieve workouts when the component mounts
    axios
      .get("/workouts")
      .then((response) => {
        this.setState({ workouts: response.data });
      })
      .catch((error) => {
        this.setState({ error: "Error retrieving workouts" });
      });
  }

  // Function to format the date
  formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  render() {
    const { workouts, error } = this.state;

    const containerStyle = {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f7f7f7",
    };

    const workoutItemStyle = {
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
    };

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div style={containerStyle}>
        <h1>Workout List</h1>
        {workouts.map((workout, index) => (
          <div key={index} style={workoutItemStyle}>
            {/* Render all workout data here */}
            <p>Date: {this.formatDate(workout.date)}</p>
            <p>Training: {workout.training}</p>
            <p>Exercise: {workout.exerciseName}</p>
            <p>Sets:</p>
            <ul>
              {workout.sets.map((set, setIndex) => (
                <li key={setIndex}>
                  Weight: {set.weight}, Reps: {set.reps}
                </li>
              ))}
            </ul>
            <p>Rest Intervals: {workout.restIntervals}</p>
            <p>Tempo: {workout.tempo}</p>
            <p>Cardio Type: {workout.cardioType}</p>
            <p>Duration: {workout.duration}</p>
            <p>Level: {workout.level}</p>
            <p>Calories: {workout.calories}</p>
            <p>Notes: {workout.notes}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default WorkoutList;
