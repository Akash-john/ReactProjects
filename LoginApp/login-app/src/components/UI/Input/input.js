import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      activateFocus: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ``
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.labelName}</label>
      <input
        ref={inputRef}
        id={props.id}
        className={props.className}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
