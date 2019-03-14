import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapasComponent } from './components/mapas/mapas.component';
import {CardsComponent} from './components/cards/cards.component'
const routes: Routes = [
  {path:'mapasChasquipampa',component:MapasComponent},
  {path:'',component:CardsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
