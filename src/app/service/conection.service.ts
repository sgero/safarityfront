
import { HttpClient } from "@angular/common/http";
import { Evento } from "../modelo/Evento"
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/evento/listar'

  getEventos(){

    return this.http.get<Evento[]>(this.Url)

  }

}
