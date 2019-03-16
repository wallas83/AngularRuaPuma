import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { MapasComponent } from './components/mapas/mapas.component';
//mapas
import {AgmCoreModule}from '@agm/core';
//servicios
//import {MapasService} from './services/mapas.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    JumbotronComponent,
    MapasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBeLH-4u1T4LTj0zQhRms8Kp3DsE9hRxq4'
    })
  ],
  providers: [
   // MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
