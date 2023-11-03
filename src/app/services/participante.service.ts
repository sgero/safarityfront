import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Participante} from "../models/Participante";


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) {
  }


  //PARTICIPANTE
  url = 'http://localhost:8080/participante';

  getParticipante() {
    return this.http.get<Participante[]>(this.url);
  }
}
