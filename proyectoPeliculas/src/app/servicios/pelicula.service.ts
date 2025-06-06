import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private API_URL: string = 'http://www.omdbapi.com/?apikey=[yourkey]&';

  constructor(private http: HttpClient) { }
  //el parametro es el titulo de la pelicula que el usuario escribe
  getPeliculas(parametro: string): Observable<any>{
    return this.http.get(`${this.API_URL}&s=${parametro}`);
  }
}
