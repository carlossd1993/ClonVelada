import { Component } from '@angular/core';
import {Boxers, boxeadores} from "../../boxers/boxers";
import {BoxerSelectionComponent} from "../boxer-selection/boxer-selection.component";

@Component({
  selector: 'app-seleccion-boxeadores',
  standalone: true,
  imports: [
    BoxerSelectionComponent
  ],
  templateUrl: './seleccion-boxeadores.component.html',
  styleUrl: './seleccion-boxeadores.component.scss'
})
export class SeleccionBoxeadoresComponent {
  boxeadores: Boxers[] = boxeadores;
}
