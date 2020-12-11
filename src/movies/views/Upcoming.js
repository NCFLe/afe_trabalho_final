import React, { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { CardList } from "../../common/components/CardList"

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
            <CardList data={movies} />
        </>
    );
}