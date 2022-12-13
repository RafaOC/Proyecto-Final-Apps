import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

import { reportarSituacion } from '../interfaces/reportar-situacion';
import { MapControllerService } from '../services/map-controller.service';

import { Camera, CameraResultType, CameraSource, ImageOptions } from "@capacitor/camera";

@Component({
  selector: 'app-reportar-situacion',
  templateUrl: './reportar-situacion.page.html',
  styleUrls: ['./reportar-situacion.page.scss'],
})
export class ReportarSituacionPage implements OnInit {

  public titulo!: string;
  public descripcion!: string;
  public foto: string = "fotoprueba";
  public latitud!: string;
  public longitud!: string;

  public mensaje!: string;
  public exito!: boolean;

  public base64: any = '';

  constructor(
    private http: HttpClient, 
    private toke: MapControllerService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    Camera.requestPermissions({permissions:['photos']}
    )
  }

  abrirGaleria(){
    var options:ImageOptions ={
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl
    }
    Camera.getPhoto(options).then((result) => {
      this.base64 = result.dataUrl;
    }, (err) => {
      alert(err);
    })
  }



  reporteEmitido(reporte: reportarSituacion){
    const url = 'https://adamix.net/defensa_civil/def/nueva_situacion.php';

    let data = new FormData();
    let resultado = {};
    for (let k in reporte) {
      data.append(k, reporte[k]);
    }

    if (this.longitud != null && this.latitud != null) {
      this.http.post<any>(url, data).subscribe((res) => {
        this.mensaje = res.mensaje;
        this.exito = res.exito;
  
        if (this.exito == true) {
          this.alertaCorrect();
          this.titulo = '';
          this.descripcion = '';
          this.latitud = '';
          this.longitud = '';
          console.log(this.mensaje + ', Exito = ' + this.exito);
        } else {
          this.alertaErrorApi();
          console.log('Ha ocurrido un error: ' + this.mensaje + ', Exito = ' +  this.exito);
        }
      });
    }else{
      this.alertaError();
      console.log('Ha ocurrido un error');
    }
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
      message: 'Debe llenar todos los campos',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async alertaErrorApi() {
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
