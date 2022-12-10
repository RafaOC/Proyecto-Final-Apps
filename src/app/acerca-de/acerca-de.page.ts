import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  reylis = false;
  rafael = false;
  euris = false;

  constructor() { }

  ngOnInit() {
  }
  reylisFun(){
    this.reylis = true;
    this.rafael = false;
    this.euris = false;
  }

  rafaelFun(){
    this.rafael= true;
    this.reylis = false;
    this.euris = false;
  }

  eurisFun(){
    this.euris = true;
    this.reylis = false;
    this.rafael = false;
  }

  ocultar(){
    this.euris = false;
    this.reylis = false;
    this.rafael = false;
  }

}
