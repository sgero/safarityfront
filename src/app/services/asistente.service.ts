import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Asistente} from "../models/Asistente";


@Injectable({
  providedIn: 'root'
})
export class AsistenteService {

  constructor(private http: HttpClient) {
  }


  //ASISTENTE
  url = 'http://localhost:8080/asistente';

  getAsistente() {
    return this.http.get<Asistente[]>(this.url);
  }
}
