import { Component } from "react";
import classes from "./User.module.css";

//class based Components can work with functional component

class User extends Component {
  componentWillUnmount() {
    console.log("user will unMount");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
