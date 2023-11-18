import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Organizacion} from "../models/Organizacion";
import {Evento} from "../models/Evento";
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200', // Agrega aquí la URL de tu frontend
    }),
  };

  // //ORGANIZACION
  url = 'http://localhost:8080';

  getOrganizacion() {
    return this.http.get<Organizacion[]>(this.url+"/organizacion/listar");
  }
  getEvento() {
    return this.http.get<Evento[]>(this.url+"/evento/listar");
  }

  login(data: Usuario){
    return this.http.post<Usuario>(this.url+"/auth/login", data, this.httpOptions);
  }

  // private apiUrl = '/evento/listar'; //
  //
  // // constructor(private http: HttpClient) {}
  // getEventos(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}

