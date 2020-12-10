import axios from "axios";
import { BaseService } from "../../shared/service/BaseService";

export class MoviesService {

  static getTopRatedMovies() {
    return axios(BaseService._withBaseUrl("movie/top_rated"));
  }

  static getUpcomingMovies() {
    return axios(BaseService._withBaseUrl("movie/upcoming"));
  }

  static getNowPlayingMovies() {
    return axios(BaseService._withBaseUrl("movie/now_playing"));
  }

  static getPopularMovies() {
    return axios(BaseService._withBaseUrl("movie/popular"));
  }

  static getMovieById(movieId) {
    return axios(BaseService._withBaseUrl(`movie/${movieId}`));
  }
}