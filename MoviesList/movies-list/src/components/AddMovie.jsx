import React, { useRef } from "react";
import styled from "styled-components";

const AddMovie = ({ onAddMovie }) => {
  const titleRef = useRef("");
  const textRef = useRef("");
  const dateRef = useRef("");

  const formSumbitHandler = (e) => {
    e.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: textRef.current.value,
      releaseDate: dateRef.current.value,
    };

    onAddMovie(movie);

    titleRef.current.value = "";
    textRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <Container onSubmit={formSumbitHandler}>
      <Wrapper>
        <Label htmlFor="title">Title :</Label>
        <Title type="text" id="title" ref={titleRef} />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="openingtext">Opening Text:</Label>
        <OpeningText rows="5" id="openingtext" ref={textRef} />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="releasedate">Release Date:</Label>
        <ReleaseDate id="releasedate" type="date" ref={dateRef} />
      </Wrapper>
      <Wrapper>
        <Button>ADD Movies</Button>
      </Wrapper>
    </Container>
  );
};

export default AddMovie;

const Container = styled.form`
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: 100px;
  background-color: teal;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  display: block;
  margin: 20px;
`;
const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
`;
const Title = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.2rem;
  border-radius: 12px;
  border: 1px solid #ccc;
`;

const OpeningText = styled.textarea`
  border-radius: 12px;
  width: 100%;
  font: inherit;
  padding: 0.2rem;
  border: 1px solid #ccc;
`;

const ReleaseDate = styled.input`
  border-radius: 12px;
  width: 100%;
  font: inherit;
  padding: 0.2rem;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: black;
  padding: 20px;
  border-radius: 20px;
  color: white;
  border-color: white;
  width: 25%;
  font-size: larger;
  border-color: gray;
`;
