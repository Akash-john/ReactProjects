import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const noOfCartItems = cartCtx.items.reduce((currentNo, item) => {
    return currentNo + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const { items } = cartCtx;

  //useEffect for Bump Class

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    //cleanupFunction

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.isShow} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
