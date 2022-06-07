import React from "react";
import Navigatoin from "./Navigatoin";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes[`main-header`]}>
      <h1>TradeCafe</h1>
      <Navigatoin />
    </header>
  );
};

export default MainHeader;
