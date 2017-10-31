import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { BuscarComponent } from './buscar/buscar.component'

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'buscar', component: BuscarComponent },

]

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SpotifyRoutingModule{}
