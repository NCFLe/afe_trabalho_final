import React, { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { CardList } from "./../../../common/components/CardList"
import Pagination from '@material-ui/lab/Pagination';

export const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
      const getMovies = async () => {
        const {
          data: { results, total_pages }
        } = await MoviesService.getNowPlayingMovies(page);
    
        setMovies(results);
        setTotalPages(total_pages);
      };
  
      getMovies();
    }, [page]);

    const handlePaginationChange = (event, value) => {
      setPage(value);
    }

    return(
      <>
        <h1>Em cartaz</h1>
        <div className="w-100 h2">
          <Pagination count={totalPages} shape="rounded" className="fr mr4" onChange={handlePaginationChange} page={page}/>
        </div>
        <CardList data={movies} type="Movie" />
      </>
    );
}