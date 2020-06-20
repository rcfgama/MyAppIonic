import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient ) { }

  getLatestMovies(page) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=bfa7443c142635656f6fe1dfe351ad01&language=en-US&page=1`);
  }

  getMovieDetails(id) {
    return this.http.get(this.baseApiPath + `/movie/${id}?api_key=bfa7443c142635656f6fe1dfe351ad01&language=pt-BR&page=1`);
  }

}
