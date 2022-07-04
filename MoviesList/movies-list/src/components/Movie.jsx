import React from "react";
import styled from "styled-components";

const Movie = ({ title, releaseDate, openingText }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <OpeningText>{openingText}</OpeningText>
      <ReleaseDate>{releaseDate}</ReleaseDate>
    </Container>
  );
};

export default Movie;

const Container = styled.li`
  margin-top: 20px;
  display: block;
  align-items: center;
  color: white;
  background-color: teal;
  border-radius: 20px;
  padding: 10px;
  font-weight: bolder;
`;

const Title = styled.ul`
  font-size: 30px;
`;

const OpeningText = styled.ul`
  font-size: 15 px;
`;

const ReleaseDate = styled.ul``;
