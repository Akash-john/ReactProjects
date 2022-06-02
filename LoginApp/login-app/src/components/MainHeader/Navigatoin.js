import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Navigation.module.css";

const Navigatoin = (props) => {
  return (
    <Card className={classes.nav}>
      <nav>
        <ul>
          {props.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <Button onClick={props.logout}>Logout</Button>
            </li>
          )}
        </ul>
      </nav>
    </Card>
  );
};

export default Navigatoin;
