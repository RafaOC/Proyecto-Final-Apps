import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

//Importacion de la interface login
import { registrar } from '../interfaces/registrar';
//importacion del service MapControllerService(me dio pereza crear otro service)
//el cual almacena el token y este mismo se puede usar en cualquier lado
import { MapControllerService } from '../services/map-controller.service';

@Component({
  selector: 'app-cambiar-pass',
  templateUrl: './cambiar-pass.page.html',
  styleUrls: ['./cambiar-pass.page.scss'],
})
export class CambiarPassPage implements OnInit {

  public mensaje!: string;
  public exito!: boolean;

  public clave_anterior!: string;
  public clave_nueva!: string;
  public token!: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toke: MapControllerService,
    private alertController: AlertController
    ) {}

  ngOnInit() {
  }

  cambiarPass(credenciales: registrar) {

    //url de la API
    const url = 'https://adamix.net/defensa_civil/def/cambiar_clave.php';

    //creamos un form data para guardar dentro las credenciales y mandarlo como body
    let data = new FormData();
    let resultado = {};
    for (let k in credenciales) {
      data.append(k, credenciales[k]);
    }

    this.http.post<any>(url, data).subscribe((res) => {

      //Almacernar el token en el service 'MapControllerService'
      //this.toke.token = res.datos.token;
      this.token = this.toke.token;
      console.log(this.token + " " + "TOKEN");
      //variable para almacenar el mensaje
      this.mensaje = res.mensaje;
      //Boolean para saber si las credenciales son correctas
      this.exito = res.exito;

      //validar credenciales del formulario e ir a la siguiente pagina
      if (this.exito == true) {
        this.router.navigate(['/iniciar-sesion']);
        console.log(this.mensaje + ' registrado exitosamente! ' + ', Exito = ' + this.exito);
      } else {
        this.alerta();
        console.log('Ha ocurrido un error: ' + this.mensaje + ', Exito = ' +  this.exito);
      }

    });
  }

  //#region Alerta
  async alerta() {
    const alert = await this.alertController.create({
      header: 'Ha ocurrido un error',
      message: this.mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
  //#endregion

  //#region Metodo para iniciar sesion
  cambiarPassword() {
    //Aqui se guarda los datos recibido del formulario
    //y se almacenan en el objeto/interface login

    const credenciales: registrar = {
      clave_anterior: this.clave_anterior,
      clave_nueva: this.clave_nueva,
      token:this.toke.token
    };
    console.log(credenciales);
    this.cambiarPass(credenciales);
  }
  //#endregion

  //#region Metodos para navegar a las paginas de: Registro y cambiar contraseña
  iniciarSesion() {
    this.router.navigate(['/iniciar-sesion']);
  }
  //#endregion
}

