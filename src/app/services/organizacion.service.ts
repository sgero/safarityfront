import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Organizacion} from "../models/Organizacion";
import {Evento} from "../models/Evento";


@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  //private url = 'http://localhost:8080;'
  constructor(private http: HttpClient) {
  }



  // //ORGANIZACION
  url = 'http://localhost:8080';

  getOrganizacion() {
    return this.http.get<Organizacion[]>(this.url+"/organizacion/listar");
  }
  getEvento() {
    return this.http.get<Evento[]>(this.url+"/evento/listar");
  }
}
