import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  buscar
  constructor() { }
  consultarArtista(formulario){
    console.log( formulario.controls[ 'buscarOtro' ].value )
  }
  ngOnInit() {
  }

}
