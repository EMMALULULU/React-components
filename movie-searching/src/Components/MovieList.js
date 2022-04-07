import React from "react";
import Movie from "./Movie";

export default function MovieList({ moviesData }) {
  const movieListContent = moviesData.map((movieData) => {
    const { posterPath, title, description } = movieData;
    return (
      <Movie
        posterPath={posterPath}
        title={title}
        description={description}
        key={description}
      />
    );
  });
  return <>{movieListContent}</>;
}
