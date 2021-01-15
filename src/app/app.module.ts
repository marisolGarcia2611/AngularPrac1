import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EscuelaComponent } from './Componentes/escuela/escuela.component';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EscuelaComponent]
})
export class AppModule { }
