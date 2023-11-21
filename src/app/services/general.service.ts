import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { Organizacion } from "../models/Organizacion";
import { Evento } from "../models/Evento";
import {catchError,  throwError} from 'rxjs';
import {Usuario} from "../models/Usuario";
import {Auth} from "../models/Auth";
import {Participante} from "../models/Participante";
import {Busqueda} from "../models/Busqueda";

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

  auth: { token: string } = { token: '' };


  constructor(private http: HttpClient) {
  }  // Agrega http como dependencia en el constructor


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

  getUserAlias(): string {
    return this.usuarioAlias$.toString();
  }

  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  usuarioAutenticado$: Observable<boolean> = this.usuarioAutenticadoSubject.asObservable();

  private usuarioAliasSubject = new BehaviorSubject<string>('');
  usuarioAlias$: Observable<string> = this.usuarioAliasSubject.asObservable();


  login(data: Usuario) {
    this.usuarioAutenticadoSubject.next(true);
    this.usuarioAliasSubject.next(String(data.alias));

    return this.http.post<Auth>(this.apiUrl + "/auth/login", data);
  }

  register(data: Participante){
    console.log('Datos enviados al backend:', data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Auth>(this.apiUrl+"/auth/register", data, { headers: headers })
  }

  registerOrg(data: Organizacion){
    console.log('Datos enviados al backend:', data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Auth>(this.apiUrl+"/auth/registerOrganizacion", data, { headers: headers })
  }


  logout(token: String){
    return this.http.post<void>(`${this.apiUrl}/usuario/logout`, {token: token}).pipe(
      catchError(error => {
        console.error('Error en la solicitud de logout:', error);
        throw error; // Puedes manejar el error según tus necesidades
      })
    );
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


  //Métodos para obtener búsqueda de eventos
  getBuscar(data: Busqueda) {
    return this.http.post<Evento[]>(`${this.apiUrl}/evento/buscar`, data);
  }

  obtenerEventoPorId(eventoId: number): Observable<Evento> {
    return this.http.post<Evento>(`${this.apiUrl}/evento/mostrarCalculado`, { id: eventoId });
  }

  buscarOrganizacion(data: Busqueda) {
  return this.http.post<Organizacion[]>(`${this.apiUrl}/organizacion/buscar`, data);
}

}
