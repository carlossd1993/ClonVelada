import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-boxer-selection',
  standalone: true,
  imports: [],
  templateUrl: './boxer-selection.component.html',
  styleUrl: './boxer-selection.component.scss'
})
export class BoxerSelectionComponent {
  @Input() nombre?:string;
  @Input() imagen?:string;

  public rotacion:string;

  constructor() {
    this.rotacion=this.generarRotacionAleatoria(-45, 45);
  }
  public generarRotacionAleatoria(min: number, max: number):string {

    let rotacionAleatoria: string = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    console.log(rotacionAleatoria)
    return rotacionAleatoria;
  }
}
