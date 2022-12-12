import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapControllerService {

  //aqui se almacena el token y es posibe usar en cualquier otro lado simplemente importando este servicio
  public token!: string;

  constructor(private http: HttpClient) { }

}
