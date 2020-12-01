import { MoviesService } from "../services/MoviesService";
import React, { useEffect, useState } from "react";

export const MovieDetail = ( id ) => {
    const [movie, setMovie] = useState([]);
    const [idMovie, setIdMovie] = useState(0);


    const getMovie = async () => {
        const {
          data: { results }
        } = await MoviesService.getMovieById(id);
    
        console.log(results);
        setMovie(results);
      };
      
    useEffect(() => {
      try {
        setIdMovie(id.location.aboutProps.id);
        getMovie();
      } catch {
      }
      
    }, []);

    return (
      <>
        <div>
            <h1>Diz que foi, por favor {id.location.aboutProps.id}</h1>
        </div>
      </>
    );
}