import React, { useEffect, useState } from "react";
import { MoviesList } from "../../components/MoviesList";
import { SeriesService } from "../services/SeriesService";

export const TopRated = () => {
    const [series, setSeries] = useState([]);

    const getSeries = async () => {
        const {
          data: { results }
        } = await SeriesService.getTopRatedSeries();
    
        setSeries(results);
    };

      useEffect(() => {
          debugger
        getSeries();
      }, []);

      return(
        <>
            <h3>Mais Votados</h3>
            <MoviesList movies={series} />
        </>
    );
}