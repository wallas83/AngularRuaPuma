import { Component, OnInit } from '@angular/core';
//import{MapasService,mapa}from '@../../services/mapas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {
  title: string = 'Ruta chasquipampa';
  lati: number = -16.533680;
  longi: number =  -68.037116;
  //marcadores
  markers: marker[]=[
    {
    nombre :'calle60',
    lati:-16.534554,
    longi: -68.041708
    },
    {
      nombre :'calle53',
      lati:-16.536381,
      longi:-68.045748

    },
    {
      nombre :'calle46',
      lati:-16.538400,
      longi:-68.050551

    },
    {
      nombre :'calle37',
      lati:-16.540127,
      longi:-68.053997

    },
    {

      nombre :'Calle 35 Del Escultor',
      lati:-16.541114,
      longi:-68.057531

    },
    {

      nombre :'Laguna de Cota Cota',
      lati:-16.541794,
      longi:-68.062097
    },
    {

      nombre :'Laguna de Cota Cota',
      lati:-16.541794,
      longi:-68.062097
    },
    {

      nombre :'Calle 28-Cota Cota',
      lati:-16.542526,
      longi:-68.065775
    },
    {

      nombre :'Calle 28 Los pinos',
      lati:-16.545446,
      longi:-68.064365
    },
    {

      nombre :'Calle 25 Los pinos',
      lati:-16.545400,
      longi:-68.070562
    },
    {
      nombre :'Final Calle 21',
      lati:-16.544984,
      longi:-68.076206
    },
    {

      nombre :'Final Calle 15',
      lati:-16.544564,
      longi:-68.082778
    },
    {
      nombre :'Los Sauces',
      lati:-16.545080,
      longi:-68.090579
    },
    {

      nombre :'Adesu-Campo Fe',
      lati:-16.531077,
      longi:-68.100163
    },
    {
      nombre :'M.16 de Julio',
      lati:-16.529452,
      longi:-68.103145
    },
    {
      nombre :'Plza. de la loba',
      lati:-16.528124,
      longi:-68.105976
    },
    {
      nombre :'Plza. de la loba',
      lati:-16.528124,
      longi:-68.105976
    },
    {
     nombre :'C. 4 Obrajes - C. 6 Obrajes',
      lati:-16.524480,
      longi:-68.111027
    },
    {
      nombre :'Curva de Holguín',
      lati:-16.519551,
      longi:-68.116384
    },
    {
      nombre :'U.M.S.A',
      lati:-16.503927,
      longi:-68.128445
    },
    {

      nombre :'Plza. Camacho',
      lati:-16.500265,
      longi:-68.132058
    }

];
constructor() { }

  ngOnInit() {

  }


}

interface marker{
  nombre?:string;
  lati:number;
  longi:number;
}
