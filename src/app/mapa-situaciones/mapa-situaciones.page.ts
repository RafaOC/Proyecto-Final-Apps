import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { misSituaciones } from '../interfaces/mis-situaciones-token';

import { Marker } from '../interfaces/marker.model';
import { MapControllerService } from '../services/map-controller.service';

import * as L from 'leaflet';
import { Icon } from 'leaflet';

@Component({
  selector: 'app-mapa-situaciones',
  templateUrl: './mapa-situaciones.page.html',
  styleUrls: ['./mapa-situaciones.page.scss'],
})
export class MapaSituacionesPage implements OnInit {
  public nombre: string = ""; 
  public apellido: string = ""; 
  public latitud: number = 18.586394107372797;
  public longitud: number = -68.38744827924789;
  public pais: string = '';
  public map!: L.Map;

  public ubicaSitua!: [];

  constructor(
    private http: HttpClient, 
    private toke: MapControllerService,
  ) { }

  ngOnInit() {
  }

  aqui(tokenSituaciones?: misSituaciones){

    const url = 'https://adamix.net/defensa_civil/def/situaciones.php';
    let data = new FormData();
    let resultado = {};
    for (let k in tokenSituaciones) {
      data.append(k, tokenSituaciones[k]);
    }

    const greenIcon = new Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    this.http.post<any>(url, data).subscribe((res) => {
        console.log(res.exito);
        console.log(res);

        for (let i = 0; i < res.datos.length; i++) {
          // this.ubicaSitua = res.datos[i];
          console.log(res.datos[i]);
          const albergues = res.datos;
          for (let alb of albergues) {
            var marker = L.marker([alb.latitud, alb.longitud], {icon: greenIcon}).addTo(this.map);
            marker
              .bindPopup(
                '<b>Codigo:</b> ' +
                  alb.id +
                  '<br><b>Voluntario:</b> ' +
                  alb.voluntario +
                  '<br><b>Descripcion:</b> ' +
                  alb.descripcion +
                  '<br><b>Foto:</b> ' +
                  alb.foto +
                  '<br><b>Estado:</b> ' +
                  alb.estado +
                  '<br><b>Fecha:</b> ' +
                  alb.fecha +
                  '.'
              ).openPopup();
          }
        }
      });
  }

  ionViewDidEnter() {
    this.map = L.map('map').setView([18.518502, -71.202297], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }

  llamar(){
    const tokenSituaciones: misSituaciones = {
      token: this.toke.token
    };
    this.aqui(tokenSituaciones);
  }


}
