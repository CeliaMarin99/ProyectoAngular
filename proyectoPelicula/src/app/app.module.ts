import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { CardMovieComponent } from './paginas/card-movie/card-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './paginas/header/header.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { AcercadeComponent } from './paginas/acercade/acercade.component';
import { Paginanoencontrada404Component } from './paginas/paginanoencontrada404/paginanoencontrada404.component';
import { ResaltarPipe } from './pipes/resaltar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    CardMovieComponent,
    HeaderComponent,
    FooterComponent,
    BienvenidaComponent,
    AcercadeComponent,
    Paginanoencontrada404Component,
    ResaltarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
