import { Component, OnInit } from '@angular/core';

//importaciones 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  public lista = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerServicios();
  }

  obtenerServicios(){
    this.http
    .get<any>(
      'https://adamix.net/defensa_civil/def/servicios.php'
    )
    .subscribe((res) => {
      this.lista = res.datos;
      console.log(this.lista);
    });
  }

}
