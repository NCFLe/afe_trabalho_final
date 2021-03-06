import { MoviesService } from "../services/MoviesService";
import React, { useEffect, useState } from "react";
import StarIcon from '@material-ui/icons/Star';
import ImageUnvaliable from '../../../assets/images/image_unavailable.jpg'

export const MovieDetail = ( id ) => {
  const [movieId] = useState(id.location.aboutProps.id);
  const [page, setPage] = useState(<></>)
      
  useEffect(() => {
    const getMovie =  () => {
      MoviesService.getMovieById(movieId).then((results) => {
        if(results && results.data)
          renderPage(results.data);
      })
    };
    
    const renderPage = (movie) => {
      setPage (
        <>
          <div className="fl w-80 pa2 ml6 mr6 tl">
            <div className="fl w-third pa2">
              {movie.poster_path != null ? 
                <img src={`http://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} className="db w-100 br2" alt="Cartaz" />
              :
                <img src={ImageUnvaliable} className="db w-100 br2" alt="Indisponível" />}
            </div>
            <div className="fl w-two-thirds pa2 dib v-mid">
              <span className="fl w-100 pt2 h3 fw4 f2-ns mt2 mb2">{movie.title}</span>
              <div className="fl w-100 f4 lh-copy mb3 flex flex-wrap">
                <div className="flex flex-wrap items-center w-25">
                  <StarIcon className="mr1 gold" />
                  <span className=" f4-ns "> {movie.vote_average}</span>
                </div>
                <span className="w-25">{movie.vote_count} votos</span>
                <span className="w-25">{getFormattedDate(movie.release_date)}</span>
              </div>
              <span className="fl w-100 pa2 mb2">Nome Original: {movie.original_title}</span>
              <span className="fl w-100 pa2 mb2 i">{movie.tagline}</span>
              <span className="fl w-100 pa2 mb2">
              {movie.genres.map((p) => (
                  <span key={p.id}>{p.name + ' • '}</span>
                ))}
              </span>
              <span className="fl w-100 pa2 mb2">
                {movie.production_companies.map((p) => (
                  <span key={p.id} className="mr3">
                    {p.logo_path != null ? 
                    <img src={`http://image.tmdb.org/t/p/w300_and_h450_bestv2${p.logo_path}`} className="h2 w2 dib mr1" alt="Logo" />
                    : <></>}
                    {p.name + ' '}
                  </span>
                ))}
              </span>
              <span className="h2 fl w-100 pa2 mb2">
                {movie.production_countries.map((p) => (
                  <span key={p.iso_3166_1}>{p.name + ' '}</span>
                ))}
              </span>
              <span className="fl w-100 pa2">Sinopse</span>
              <span className="fl w-100 pa2">{movie.overview}</span>
            </div>
          </div>
        </>
      );
    }

    getMovie();
  }, [movieId]);

  const getFormattedDate = (date) => {
    let formDt = new Date(date);
    return formDt.getDay() + "-" + formDt.getMonth() + "-" + formDt.getUTCFullYear()
  }

  return page;
}