import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3"
  apikey= "08cc33bd5ae3a747598ce2ad84376e66"
  //bannerapidata
  bannerApiData():Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  //trending movies api data
trendingMovieApiData():Observable<any>  {
return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
}

//search movies

getSearchMovie(data:any):Observable<any> {
  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
}

//movie details

getMovieDetails(data:any):Observable<any> {
  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.query}`)
}

}
