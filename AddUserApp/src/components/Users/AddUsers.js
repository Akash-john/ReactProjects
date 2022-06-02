import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUsers = (props) => {
  const [enterdName, setEnteredName] = useState("");
  const [enterdAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enterdName.trim().length === 0 && enterdAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        content: "Please enter a valid name and age (non empty-values)"
      });
    } else if (+enterdAge < 1) {
      setError({
        title: "Invalid Age",
        content: "Please ente a valid age(>0)"
      });
    }
    props.userHandler(enterdName, enterdAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={nameChangeHandler}
            value={enterdName}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enterdAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
