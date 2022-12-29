import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
 numero:number=0
  lanzarDado(){
    this.numero = Math.round(Math.random()*((6 - 1)))
  }

}
