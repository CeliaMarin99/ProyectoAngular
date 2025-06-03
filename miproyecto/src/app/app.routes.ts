import { Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component';

export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: '**', component: PaginaNoEncontradaComponent },
];

