import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
//api key 379577fc

API_URL: string = 'https://www.omdbapi.com/?apikey=379577fc';
  constructor(private http: HttpClient) { }

  getMovies(parametro: string): Observable<Movie[]>{
    return this.http.get<ApiResponse>(`${this.API_URL}&s=${parametro}`).pipe(
      map(response=>{
        return response.Search;
      }

      )
    )
  }
}
