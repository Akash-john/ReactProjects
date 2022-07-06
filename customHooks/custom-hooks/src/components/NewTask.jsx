import React from "react";
import styled from "styled-components";

const NewTask = ({ text }) => {
  return <Container>{text}</Container>;
};

export default NewTask;

const Container = styled.div`
  border: 1px black solid;
  display: block;
  padding: 10px;
  width: 50%;
  border-radius: 5px;
  list-style: none;
  margin-top: 20px;
  border: 1px white solid;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
