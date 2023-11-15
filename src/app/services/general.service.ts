import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Organizacion} from "../models/Organizacion";
import {Evento} from "../models/Evento";
import {Usuario} from "../models/Usuario";
import {Auth} from "../models/Auth";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

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

  login(data: Usuario){
    return this.http.post<Auth>(this.url+"/auth/login", data);
  }

  // private apiUrl = '/evento/listar'; //
  //
  // // constructor(private http: HttpClient) {}
  // getEventos(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}

