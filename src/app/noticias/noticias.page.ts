import { Component, OnInit } from '@angular/core';

//importaciones 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  public listaNoticias = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerNoticias();
  }

  obtenerNoticias(){
    this.http
    .get<any>(
      'https://adamix.net/defensa_civil/def/noticias.php'
    )
    .subscribe((res) => {
      this.listaNoticias = res.datos;
      console.log(this.listaNoticias);
    });
  }

}
