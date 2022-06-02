import React, { useState } from "react";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredValue("");
    props.addGoal(enteredValue);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>Course Goal</label>
        <br />
        <input type="text" onChange={inputChangeHandler} value={enteredValue} />
        <br />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default CourseInput;
