import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Boxers, boxeadores} from "../../info/boxers";
import {Location} from "@angular/common";


@Component({
  selector: 'app-combat-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './combat-detail.component.html',
  styleUrl: './combat-detail.component.scss'
})
export class CombatDetailComponent implements OnInit{
  luchador: string | null =null;
  infoluchador: Boxers |undefined;
  constructor(private ruta: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.ruta.paramMap.subscribe(params =>{
      this.luchador=params.get('id');
    })
    let boxers:Boxers[]= boxeadores;

    this.infoluchador=boxers.find(boxeador => boxeador.id === this.luchador)
  }

  goBack(): void{
    this.location.back();
  }
}
