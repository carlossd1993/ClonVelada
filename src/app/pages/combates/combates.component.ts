import { Component } from '@angular/core';
import {Boxers, boxeadores} from "../../info/boxers";
import {Combates, peleas} from "../../info/combates";
import {CardCombateComponent} from "../../components/card-combate/card-combate.component";

@Component({
  selector: 'app-combates',
  standalone: true,
  imports: [
    CardCombateComponent
  ],
  templateUrl: './combates.component.html',
  styleUrl: './combates.component.scss'
})
export class CombatesComponent {
  boxeadores: Boxers[]=boxeadores;
  peleas: Combates[] = peleas;
}
