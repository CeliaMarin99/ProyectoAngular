import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../servicios/movie.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit{

  movies: any[] = []; // Aquí puedes definir el tipo de datos según tu modelo

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier lógica necesaria al cargar el componente
  }

  // Puedes agregar métodos adicionales para manejar la lógica de búsqueda
  getMovies(parametro: string) {
    this.movieService.getMovies(parametro).subscribe(
      (movies) => {
        if(movies !== undefined) {
        this.movies = movies;
        }else{
        this.movies = [];
        }
      });
    }
}
