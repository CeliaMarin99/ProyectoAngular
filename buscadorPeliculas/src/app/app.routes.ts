import { Routes } from '@angular/router';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { AcercaDeComponent } from './paginas/acerca-de/acerca-de.component';
import { PaginaErrorComponent } from './paginas/pagina-error/pagina-error.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';

export const routes: Routes = [
      { path: '', component: BienvenidaComponent},
      { path: 'buscar', component: BusquedaComponent},
      { path: 'acercade', component: AcercaDeComponent},
];
