
import React, { useEffect, useState } from "react";
import { CardList } from "../../../common/components/CardList";
import { SeriesService } from "../services/SeriesService";

export const Latest = () => {
    const [series, setSeries] = useState([]);

    const getSeries = async () => {
        const {
          data: { results }
        } = await SeriesService.getLatestSeries();
    
        setSeries(results);
    };

      useEffect(() => {
        getSeries();
      }, []);

      return(
        <>
            <h1>Transmitindo Hoje</h1>
            <CardList data={series} type="Serie" />
        </>
    );
}