import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  standalone: false,
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent implements OnInit {
@Input('movie') movie: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie);
  }

  getImagen(){
    if (this.movie.Poster !== 'N/A') {
      return this.movie.Poster;
    } else {
      return 'https://placehold.co/600x400'; // Imagen por defecto si no hay poster
    }
  }

}
