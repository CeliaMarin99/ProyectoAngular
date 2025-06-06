import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  imports: [],
  templateUrl: './carta-pelicula.component.html',
  styleUrl: './carta-pelicula.component.scss'
})
export class CartaPeliculaComponent implements OnInit{
@Input("pelicula") pelicula: any;

constructor(){}

ngOnInit(): void{
  console.log(this.pelicula);
}

getImagen(){
  if(this.pelicula.Poster === "N/A"){
    return 'https://via.placeholder.com/600';
  }else{
    return this.pelicula.Poster;
  }
}
}
