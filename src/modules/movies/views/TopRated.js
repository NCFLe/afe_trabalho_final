import React, { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { CardList } from "./../../../common/components/CardList"

export const TopRated = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const {
          data: { results }
        } = await MoviesService.getTopRatedMovies();
    
        setMovies(results);
      };

      useEffect(() => {
        getMovies();
      }, []);

      return(
        <>
            <h3>Mais Votados</h3>
            <CardList data={movies} />
        </>
    );
}