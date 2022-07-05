import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-43052-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong. Please try after Some time");
      }
      const data = await response.json();

      let loadedMovies = [];

      for (let movie in data) {
        loadedMovies.push({
          id: movie,
          title: data[movie].title,
          openingText: data[movie].openingText,
          releaseDate: data[movie].releaseDate,
        });
        setMovies(loadedMovies);
      }
      // const { results } = data;

      // const transformedData = results.map((movie) => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     openingText: movie.opening_crawl,
      //     releaseDate: movie.release_date,
      //   };
      // });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  //Used Fetch method to reach the Endpoint(API) via then and catch.

  // function fetchMovies() {
  //   setLoading(true);
  //   fetch("https://swapi.py4e.com/api/film/")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("SomeThing Went Wrong");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const transformedData = data.results.map((movie) => {
  //         return {
  //           id: movie.episode_id,
  //           title: movie.title,
  //           openingText: movie.opening_crawl,
  //           releaseDate: movie.release_date,
  //         };
  //       });
  //       setMovies(transformedData);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  //   setLoading(false);
  // }

  const addMovieHandler = useCallback(async (movie) => {
    try {
      const response = await fetch(
        "https://react-http-43052-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(error);
    }
  }, []);

  useEffect(() => {}, [addMovieHandler]);

  let content = <p>Found Movies by clicking the "Fetch Movie Button"</p>;

  if (movies.length > 0) {
    content = <MoviesList moviesList={movies} />;
  }

  if (movies.length === 0 && !error && !loading) {
    content = <p>No movies Found...</p>;
  }

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <Container>
      <Navbar>MOVIE LIST</Navbar>
      <AddMovie onAddMovie={addMovieHandler} />
      <Button onClick={fetchMovies}>Fetch Movies</Button>
      {content}
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin-top: 10px;
  display: block;
  justify-content: center;
  align-items: center;
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
`;

const Navbar = styled.nav`
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  background-color: black;
`;
