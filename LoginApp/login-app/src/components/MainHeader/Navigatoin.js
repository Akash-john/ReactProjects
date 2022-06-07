import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Navigation.module.css";

const Navigatoin = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={classes.nav}>
      <nav>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <Button onClick={ctx.onLogout}>Logout</Button>
            </li>
          )}
        </ul>
      </nav>
    </Card>
  );
};

export default Navigatoin;
