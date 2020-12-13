import { SeriesService } from "../services/SeriesService";
import React, { useEffect, useState } from "react";
import StarIcon from '@material-ui/icons/Star';
import ImageUnvaliable from '../../../assets/images/image_unavailable.jpg'

export const SerieDetail = ( id ) => {
    const [serieId] = useState(id.location.aboutProps.id);
    const [page, setPage] = useState(<></>)
      
    useEffect(() => {
      getSerie();
    }, [serieId]);

    const getSerie =  () => {
      SeriesService.getSerieById(serieId).then((results) => {
        if(results && results.data)
          renderPage(results.data);
      })
    };

    const getFormattedDate = (date) => {
      let formDt = new Date(date);
      return formDt.getDay() + "-" + formDt.getMonth() + "-" + formDt.getUTCFullYear()
    }

    const renderPage = (serie) => {
      setPage (
        <>
          <div className="fl w-80 pa2 ml6 mr6 tl">
            <div className="fl w-third pa2">
              {serie.poster_path != null ? 
                <img src={`http://image.tmdb.org/t/p/w300_and_h450_bestv2${serie.poster_path}`} className="db w-100 br2 br--top" alt="Cartaz" />
              :
                <img src={ImageUnvaliable} className="db w-100 br2 br--top" alt="Indisponível" />}
            </div>
            <div className="fl w-two-thirds pa2 dib v-mid">
              <span className="fl w-100 pt2 h3 fw4 f2-ns mt2 mb2">{serie.name}</span>
              <div className="fl w-100 f4 lh-copy mb3 flex flex-wrap">
                <div className="flex flex-wrap items-center w-25">
                  <StarIcon className="mr1 gold" />
                  <span className=" f4-ns "> {serie.vote_average}</span>
                </div>
                <span className="w-25">{serie.vote_count} votos</span>
                <span className="w-50">{getFormattedDate(serie.first_air_date)} a {serie.last_air_date != null ? getFormattedDate(serie.last_air_date) : "hoje" }</span>
              </div>
              <span className="fl w-100 pa2 mb2">Nome Original: {serie.original_name}</span>
              <span className="fl w-100 pa2 mb2 i">{serie.tagline}</span>
              <span className="fl w-100 pa2 mb2">
              {serie.genres.map((p) => (
                  <span key={p.id}>{p.name + ' • '}</span>
                ))}
              </span>
              <span className="fl w-100 pa2 mb2">
                {serie.created_by.map((p) => (
                  <span key={p.id} className="mr3">
                    {p.profile_path != null ? 
                    <img src={`http://image.tmdb.org/t/p/w300_and_h450_bestv2${p.profile_path}`} className="h2 w2 dib mr1" alt="Logo" />
                    : <></>}
                    {p.name + ' '}
                  </span>
                ))}
              </span>
              <span className="fl w-100 pa2 mb2">
                {serie.networks.map((p) => (
                  <span key={p.id} className="mr3">
                    {p.logo_path != null ? 
                    <img src={`http://image.tmdb.org/t/p/w300_and_h450_bestv2${p.logo_path}`} className="h2 w2 dib mr1" alt="Logo" />
                    : <></>}
                    {p.name + ' '}
                  </span>
                ))}
              </span>
              <span className="h2 fl w-30 pa2 mb2 flex flex-wrap">Número de Temporadas: {serie.number_of_seasons}</span>
              <span className="h2 fl w-50 pa2 mb2 flex flex-wrap">Número de Episódios: {serie.number_of_episodes}</span>
              <span className="fl w-100 pa2">Sinopse</span>
              <span className="fl w-100 pa2">{serie.overview}</span>
            </div>
          </div>
        </>
      );
    }
      
    return page;
}