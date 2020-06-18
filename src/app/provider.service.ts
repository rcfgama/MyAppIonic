import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient ) { }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=bfa7443c142635656f6fe1dfe351ad01&language=en-US&page=1");
  }

}
