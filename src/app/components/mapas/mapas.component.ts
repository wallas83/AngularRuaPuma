import { Component, OnInit } from '@angular/core';
//import{MapasService,mapa}from '@../../services/mapas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {
  title: string = 'Ruta chasquipampa';
  lat: number = -16.533680;
  lng: number =  -68.037116;

  constructor() { }

  ngOnInit() {

  }

}
