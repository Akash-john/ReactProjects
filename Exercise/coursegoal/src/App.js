import { useState } from "react";
import "./App.css";
import CourseInput from "./CourseInput/CourseInput";
import CourseList from "./CourseList/CourseList";

function App() {
  const [courseGoal, setCourseGoal] = useState([
    { goal: "Do your work", id: "g1" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoal((prevGoal) => {
      const updateGoal = [...prevGoal];
      updateGoal.unshift({
        goal: enteredText,
        id: Math.random().toString(),
      });
      return updateGoal;
    });
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoal((prevGoal) => {
      const updateGoal = prevGoal.filter((goal) => goal.id !== goalId);
      return updateGoal;
    });
  };

  return (
    <div className="App">
      <CourseInput addGoal={addGoalHandler} />
      <br />
      <CourseList goals={courseGoal} onDelete={deleteGoalHandler} />
    </div>
  );
}

export default App;
