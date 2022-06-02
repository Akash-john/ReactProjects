import React from "react";

const CourseItem = (props) => {
  const onDelete = () => {
    props.delete(props.id);
  };

  return <li onClick={onDelete}>{props.children}</li>;
};

export default CourseItem;
