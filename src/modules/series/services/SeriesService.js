import axios from "axios";
import { BaseService } from "../../../common/service/BaseService";

export class SeriesService {

    static getTopRatedSeries(page) {
      return axios(BaseService._withBaseUrl("tv/top_rated", page));
    }
  
    static getLatestSeries(page) {
      return axios(BaseService._withBaseUrl("tv/airing_today", page));
    }
  
    static getNowPlayingSeries(page) {
      return axios(BaseService._withBaseUrl("tv/on_the_air", page));
    }

    static getPopularSeries(page) {
      return axios(BaseService._withBaseUrl("tv/popular", page));
    }

    static getSerieById(tvId) {
      return axios(BaseService._withBaseUrl(`tv/${tvId}`));
    }
}