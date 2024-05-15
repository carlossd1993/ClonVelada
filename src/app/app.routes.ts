import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CombatesComponent} from "./pages/combates/combates.component";
import {CombatDetailComponent} from "./pages/combat-detail/combat-detail.component";

export const routes: Routes = [
  {path: "combates", component: CombatesComponent},
  {path: "combate/:id", component: CombatDetailComponent},
  {path: "**", component: HomeComponent}
];
