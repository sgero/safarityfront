import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { Organizacion } from "../models/Organizacion";
import { Evento } from "../models/Evento";
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
  private userRole: string = 'rol';  // Valor predeterminado


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

  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  usuarioAutenticado$: Observable<boolean> = this.usuarioAutenticadoSubject.asObservable();

  private usuarioAliasSubject = new BehaviorSubject<string>('');
  usuarioAlias$: Observable<string> = this.usuarioAliasSubject.asObservable();


  login(data: Usuario) {
    this.usuarioAutenticadoSubject.next(true);
    this.usuarioAliasSubject.next('nombre');
    return this.http.post<Auth>(this.apiUrl + "/auth/login", data);
  }


  logout(token: String){
    return this.http.post<void>(`${this.apiUrl}/auth/logout`, {token: token});
  }


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
