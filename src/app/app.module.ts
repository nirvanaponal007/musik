import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Vista1Component } from './componentes/vista1/vista1.component';
import { HeadComponent } from './componentes/head/head.component';
import { AnalisisComponent } from './componentes/analisis/analisis.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    Vista1Component,
    HeadComponent,
    AnalisisComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
