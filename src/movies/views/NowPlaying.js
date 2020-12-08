import React, { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { MoviesList } from "../components/MoviesList"

export const NowPlaying = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const {
          data: { results }
        } = await MoviesService.getNowPlayingMovies();
    
        setMovies(results);
      };

      useEffect(() => {
        getMovies();
      }, []);

      return(
        <>
            <h3>Em cartaz</h3>
            <MoviesList movies={movies} />
        </>
    );
}