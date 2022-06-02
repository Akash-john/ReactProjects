import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailisValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [pwdIsValid, setPwdIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("Effect is running for every time");
    return () => {
      console.log("cleanup");
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const validateEmailHandler = () => {
    setEmailisValid(enteredEmail.includes("@"));
  };

  const validatePasswordhandler = () => {
    setPwdIsValid(enteredPassword.trim().length > 6);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ``
          }`}
        >
          <label htmlFor="useremail">Email</label>
          <input
            type="text"
            id="useremail"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            pwdIsValid === false ? classes.invalid : ``
          } `}
        >
          <label htmlFor="userpassword">Password</label>
          <input
            type="password"
            id="userpassword"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordhandler}
          />
        </div>

        <div className={`${classes.actions} `}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
