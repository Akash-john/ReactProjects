import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const MoviesList = ({ moviesList }) => {
  return (
    <Container>
      {moviesList.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            openingText={movie.openingText}
            releaseDate={movie.releaseDate}
          />
        );
      })}
    </Container>
  );
};

export default MoviesList;

const Container = styled.div`
  /* width: 50%; */
  display: block;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;
