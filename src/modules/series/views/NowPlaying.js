import React, { useEffect, useState } from "react";
import { CardList } from "../../../common/components/CardList";
import { SeriesService } from "../services/SeriesService";
import Pagination from '@material-ui/lab/Pagination';

export const NowPlaying = () => {
    const [series, setSeries] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
      const getSeries = async () => {
        const {
          data: { results, total_pages }
        } = await SeriesService.getNowPlayingSeries(page);
    
        setSeries(results);
        setTotalPages(total_pages);
      };

      getSeries();
    }, [page]);

    const handlePaginationChange = (event, value) => {
      setPage(value);
    }

    return(
      <>
        <h1>No Ar</h1>
        <div className="w-100 h2">
          <Pagination count={totalPages} shape="rounded" className="fr mr4" onChange={handlePaginationChange} page={page}/>
        </div>
        <CardList data={series} type="Serie" />
      </>
    );
}