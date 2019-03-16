import { Component, OnInit } from '@angular/core';
import { LatLng } from '@agm/core';
//import{MapasService,mapa}from '@../../services/mapas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {
  title: string = 'Ruta chasquipampa';
  zoom:number=14;
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
     latlongs:latLong[]=[
     {
        lati:-16.533680,
        longi:-68.037116
     },
     {
      lati:-16.534554,
      longi:-68.041708
     },
     {
       lati:-16.534715 ,
       longi:-68.042169
     },
     {
       lati:-16.534705,
       longi:-68.042143
     },
     {

      lati:-16.535220,
      longi:-68.043207

     },
     {
      lati:-16.536011,
      longi:-68.044469

     },
     {
      lati:-16.536381,
      longi:-68.045748
     },
     {

      lati:-16.537196,
      longi:-68.047903
     },
     {
      lati:-16.538055,
      longi:-68.047709

     },
     {
       lati:-16.538236,
       longi:-68.048830
     },
     {
        lati:-16.538400,
        longi:-68.050551
     },
     {
       lati:-16.538414,
       longi:-68.050690
     },
     {
       lati:-16.538414,
       longi:-68.050690

     },
     {
       lati:-16.540250,
       longi:-68.050709
     },
     {
       lati:-16.540127,
       longi:-68.053997
     },
     {
       lati:-16.540142,
       longi:-68.054426
     },
     {
      lati:-16.540147,
      longi:-68.054576
     },
     {
       lati:-16.540317,
       longi:-68.055225
     },
     {
        lati:-16.540219,
        longi:-68.055488
     },
     {
       lati:-16.539844,
       longi:-68.057516
     },
     {
      lati:-16.541552,
      longi:-68.058009
     },
     {

      lati:-16.541794,
      longi:-68.062097
     },
     {
       lati:-16.541876,
       longi:-68.062521
     },
     {

      lati:-16.542751,
      longi:-68.065118
     },
     {
      lati:-16.543703,
      longi:-68.063927
     },
     {

      lati:-16.544897,
      longi:-68.068239
     },
     {
        lati:-16.546663,
        longi:-68.076462

     },
     {

      lati:-16.543940,
      longi:-68.083747
     },
     {

      lati:-16.545301,
      longi:-68.091405
     },
     {
      lati:-16.543915,
      longi:-68.093017
     },
     {
       lati:-16.529794,
       longi:-68.102253
     },
     {
        lati:-16.523531,
        longi:-68.112824
     },
     {
       lati:-16.520600,
       longi:-68.115719
     },
     {
       lati:-16.520646,
       longi:-68.115955
     },
     {
       lati:-16.511801,
       longi:-68.119105
     },
     {
      lati:-16.505046,
      longi:-68.125313
     },
     {
      lati:-16.502989,
      longi:-68.127828
     },
     {
      lati:-16.504289,
      longi:-68.128471
     },
     {

      lati:-16.502024,
      longi:-68.130591
     },
     {
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
interface latLong{
  lati:number;
  longi:number;
}
