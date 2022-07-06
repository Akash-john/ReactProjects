import React from "react";
import styled from "styled-components";
import NewTask from "./NewTask";

const Task = ({ data }) => {
  let newTask = data.map((task, idx) => {
    return <NewTask key={idx} text={task.text} />;
  });
  return <Container>{newTask}</Container>;
};

export default Task;

const Container = styled.div`
  margin: 20px;
  border: 1px white solid;
  border-radius: 10px;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
