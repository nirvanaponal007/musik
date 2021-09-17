import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  texto: string;
  ponFondo = true;
  mostrar = false;
  habilitar = false;
  referencia = "http://www.google.com";
  informacion1() {this.texto = "Apliacion de musika cargada en servidor local"}

  constructor() { }

  ngOnInit(): void {
  }

}
