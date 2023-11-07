import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from "../models/Usuario";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }



  //USUARIO
  url = 'http://localhost:8080/usuario';

  getUsuario() {
    return this.http.get<Usuario[]>(this.url);
  }
}
