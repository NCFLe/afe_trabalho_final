import axios from "axios";
import { BaseService } from "../../../common/service/BaseService";

export class SeriesService {

    static getTopRatedSeries() {
      return axios(BaseService._withBaseUrl("tv/top_rated"));
    }
  
    static getLatestSeries() {
      return axios(BaseService._withBaseUrl("tv/airing_today"));
    }
  
    static getNowPlayingSeries() {
      return axios(BaseService._withBaseUrl("tv/on_the_air"));
    }

    static getPopularSeries() {
      return axios(BaseService._withBaseUrl("tv/popular"));
    }

    static getSerieById(tvId) {
      return axios(BaseService._withBaseUrl(`tv/${tvId}`));
    }

    //todo
    static getSeriesRecomendations(tvId) {
      return axios(BaseService._withBaseUrl(`tv/${tvId}/recommendations`))
    }
}