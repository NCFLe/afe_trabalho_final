import React from "react";
import { MovieCard } from "../../modules/movies/components/MovieCard";
import { SerieCard } from "../../modules/series/components/SerieCard"

export const CardList = ({ data, type }) => {
  return (
    <>
      <ul>
        {data.map((d) => {
          if(type==="Movie") {
            return <MovieCard key={d.id} data={d} />
          }
          else {
            return <SerieCard key={d.id} data={d} />
          }
        })}
      </ul>
    </>
  );
};
