import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medidas-prev',
  templateUrl: './medidas-prev.page.html',
  styleUrls: ['./medidas-prev.page.scss'],
})
export class MedidasPrevPage implements OnInit {

  constructor(private http: HttpClient) {
    this.cargar();
   }

  ngOnInit() {
  }

  public lista:any;

  cargar(){
    this.http
    .get<any>(
      'https://adamix.net/defensa_civil/def/medidas_preventivas.php'
    )
    .subscribe((res)=>{
      console.log(res);
      this.lista = res.datos;
    });
  }
}
