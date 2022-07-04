import React from "react";
import MyParagraph from "./MyParagraph";

const Demo = (props) => {
  console.log("Demo App is running");
  return <MyParagraph>{props.show ? "This is new paragraph" : ""}</MyParagraph>;
};

export default React.memo(Demo);
