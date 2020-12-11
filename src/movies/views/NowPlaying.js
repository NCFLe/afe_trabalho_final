import React, { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { CardList } from "../../common/components/CardList"

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
            <CardList data={movies} />
        </>
    );
}