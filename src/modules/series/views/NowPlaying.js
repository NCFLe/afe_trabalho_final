import React, { useEffect, useState } from "react";
import { CardList } from "../../../common/components/CardList";
import { SeriesService } from "../services/SeriesService";

export const NowPlaying = () => {
    const [series, setSeries] = useState([]);

    const getSeries = async () => {
        const {
          data: { results }
        } = await SeriesService.getNowPlayingSeries();
    
        setSeries(results);
    };

      useEffect(() => {
        getSeries();
      }, []);

      return(
        <>
            <h1>No Ar</h1>
            <CardList data={series} type="Serie" />
        </>
    );
}