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

  crearEvento(data: Evento){
    return this.http.post<Evento>(`${this.apiUrl}/evento/crear`, data);
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

  generateTicketListPdf() {
    return this.http.get(`${this.apiUrl}/ticket/down-pdf`, { responseType: 'blob' });
  }


  obtenerPerfil(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
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


  agregarFavorito(participanteId: number, eventoId: number): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { participanteId, eventoId };

    return this.http.post<string>(`${this.apiUrl}/agregar`, body, { headers });
  }

  obtenerEventosFavoritos(participanteId: number): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/eventos/${participanteId}`);
  }

  agregarResenya(participanteId: number, eventoId: number, resenya: string): Observable<string> {
    const params = new HttpParams().set('participanteId', participanteId.toString()).set('eventoId', eventoId.toString());
    return this.http.post<string>(`${this.apiUrl}/resenyas`, params, { params: { resenya } });
  }

  favorito(data: Favorito){

    return this.http.post<void>(`${this.apiUrl}/evento/favorito`, data)

  }

  misFavorito(data: Favorito): Observable<Evento[]>{

    return this.http.post<Evento[]>(`${this.apiUrl}/evento/misFavorito`, data)

  }

}
