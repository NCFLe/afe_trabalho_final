import React, { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { CardList } from "../../common/components/CardList"

export const Popular = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const {
          data: { results }
        } = await MoviesService.getPopularMovies();
    
        setMovies(results);
      };

      useEffect(() => {
        getMovies();
      }, []);

      return(
        <>
            <h3>Filmes Populares</h3>
            <CardList data={movies} />
        </>
    );
}