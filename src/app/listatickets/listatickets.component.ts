import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";
import {TicketDev} from "../models/TicketDev";

@Component({
  selector: 'app-listatickets',
  templateUrl: './listatickets.component.html',
  styleUrls: ['./listatickets.component.css']
})
export class ListaticketsComponent {

  TicketDev = {tokenP: localStorage.getItem('token')}
  tickets: any;
  constructor(private service:GeneralService, public router: Router) {
    this.service.listaTicketParticipante(this.TicketDev).subscribe(data =>{
      this.tickets = data;
      console.log(data);
    })
  }


}
