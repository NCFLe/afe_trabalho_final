import axios from "axios";

export class MoviesService {
  static API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

  static _withBaseUrl(path) {
    return `https://api.themoviedb.org/3/${path}?api_key=${
      MoviesService.API_KEY
    }`;
  }

  static getPopularMovies() {
    return axios(MoviesService._withBaseUrl("movie/popular"));
  }

  static getTopRatedMovies() {
    return axios(MoviesService._withBaseUrl("movie/top_rated"));
  }

  static getUpcomingMovies() {
    return axios(MoviesService._withBaseUrl("movie/upcoming"));
  }

  static getNowPlayingMovies() {
    return axios(MoviesService._withBaseUrl("movie/now_playing"));
  }

  static getMovieById(movieId) {
    return axios(MoviesService._withBaseUrl(`movie/${movieId}`));
  }
}