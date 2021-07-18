import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
//modules
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'; // TODO: modulo que sirve para peticiones HTTP en angular


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//TODO: primero importo modulos de terceros
    SharedModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
