import React, { useEffect, useState } from "react";
import { CardList } from "../../../common/components/CardList";
import { SeriesService } from "../services/SeriesService";

export const Popular = () => {
    const [series, setSeries] = useState([]);

    const getSeries = async () => {
        const {
          data: { results }
        } = await SeriesService.getPopularSeries();
    
        setSeries(results);
    };

      useEffect(() => {
        getSeries();
      }, []);

      return(
        <>
            <h1>Populares</h1>
            <CardList data={series} type="Serie" />
        </>
    );
}