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
     latlongs:LatLlong[]=[
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
     }
     ];
                        new LatLng(-16.538414, -68.050690),
                        new LatLng(-16.540250, -68.050709),
                         new LatLng(-16.540127, -68.053997),
                        new LatLng(-16.540142, -68.054426),
                         new LatLng(-16.540147, -68.054576),
                          new LatLng(-16.540317, -68.055225),
                        new LatLng(-16.540219, -68.055488),
                        new LatLng(-16.539669, -68.056089),
                        new LatLng(-16.539432, -68.056105),
                        new LatLng(-16.539566, -68.057103),
                        new LatLng(-16.539849, -68.057339),
                        new LatLng(-16.539844, -68.057516),
                        new LatLng(-16.539957, -68.057596),
                        new LatLng(-16.541114, -68.057531),
                        new LatLng(-16.541608, -68.057499),
                        new LatLng(-16.541639, -68.057907),
                        new LatLng(-16.541552, -68.058009),
                        new LatLng(-16.541742, -68.058347),
                        new LatLng(-16.541480, -68.058712),
                        new LatLng(-16.541506, -68.059833),
                        new LatLng(-16.541794, -68.062097),
                        new LatLng(-16.541876, -68.062521),
                        new LatLng(-16.541866, -68.062972),
                        new LatLng(-16.541902, -68.063079),
                        new LatLng(-16.542961, -68.063299),
                        new LatLng(-16.542694, -68.065016),
                        new LatLng(-16.542751, -68.065118),
                        new LatLng(-16.542934, -68.065246),
                        new LatLng(-16.542526, -68.065775),
                        new LatLng(-16.542997, -68.065177),
                        new LatLng(-16.543703, -68.063927),
                        new LatLng(-16.544065, -68.063705),
                        new LatLng(-16.544422, -68.063673),
                        new LatLng(-16.545551, -68.064003),
                        new LatLng(-16.545446, -68.064365),
                         new LatLng(-16.544645, -68.067225),
                        new LatLng(-16.544897, -68.068239),
                         new LatLng(-16.545056, -68.068829),
                          new LatLng(-16.545195, -68.069135),
                        new LatLng(-16.545390, -68.070170),
                        new LatLng(-16.545400, -68.070562),
                        new LatLng(-16.545307, -68.072209),
                        new LatLng(-16.544984, -68.076206),
                        new LatLng(-16.544961, -68.076821),
                         new LatLng(-16.546663, -68.076462),
                        new LatLng(-16.546221, -68.079263),
                         new LatLng(-16.546236, -68.079805),
                          new LatLng(-16.546030, -68.080932),
                        new LatLng(-16.545469, -68.082112),
                        new LatLng(-16.545428, -68.082429),
                        new LatLng(-16.544564, -68.082778),
                        new LatLng(-16.544025, -68.083015),
                         new LatLng(-16.543940, -68.083747),
                         new LatLng(-16.543800, -68.085189),
                        new LatLng(-16.543887, -68.086550),
                        new LatLng(-16.543928, -68.086647),
                         new LatLng(-16.543841, -68.087350),
                        new LatLng(-16.544252, -68.088122),
                         new LatLng(-16.544489, -68.088460),
                          new LatLng(-16.545080, -68.090579),
                        new LatLng(-16.545301, -68.091405),
                        new LatLng(-16.545466, -68.091367),
                        new LatLng(-16.545430, -68.092335),
                        new LatLng(-16.545196, -68.092533),
                        new LatLng(-16.545070, -68.092546),
                        new LatLng(-16.545013, -68.092626),
                        new LatLng(-16.544794, -68.092709),
                        new LatLng(-16.544159, -68.092819),
                        new LatLng(-16.543915, -68.093017),
                        new LatLng(-16.543421, -68.093634),
                        new LatLng(-16.542897, -68.093732),
                        new LatLng(-16.541628, -68.094042),
                        new LatLng(-16.537959, -68.095501),
                        new LatLng(-16.535192, -68.096617),
                        new LatLng(-16.534782, -68.096799),
                        new LatLng(-16.531224, -68.099734),
                         new LatLng(-16.531077, -68.100163),
                          new LatLng(-16.530403, -68.101668),
                        new LatLng(-16.530279, -68.102089),
                        new LatLng(-16.529794, -68.102253),
                        new LatLng(-16.529441, -68.103186),
                        new LatLng(-16.528995, -68.104435),
                        new LatLng(-16.528124, -68.105976),
                        new LatLng(-16.527723, -68.106808),
                        new LatLng(-16.527404, -68.107205),
                        new LatLng(-16.525491, -68.110746),
                        new LatLng(-16.524845, -68.110426),
                        new LatLng(-16.524480, -68.111027),
                        new LatLng(-16.523531, -68.112824),
                        new LatLng(-16.522430, -68.114722),
                        new LatLng(-16.521994, -68.114922),
                        new LatLng(-16.520832, -68.114882),
                        new LatLng(-16.519731, -68.114619),
                        new LatLng(-16.519695, -68.114807),
                        new LatLng(-16.519793, -68.115048),
                        new LatLng(-16.520600, -68.115719),
                        new LatLng(-16.520646, -68.115955),
                        new LatLng(-16.520466, -68.116250),
                        new LatLng(-16.519551, -68.116384),
                        new LatLng(-16.517295, -68.116744),
                         new LatLng(-16.516441, -68.116862),
                         new LatLng(-16.515484, -68.117581),
                        new LatLng(-16.513879, -68.117774),
                        new LatLng(-16.513221, -68.118300),
                         new LatLng(-16.511801, -68.119105),
                        new LatLng(-16.511678, -68.119448),
                        new LatLng(-16.511637, -68.120027),
                         new LatLng(-16.508791, -68.122323),
                        new LatLng(-16.508426, -68.122555),
                        new LatLng(-16.507069, -68.123262),
                        new LatLng(-16.506373, -68.123914),
                        new LatLng(-16.505411, -68.125104),
                         new LatLng(-16.505046, -68.125313),
                          new LatLng(-16.504182, -68.125619),
                        new LatLng(-16.503837, -68.125758),
                        new LatLng(-16.503678, -68.126246),
                        new LatLng(-16.503364, -68.126707),
                        new LatLng(-16.502989, -68.127828),
                         new LatLng(-16.502974, -68.128456),
                         new LatLng(-16.502943, -68.128649),
                        new LatLng(-16.503927, -68.128445),
                        new LatLng(-16.504289, -68.128471),
                        new LatLng(-16.504526, -68.128679),
                        new LatLng(-16.502983, -68.129677),
                        new LatLng(-16.502024, -68.130591),
                        new LatLng(-16.500673, -68.132244),
                        new LatLng(-16.500265, -68.132058);


constructor() { }

  ngOnInit() {

  }


}

interface marker{
  nombre?:string;
  lati:number;
  longi:number;
}
