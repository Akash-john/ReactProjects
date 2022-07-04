import React, { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "../Layouts/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>

        <HeaderCartButton isShow={props.isShow} />
      </header>
      <div className={classes[`main-image`]}>
        <img src={mealsImg} alt="Main img" />
      </div>
    </Fragment>
  );
};

export default Header;
