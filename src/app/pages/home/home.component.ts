import { Component } from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";
import {ContadorComponent} from "../../components/contador/contador.component";
import {BoxerSelectionComponent} from "../../components/boxer-selection/boxer-selection.component";
import {SeleccionBoxeadoresComponent} from "../../components/seleccion-boxeadores/seleccion-boxeadores.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ContadorComponent,
    BoxerSelectionComponent,
    SeleccionBoxeadoresComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
