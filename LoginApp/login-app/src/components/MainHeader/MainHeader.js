import React from "react";
import Navigatoin from "./Navigatoin";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes[`main-header`]}>
      <h1>TradeCafe</h1>
      <Navigatoin isLoggedIn={props.isAuthenticated} logout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
