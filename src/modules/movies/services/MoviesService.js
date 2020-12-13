import axios from "axios";
import { BaseService } from "../../../common/service/BaseService";

export class MoviesService {

  static getTopRatedMovies(page) {
    return axios(BaseService._withBaseUrl("movie/top_rated", page));
  }

  static getUpcomingMovies(page) {
    return axios(BaseService._withBaseUrl("movie/upcoming", page));
  }

  static getNowPlayingMovies(page) {
    return axios(BaseService._withBaseUrl("movie/now_playing", page));
  }

  static getPopularMovies(page) {
    return axios(BaseService._withBaseUrl("movie/popular", page));
  }

  static getMovieById(movieId) {
    return axios(BaseService._withBaseUrl(`movie/${movieId}`));
  }
}