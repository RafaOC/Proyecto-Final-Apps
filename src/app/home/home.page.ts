import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  banners: string [] = ["assets/img/dc2.jpg","assets/img/dc5.jpeg","assets/img/dc3.jpeg","assets/img/dc6.jpg","assets/img/dc8.jpg"];

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
