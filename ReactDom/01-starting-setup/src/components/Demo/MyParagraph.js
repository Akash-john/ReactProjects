import React from "react";

const MyParagraph = (props) => {
  console.log("Myparah is running");
  return <p>{props.children}</p>;
};

export default React.memo(MyParagraph);
