import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ticket} from "../models/Ticket";


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }


  //TICKET
  url = 'http://localhost:8080/ticket';

  getParticipante() {
    return this.http.get<Ticket[]>(this.url);
  }
}
