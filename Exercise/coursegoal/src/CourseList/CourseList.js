import React from "react";
import CourseItem from "../CourseItems/CourseItem";

const CourseList = ({ goals, onDelete }) => {
  return (
    <div>
      {goals.map((item) => {
        return (
          <CourseItem key={item.id} delete={onDelete} id={item.id}>
            {item.goal}
          </CourseItem>
        );
      })}
    </div>
  );
};

export default CourseList;
