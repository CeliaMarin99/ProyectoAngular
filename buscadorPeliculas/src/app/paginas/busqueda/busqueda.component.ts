import { Component } from '@angular/core';
import { CartaPeliculaComponent } from '../carta-pelicula/carta-pelicula.component';

@Component({
  selector: 'app-busqueda',
  imports: [CartaPeliculaComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.scss'
})
export class BusquedaComponent implements OnInit{
}