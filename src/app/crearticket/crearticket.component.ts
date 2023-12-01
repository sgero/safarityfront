import {Component, numberAttribute, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";
import {Participante} from "../models/Participante";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-crearticket',
  templateUrl: './crearticket.component.html',
  styleUrls: ['./crearticket.component.css']
})
export class CrearticketComponent implements OnInit{

  ticket= {
    dineroAportado: +'',
    fecha:'',
    participanteDTO: +'',
    eventoDTO: +'',
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

  participante : any;

  constructor(private service:GeneralService, public router: Router) {
  }

  crear(){

    this.ticket.eventoDTO = Number((localStorage.getItem('id_evento') || ''));
    this.ticket.participanteDTO = this.participante.id;

    this.ticket.asistenteDTO.nombre = (<HTMLInputElement>document.getElementById('nombre')).value
    this.ticket.asistenteDTO.apellidos = (<HTMLInputElement>document.getElementById('apellidos')).value
    this.ticket.asistenteDTO.direccion = (<HTMLInputElement>document.getElementById('direccion')).value
    this.ticket.asistenteDTO.email = (<HTMLInputElement>document.getElementById('email')).value
    this.ticket.asistenteDTO.dni = (<HTMLInputElement>document.getElementById('dni')).value
    this.ticket.asistenteDTO.telefono = (<HTMLInputElement>document.getElementById('telefono')).value
    this.ticket.asistenteDTO.fecha_nacimiento = (<HTMLInputElement>document.getElementById('fecha_nacimiento')).value

    this.service.crearTicket(this.ticket).subscribe(data => {console.log(data);
      this.ticketmostrar = data;
      this.router.navigate(['/inicio']);
    });
  }

  private formatearFecha(fecha: string): string {
    const partes = fecha.split('/');
    if (partes.length === 3) {
      const [dia, mes, año] = partes;
      // Formato ISO: YYYY-MM-DD
      return `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    } else {
      // Si el formato no es válido, devolver la fecha original
      return fecha;
    }
  }

  ngOnInit() {

    if (localStorage.getItem('token') != null){

      this.service.getPorToken(localStorage.getItem('token') || '').subscribe(
        data => {
          this.participante = data;
        },
        error => {
          console.error('Error al obtener el Participante:', error);
        }
      );}

  }

  autocompletar(){

      let check = (<HTMLInputElement>(document.getElementById("auto")))

      if (check.checked && this.participante != null){

        (<HTMLInputElement>(document.getElementById("nombre"))).value = this.participante.nombre;
        (<HTMLInputElement>(document.getElementById("nombre"))).readOnly = true;
        (<HTMLInputElement>(document.getElementById("apellidos"))).value = this.participante.apellidos;
        (<HTMLInputElement>(document.getElementById("apellidos"))).readOnly = true;
        (<HTMLInputElement>(document.getElementById("direccion"))).value = this.participante.direccion;
        (<HTMLInputElement>(document.getElementById("direccion"))).readOnly = true;
        (<HTMLInputElement>(document.getElementById("email"))).value = this.participante.email;
        (<HTMLInputElement>(document.getElementById("email"))).readOnly = true;
        (<HTMLInputElement>(document.getElementById("dni"))).value = this.participante.dni;
        (<HTMLInputElement>(document.getElementById("dni"))).readOnly = true;
        (<HTMLInputElement>(document.getElementById("telefono"))).value = this.participante.telefono;
        (<HTMLInputElement>(document.getElementById("telefono"))).readOnly = true;
        (<HTMLInputElement>(document.getElementById("fecha_nacimiento"))).value = this.formatearFecha(this.participante.fecha_nacimiento);
        (<HTMLInputElement>(document.getElementById("fecha_nacimiento"))).readOnly = true;

      }else{

        (<HTMLInputElement>(document.getElementById("nombre"))).value = '';
        (<HTMLInputElement>(document.getElementById("nombre"))).readOnly = false;
        (<HTMLInputElement>(document.getElementById("apellidos"))).value = '';
        (<HTMLInputElement>(document.getElementById("apellidos"))).readOnly = false;
        (<HTMLInputElement>(document.getElementById("direccion"))).value = '';
        (<HTMLInputElement>(document.getElementById("direccion"))).readOnly = false;
        (<HTMLInputElement>(document.getElementById("email"))).value = '';
        (<HTMLInputElement>(document.getElementById("email"))).readOnly = false;
        (<HTMLInputElement>(document.getElementById("dni"))).value = '';
        (<HTMLInputElement>(document.getElementById("dni"))).readOnly = false;
        (<HTMLInputElement>(document.getElementById("telefono"))).value = '';
        (<HTMLInputElement>(document.getElementById("telefono"))).readOnly = false;
        (<HTMLInputElement>(document.getElementById("fecha_nacimiento"))).value = '';
        (<HTMLInputElement>(document.getElementById("fecha_nacimiento"))).readOnly = false;

    }

      if (this.participante == null){

        alert("No esta logueado")
        check.checked = false;

      }

  }
}
