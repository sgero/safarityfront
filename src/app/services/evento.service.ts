import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Evento} from "../models/Evento";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) {
  }


  //EVENTO
  url = 'http://localhost:8080/evento';

  getEventos() {
    return this.http.get<Evento[]>(this.url+"/listar");
  }

}
