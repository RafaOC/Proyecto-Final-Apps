import { Component, OnInit } from '@angular/core';

//importaciones 
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  public listaVideos!: any[];
  public link2 = 'https://www.youtube.com/embed/';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.obtenerVideos();
  }

  transform(url2: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link2+url2);
  }

  obtenerVideos(){
    this.http
    .get<any>(
      'https://adamix.net/defensa_civil/def/videos.php'
    )
    .subscribe((res) => {
      console.log(res);
      this.listaVideos = res.datos;
    });
  }

}
