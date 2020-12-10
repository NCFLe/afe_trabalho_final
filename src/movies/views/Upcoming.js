import React, { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { MoviesList } from "../../components/MoviesList"

export const Upcoming = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const {
          data: { results }
        } = await MoviesService.getUpcomingMovies();
    
        setMovies(results);
      };

      useEffect(() => {
        getMovies();
      }, []);

      return(
        <>
            <h3>Próximas Estréias</h3>
            <MoviesList movies={movies} />
        </>
    );
}