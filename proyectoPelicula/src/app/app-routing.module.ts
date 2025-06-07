import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { AcercadeComponent } from './paginas/acercade/acercade.component';
import { Paginanoencontrada404Component } from './paginas/paginanoencontrada404/paginanoencontrada404.component';

const routes: Routes = [
  {
    path:'busqueda',
    component: BusquedaComponent
  },
    {
    path:'',
    component: BienvenidaComponent
  },
    {
    path:'acercade',
    component: AcercadeComponent
  },
   {
    path:'error',
    component: Paginanoencontrada404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
