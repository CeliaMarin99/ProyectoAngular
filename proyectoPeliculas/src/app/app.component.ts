import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasComponent } from "./componentes/peliculas/peliculas.component";

@Component({
  selector: 'app-root',
  imports: [PeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyectoPeliculas';
}
