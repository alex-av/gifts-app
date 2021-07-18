import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent{
  // TODO: el decorador de propiedad viewchild busca por referencia un objeto html
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //signo de admiración para comprometerse que el valor no será nulo.
  
  // TODO: Al traer el servicio, ya tengo acceso a todas las propiedades y servicios
  constructor ( private gifsService:GifsService  ) {}
  
  buscar( ) {
      let valor = this.txtBuscar.nativeElement.value;
      if ( valor.trim().length === 0) { return; }

      console.log(valor);
      this.txtBuscar.nativeElement.value = '';
      this.gifsService.buscarGifs( valor ) // 1. TODO: Invoco el valor y lo mando al servicio
  }
}
