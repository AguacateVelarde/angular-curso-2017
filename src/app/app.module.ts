import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpotifyRoutingModule } from './app-router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BuscarComponent } from './buscar/buscar.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    SpotifyRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
