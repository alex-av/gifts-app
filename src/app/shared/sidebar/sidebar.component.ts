import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  get historial () { // TODO: creo un getter llamado historial teniendo en cuenta que desde el servicio está seteado como propiedad privada
    return this.service.historial
  }
  constructor( private service:GifsService) { }



}
