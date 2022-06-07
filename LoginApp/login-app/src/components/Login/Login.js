import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_PWD") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "PWD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  const ctx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailisValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [pwdIsValid, setPwdIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // useEffect(() => {
  //   console.log("Effect is running for every time");
  //   return () => {
  //     console.log("cleanup");
  //   };
  // }, []);

  const { isValid: validEmail } = emailState;
  const { isValid: validPassword } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(validEmail && validPassword);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [validEmail, validPassword]);

  const emailChangeHandler = (e) => {
    dispatchEmail({
      type: "USER_INPUT",
      val: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: "USER_PWD",
      val: e.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordhandler = () => {
    dispatchPassword({ type: "PWD_BLUR" });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      emailInputRef.current.activateFocus();
    } else {
      passwordInputRef.current.activateFocus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={formSubmitHandler}>
        <Input
          ref={emailInputRef}
          isValid={emailState.isValid}
          htmlFor="useremail"
          labelName="Email"
          type="text"
          id="useremail"
          onChange={emailChangeHandler}
          value={emailState.value}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          isValid={passwordState.isValid}
          htmlFor="userpassword"
          labelName="Password"
          type="password"
          id="userpassword"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordhandler}
        />
        <div className={`${classes.actions} `}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
