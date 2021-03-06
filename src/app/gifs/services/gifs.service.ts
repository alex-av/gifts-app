import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifResponse } from 'src/app/interfaces/gif.interface';

@Injectable({
  providedIn: 'root' // TODO: significa que el servicio se puede acceder globalmente
})
export class GifsService {

  private APIKey: string = 'Qor0DrV7rjBjXchU76gevQxfDJsEIRyL'; // TODO: api key obtenida de giphy developers 
  private serviceURL = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = []; // TODO:  creo una propiedad privada de array tipo string
  public resultados: Gif[] = [];

  get historial() { // TODO: este es un getter que expone la propiedad privada _historial el retorno es un nuevo array

    return [ ...this._historial]; // TODO:  retornará un nuevo arreglo con el valor del historial, cuando se usa el spread  de esta forma para heredar valores, genera un nuevo array
  }

  constructor( private http: HttpClient) { // se ejecuta una vez

    // TODO: Llamar el almacenamiento versión 1
    if(localStorage.getItem('Historial')){
      this._historial = JSON.parse( localStorage.getItem('Historial')! );
    }
    // TODO: Llamar el almacenamiento versión 2
    this.resultados = JSON.parse(localStorage.getItem('Resultados')!) || [];

  } // INYECTO EL SERVICIO HTTP

  buscarGifs (  query:string ) {
    query = query
    .trim()// TODO: trim borra los espacios adelante y atras
    .toLowerCase(); //TODO: convierto todos los valores en minúscula
    
    if (!this._historial.includes(query)) { // función includes de un array *nuevo* evalua si un valor ya existe dentro
      
      this._historial.unshift( query ); // TODO:  función unshift inserta un item en un arreglo
      this._historial = this._historial.splice(0, 10); // TODO: el array se limita a 10 valores
    
      localStorage.setItem('Historial', JSON.stringify(this._historial));
    }

    // TODO: Params 
    const params = new HttpParams()
      .set('api_key', this.APIKey)
      .set('limit', '10')
      .set('q', query)

    // TODO: PETICIÓN HTTP -> LLAMADO A LA API -> con el objeto de angular
    this.http.get<SearchGifResponse>(`${this.serviceURL}/search`, { params: params })
      .subscribe( (resp) => { 
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('Resultados', JSON.stringify(this.resultados));
      } );
    

    console.log(this._historial);
  }

}
