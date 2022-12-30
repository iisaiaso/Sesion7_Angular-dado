import { Component } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  numeroAleatorio() {
    var max = 6
    var min = 1

    //Generamos numeros aleatorios entre 1 - 6
    return Math.round(Math.random() * (max - min) + 1)
  }
}
