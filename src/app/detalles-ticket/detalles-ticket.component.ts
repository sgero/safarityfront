import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../services/general.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Resenya} from "../models/Resenya";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalles-ticket',
  templateUrl: './detalles-ticket.component.html',
  styleUrls: ['./detalles-ticket.component.css']
})
export class DetallesTicketComponent implements OnInit{

  ticket: any;
  mticket = {ticketID: +'', devolucion: 'SI'};
  mensaje: any;
  evento:any;

  resenya: Resenya = new Resenya();

  comprobarResenya: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service:GeneralService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const ticketID = +params['id']; // Convierte el parámetro de la URL a número

      if (ticketID) {
        this.service.mostrarTicket(ticketID).subscribe(
          data => {
            this.ticket = data;
            localStorage.setItem('id_ticket', ticketID.toString());
          },
          error => {
            console.error('Error al obtener el evento:', error);
          }
        );
      }
    });

    this.service.obtenerEventoPorId(Number(localStorage.getItem('id_evento') || '')).subscribe(
      data => {
        this.evento = data;
        this.resenya.eventoDTO = this.evento;
        this.resenya.texto = localStorage.getItem('alias') || '';

        this.service.comprobarResenyaSegunEvento(this.resenya).subscribe(data => {
          this.comprobarResenya = data;
        })
      },
      error => {
        console.error('Error al obtener el evento:', error);
      }
    );

  }

  boton: any;
  formulario: any;
  botonc: any;

  vistaFormulario(){
    if (document.getElementById('bbutton') && document.getElementById('form')){
      this.boton = document.getElementById('bbutton');
      this.boton.style.display = 'none';
      this.formulario = document.getElementById('form');
      this.formulario.style.display = 'flex';
      this.botonc = document.getElementById('cancel');
      this.botonc.style.display = 'flex';
    }
  }

  cancelar(){
    window.location.href = window.location.href;
  }
  eliminarTicket(){
    this.activatedRoute.params.subscribe(params => {
      const ticketID = +params['id'];
      this.mticket.ticketID = ticketID;
      if (ticketID){
        this.service.eliminarTicket(this.mticket).subscribe(data =>{
          this.mensaje = data;
        },
          error =>{
            console.error('Error al obtener el evento:', error);
            this.router.navigate(['/listatickets']);
            this.toastr.success('Ticket cancelado correctamente', 'Éxito');
          }
          );
      }
    });
  }


}
