import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Organizacion} from "../models/Organizacion";


@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  constructor(private http: HttpClient) {
  }



  //ORGANIZACION
  url = 'http://localhost:8080/organizacion';

  getOrganizacion() {
    return this.http.get<Organizacion[]>(this.url);
  }
}
