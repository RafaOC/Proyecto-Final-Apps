import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albergues',
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss'],
})
export class AlberguesPage implements OnInit {

  public lista:any;

  constructor(private http: HttpClient) {
    this.cargar();
   }

  cargar(){
    this.http
    .get<any>(
      'https://adamix.net/defensa_civil/def/albergues.php'
    )
    .subscribe((res)=>{
      console.log(res);
      this.lista = res.datos;

      for(var i = 0; i < this.lista.length; i++){
        if(this.lista.capacidad == ""){
          this.lista.capacidad = "Cantidad desconocida";
        }
      }
    });
  }

  ngOnInit() {
  }

}
