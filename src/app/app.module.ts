import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Vista1Component } from './componentes/vista1/vista1.component';
import { HeadComponent } from './componentes/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    Vista1Component,
    HeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
