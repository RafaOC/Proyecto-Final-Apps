import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  banners: string[] = ["assets/img/1.jpg","assets/img/2.jpg","assets/img/3.jpeg","assets/img/bmw.jpeg","assets/img/bmw2.jpg"];

  slideOpts = {
    initialSlide : 1,
    speed: 400,
    loop: true,
    autoplay: {
       delay: 4000
    }
  };

  constructor() {}

  ngOnInit(){}
}
