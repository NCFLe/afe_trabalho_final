import React from "react";
import { MovieCard } from "./MovieCard";

export const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m}/>
        ))}
      </ul>
    </>
  );
};
