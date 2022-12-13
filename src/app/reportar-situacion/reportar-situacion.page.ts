import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

import { reportarSituacion } from '../interfaces/reportar-situacion';
import { MapControllerService } from '../services/map-controller.service';

@Component({
  selector: 'app-reportar-situacion',
  templateUrl: './reportar-situacion.page.html',
  styleUrls: ['./reportar-situacion.page.scss'],
})
export class ReportarSituacionPage implements OnInit {

  public titulo!: string;
  public descripcion!: string;
  public foto!: string;
  public latitud!: string;
  public longitud!: string;

  public mensaje!: string;
  public exito!: boolean;

  constructor(
    private http: HttpClient, 
    private toke: MapControllerService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  reporteEmitido(reporte: reportarSituacion){
    const url = 'https://adamix.net/defensa_civil/def/nueva_situacion.php';

    let data = new FormData();
    let resultado = {};
    for (let k in reporte) {
      data.append(k, reporte[k]);
    }
    
    this.http.post<any>(url, data).subscribe((res) => {
      this.mensaje = res.mensaje;
      this.exito = res.exito;

      if (this.exito == true) {
        this.alertaCorrect();
        this.titulo = '';
        this.descripcion = '';
        this.foto = '';
        this.latitud = '';
        this.longitud = '';
        console.log(this.mensaje + ', Exito = ' + this.exito);
      } else {
        this.alertaError();
        console.log('Ha ocurrido un error: ' + this.mensaje + ', Exito = ' +  this.exito);
      }
    });

  }

  reportarSituacion() {
    const reporte: reportarSituacion = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      foto: this.foto,
      latitud: this.latitud,
      longitud: this.longitud,
      token: this.toke.token
    };
    this.reporteEmitido(reporte);
  }

  async alertaError() {
    const alert = await this.alertController.create({
      header: 'Ha ocurrido un error',
      message: this.mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async alertaCorrect() {
    const alert = await this.alertController.create({
      header: 'Reporte correcto',
      message: this.mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
