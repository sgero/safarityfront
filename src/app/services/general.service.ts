import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Subject } from 'rxjs';
import { of} from 'rxjs';
import { Organizacion } from "../models/Organizacion";
import { Evento } from "../models/Evento";
import {catchError, Observable, throwError} from 'rxjs';
import {Usuario} from "../models/Usuario";
import {Auth} from "../models/Auth";
import {Participante} from "../models/Participante";

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

  private usuarioAutenticado: boolean = false;

  private usuarioAlias: string = '';


  constructor(private http: HttpClient) {
  }  // Agrega http como dependencia en el constructor


  // Método para registrar Organizacion
  registrarOrganizacion(organizacionData: Organizacion): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro-organizacion`, organizacionData);
  }


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
    return this.userRole === nav.role;

  }

  login(data: Usuario) {
    return this.http.post<Auth>(this.apiUrl + "/auth/login", data);
  }

  register(data: Participante){
    console.log('Datos enviados al backend:', data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Auth>(this.apiUrl+"/auth/register", data, { headers: headers })
  }

  // private apiUrl = '/evento/listar'; //
  //
  // // constructor(private http: HttpClient) {}
  // getEventos(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }


  // Métodos para obtener datos relacionados con Organización y Evento
  getOrganizacion(): Observable<Organizacion[]> {
    return this.http.get<Organizacion[]>(`${this.apiUrl}/organizacion/listar`);
  }

  getEvento(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/evento/listar`);
  }

  // Métodos para obtener datos relacionados con Organización y Evento
  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuario/listar`);
  }

  // Métodos para obtener datos relacionados con Organización y Evento
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuario/listar/${id}`);
  }

  // Métodos para obtener datos relacionados con Organización y Evento
  getUsuarioByAlias(alias: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuario/listar/${alias}`);
  }






}
