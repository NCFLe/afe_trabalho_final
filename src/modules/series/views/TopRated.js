import React, { useEffect, useState } from "react";
import { CardList } from "../../../common/components/CardList";
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
        getSeries();
      }, []);

      return(
        <>
            <h1>Mais Votadas</h1>
            <CardList data={series} type="Serie" />
        </>
    );
}