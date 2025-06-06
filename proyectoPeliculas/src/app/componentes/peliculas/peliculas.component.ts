import { Component, OnInit } from '@angular/core';
import { CartaPeliculaComponent } from "../carta-pelicula/carta-pelicula.component";
import { PeliculaService } from '../../servicios/pelicula.service';

@Component({
  selector: 'app-peliculas',
  imports: [CartaPeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent implements OnInit{
  //Array de peliculas
  peliculas:any[]=[];
  constructor(private peliculaServicio: PeliculaService){}

  ngOnInit(): void {}

  getPeliculas(parametro: string){
      this.peliculaServicio.getPeliculas(parametro).subscribe(data =>{
      //guarda las peliculas en el array
      this.peliculas = data.Search;
    })
  }
}
