import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Organizacion } from "../models/Organizacion";
import { Evento } from "../models/Evento";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from 'rxjs';
import {Organizacion} from "../models/Organizacion";
import {Evento} from "../models/Evento";
import {Usuario} from "../models/Usuario";
import {Auth} from "../models/Auth";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private apiUrl = 'http://localhost:8080';

  // Implementa un Subject para notificar cambios de rol
  private roleChangeSubject = new Subject<void>();

  // Expone un Observable para que los componentes se suscriban a los cambios de rol
  roleChange = this.roleChangeSubject.asObservable();

  // Lógica de autenticación y gestión de roles
  private userRole: string = 'usuario';  // Valor predeterminado

  constructor(private http: HttpClient) {}  // Agrega http como dependencia en el constructor

  setRoleAsAdmin() {
    this.userRole = 'ADMIN';
    this.roleChangeSubject.next();  // Notifica a los suscriptores sobre el cambio de rol
  }

  setRoleAsParticipant() {
    this.userRole = 'PARTICIPANTE';
    this.roleChangeSubject.next();
  }

  setRoleAsOrganization() {
    this.userRole = 'ORGANIZACION';
    this.roleChangeSubject.next();
  }

  getUserRole(): string {
    return this.userRole;
  }

  // Implementa la lógica para verificar si mostrar el elemento de menú según el rol
  shouldShowNavItem(nav: any): boolean {
    switch (nav.role) {
      case 'ADMIN':
        return this.userRole === 'ADMIN';
      case 'PARTICIPANTE':
        return this.userRole === 'PARTICIPANTE';
      case 'ORGANIZACION':
        return this.userRole === 'ORGANIZACION';
      default:
        return true; // Mostrar por defecto si no se especifica un rol
    }
  }

  login(data: Usuario){
    return this.http.post<Auth>(this.apiUrl+"/auth/login", data);
  }

  register(data: Participante){
    console.log('Datos enviados al backend:', data);
    return this.http.post<Auth>(this.url+"/auth/register", data)
  }

  // private apiUrl = '/evento/listar'; //
  //
  // // constructor(private http: HttpClient) {}
  // getEventos(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}
  // Métodos para obtener datos relacionados con Organización y Evento
  getOrganizacion(): Observable<Organizacion[]> {
    return this.http.get<Organizacion[]>(`${this.apiUrl}/organizacion/listar`);
  }

  getEvento(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/evento/listar`);
  }
}
