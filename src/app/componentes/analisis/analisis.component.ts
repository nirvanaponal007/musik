import { Component, OnInit, Attribute, HostListener } from '@angular/core';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {

  // se crean las varibles, las mias que estan en el html 
  contaClick: number= 0;
  contaOver: number= 0;

  

  constructor(@Attribute ('miAtributo')  atributo ) { 
    console.log(atributo);
   }

   @HostListener ('click',['$event'])
   onHostClick(event:Event) {
     console.log("click en app" + event);
     this.contaClick += 1;
   }

   @HostListener('mouseover', ['$event'])
   onMouseOver(event:Event) {
     console.log("mouseover" + event);
     this.contaOver += 1;
   }




  ngOnInit(): void {
  }

}
