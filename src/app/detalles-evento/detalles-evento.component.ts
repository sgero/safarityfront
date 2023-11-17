import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService} from "../services/general.service";
import {Evento} from "../models/Evento";

@Component({
  selector: 'app-detalles-evento',
  templateUrl: './detalles-evento.component.html',
  styleUrls: ['./detalles-evento.component.css']
})
export class DetallesEventoComponent {

  evento: any;

  constructor(private route: ActivatedRoute, private eventoService: GeneralService) {
    // if (this.route.snapshot.paramMap.get('id') !== null){
    //   this.eventoService.getEventoPorId(+this.route.snapshot.paramMap.get('id')).subscribe(data => {
    //   this.evento = data;
    // });}
  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      const eventId = params['id'];
      if (eventId) {
        this.eventoService.getEventoPorId(+eventId).subscribe(
          (evento: Evento) => {
            this.evento = evento;
          },
          error => {
            console.error('Error al obtener el evento:', error);
          }
        );
      } else {
        console.error('ID de evento no válido.');
      }
    });
  }
}

