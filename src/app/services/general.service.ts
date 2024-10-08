import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { Organizacion } from "../models/Organizacion";
import { Evento } from "../models/Evento";
import {catchError,  throwError} from 'rxjs';
import {Usuario} from "../models/Usuario";
import {Auth} from "../models/Auth";
import {Participante} from "../models/Participante";
import {Busqueda} from "../models/Busqueda";
import {Ticket} from "../models/Ticket";
import {TicketDev} from "../models/TicketDev";
import {Mensaje} from "../models/Mensaje";
import {Favorito} from "../models/Favorito";
import {Resenya} from "../models/Resenya";


export enum RolEnum {
  ADMIN = 'ADMIN',
  ORGANIZACION = 'ORGANIZACION',
  PARTICIPANTE = 'PARTICIPANTE'
}

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private apiUrl = 'http://localhost:8080';
  rol : string | null = ''
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

  getlocal():string | null {

    if (!this.rol){
      this.rol= localStorage.getItem('rol')
    }
    return this.rol;

  }

  // Métodos para obtener datos relacionados con Organización y Evento
  getOrganizacion(): Observable<Organizacion[]> {
    return this.http.get<Organizacion[]>(`${this.apiUrl}/organizacion/listar`);
  }

  //OBSERVABLE ES PARA PETICIONES ASINCRONAS (se muestra a su tiempo sin esperar todos los datos del servidor)
  getEvento(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/evento/listar`);
  }

  getBuscar(data: Busqueda) {
    return this.http.post<Evento[]>(`${this.apiUrl}/evento/buscar`, data);
  }

  obtenerEventoPorId(eventoId: number): Observable<Evento> {
    return this.http.post<Evento>(`${this.apiUrl}/evento/mostrarCalculado`, { id: eventoId });
  }

  buscarOrganizacion(data: Busqueda) {
  return this.http.post<Organizacion[]>(`${this.apiUrl}/organizacion/buscar`, data);
  }

  crearEvento(data: Evento){
    return this.http.post<Evento>(`${this.apiUrl}/evento/crear`, data);
  }

  modificarEvento(data: Evento){
    return this.http.put<Evento>(`${this.apiUrl}/evento/modificar`, data);
  }
  modificarOrganizacion(data: Organizacion){
    return this.http.put<Organizacion>(`${this.apiUrl}/organizacion/modificar`, data);
  }

  modificarParticipante(data: Participante){
    return this.http.put<Participante>(`${this.apiUrl}/participante/modificar`, data);
  }

  crearTicket(data: Ticket){
    return this.http.post<Ticket>(`${this.apiUrl}/ticket/crear`, data);
  }


  listaTicketParticipante(data: TicketDev): Observable<Ticket[]>{
    return this.http.post<Ticket[]>(`${this.apiUrl}/ticket/listarPTickets`, data);
  }

  getPorToken(token: String): Observable<Participante>{

    return this.http.post<Participante>(`${this.apiUrl}/participante/participanteToken`, token);

  }

  mostrarTicket(ticketID: number){
    return this.http.post<Ticket>(`${this.apiUrl}/ticket/mostrarTicket`, {id: ticketID})
  }

  eliminarTicket(data: TicketDev): Observable<string>{
    return this.http.put<string>(`${this.apiUrl}/ticket/eliminar`, data)
  }

  mostrarOrganizacion(data: string){
    return this.http.post<Organizacion>(`${this.apiUrl}/organizacion/mostrarcalculado`, data)
  }

  mostrarUsuario(data: string){
    return this.http.post<Usuario>(`${this.apiUrl}/usuario/mostrarUsuario`, data)
  }

  generateTicketListPdf() {
    return this.http.get(`${this.apiUrl}/ticket/down-pdf`, { responseType: 'blob' });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  mostrarParticipante(data: string){
    return this.http.post<Participante>(`${this.apiUrl}/participante/mostrarParticipante`, data)
  }

  misEventos(data: string): Observable<Evento[]>{
    return this.http.post<Evento[]>(`${this.apiUrl}/evento/listarOrganizacion`, data)
  }


  mensajeUsuario(data: Mensaje){
    return this.http.post<void>(`${this.apiUrl}/enviar-mensaje`, data)
  }

  obtenerEventosFavoritos(participanteId: number | undefined): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/eventos/${participanteId}`);
  }

  getUserRol(): Observable<string> {
    return of(this.userRole);
  }

  // Método para mapear el nombre del rol a su valor numérico
  mapRoleNameToNumber(roleName: string): number {
    switch (roleName) {
      case RolEnum.ADMIN:
        return 0;
      case RolEnum.ORGANIZACION:
        return 1;
      case RolEnum.PARTICIPANTE:
        return 2;
      default:
        return -1; // Otra opción si el nombre del rol no coincide con ningún valor esperado
    }
  }

  favorito(data: Favorito){

    return this.http.post<void>(`${this.apiUrl}/evento/favorito`, data)

  }

  misFavorito(data: Favorito): Observable<Evento[]>{

    return this.http.post<Evento[]>(`${this.apiUrl}/evento/misFavorito`, data)

  }

  comprobarFavorito(data: Favorito): Observable<Boolean>{

    return this.http.post<Boolean>(`${this.apiUrl}/evento/comprobarFavorito`, data)

  }

  eliminarfavorito(data: Favorito){

    return this.http.post<void>(`${this.apiUrl}/evento/eliminarFavorito`, data)

  }

  aumentarSaldo(data: Participante){
    return this.http.put<Participante>(`${this.apiUrl}/participante/saldo`, data);
  }


  crearResenya(data: Resenya){
    return this.http.post<Resenya>(`${this.apiUrl}/resenya/crear`, data);
  }

  listarResenya(): Observable<Resenya[]>{
    return this.http.get<Resenya[]>(`${this.apiUrl}/resenya/listar`);
  }

  listarResenyaSegunEvento(data: number): Observable<Resenya[]>{
    return this.http.post<Resenya[]>(`${this.apiUrl}/resenya/listaresenya`, data);
  }

  comprobarResenyaSegunEvento(data: Resenya): Observable<Resenya>{
    return this.http.post<Resenya>(`${this.apiUrl}/resenya/comprobaresenya`, data);
  }

  eliminarEvento(data: Evento): Observable<String>{

    return this.http.post<string>(`${this.apiUrl}/evento/eliminar`, data);

  }

  valoracionmedia(data: Number): Observable<Float64Array>{

    return this.http.post<Float64Array>(`${this.apiUrl}/resenya/valoracionmedia`, data);

  }

}
