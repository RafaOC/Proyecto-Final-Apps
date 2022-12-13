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
  selector: 'app-quiero-ser',
  templateUrl: './quiero-ser.page.html',
  styleUrls: ['./quiero-ser.page.scss'],
})
export class QuieroSerPage implements OnInit {

  //variables del formulario
  public cedula!: string;
  public nombre!: string;
  public apellido!: string;
  public clave!: string;
  public correo!: string;
  public telefono!: string;

  //variables de informacion y validacion
  public mensaje!: string;
  public exito!: boolean;

  //inicializamos el service en private ya que solo quiero usarlo en el ts
  constructor(
    private router: Router,
    private http: HttpClient,
    private toke: MapControllerService,
    private alertController: AlertController
    ) {}

  ngOnInit() {}

  //Metodo que recibe objeto/interface de tipo login y hace todo el trabajo
  Registrar(credenciales: registrar) {

    //url de la API
    const url = 'https://adamix.net/defensa_civil/def/registro.php';

    //creamos un form data para guardar dentro las credenciales y mandarlo como body
    let data = new FormData();
    let resultado = {};
    for (let k in credenciales) {
      data.append(k, credenciales[k]);
    }

    this.http.post<any>(url, data).subscribe((res) => {

      //Almacernar el token en el service 'MapControllerService'
      this.toke.token = res.datos.token;
      //variable para almacenar el mensaje
      this.mensaje = res.mensaje;
      //Boolean para saber si las credenciales son correctas
      this.exito = res.exito;

      //validar credenciales del formulario e ir a la siguiente pagina
      if (this.exito == true) {
        this.router.navigate(['/tab-inicial/noticias']);
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
  registrar() {
    //Aqui se guarda los datos recibido del formulario
    //y se almacenan en el objeto/interface login

    const credenciales: registrar = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      clave: this.clave,
      correo: this.correo,
      telefono: this.telefono
    };
    console.log(credenciales);
    this.Registrar(credenciales);
  }
  //#endregion

  //#region Metodos para navegar a las paginas de: Registro y cambiar contraseña
  iniciarSesion() {
    this.router.navigate(['/iniciar-sesion']);
  }
  //#endregion
}
