export class BaseService {
    static API_KEY = "d416af5d4faee64e25ab001d87aab5c3";
  
    static _withBaseUrl(path, page) {
      let requestUrl = `https://api.themoviedb.org/3/${path}?api_key=${
        BaseService.API_KEY
      }&language=pt-BR`;

      if(page) {
        requestUrl += `&page=${page}`;
      }

      return requestUrl;
    }
}