import {Component, numberAttribute} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crearticket',
  templateUrl: './crearticket.component.html',
  styleUrls: ['./crearticket.component.css']
})
export class CrearticketComponent {

  ticket= {
    dineroAportado: +'',
    fecha:'',
    participanteDTO: BigInt(''),
    eventoDTO: BigInt(''),
    asistenteDTO:{
      nombre:'',
      apellidos:'',
      direccion:'',
      email:'',
      dni:'',
      telefono:'',
      fecha_nacimiento:''
    }
  }

  ticketmostrar : any;

  constructor(private service:GeneralService, public router: Router) {
  }

  crear(){

    this.ticket.eventoDTO = BigInt(localStorage.getItem('id_evento') || '');
    this.ticket.participanteDTO = BigInt(1);

    this.service.crearTicket(this.ticket).subscribe(data => {console.log(data);
      this.ticketmostrar = data;
      this.router.navigate(['/inicio']);
    });
  }

}
