import React from "react";
import { MovieCard } from "./MovieCard";

export const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map((m) => (
          // <li key={m.id}>{m.title}</li>
          <MovieCard key={m.id} movie={m}/>
        ))}
      </ul>
    </>
  );
};
