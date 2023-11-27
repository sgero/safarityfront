import { Component } from '@angular/core';
import {Evento} from "../models/Evento";
import {ActivatedRoute} from "@angular/router";
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-detalles-evento',
  templateUrl: './detalles-evento.component.html',
  styleUrls: ['./detalles-evento.component.css']
})
export class DetallesEventoComponent {

  evento: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventoService:GeneralService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const eventoId = +params['id']; // Convierte el parámetro de la URL a número

      localStorage.setItem('id_evento', String(eventoId))

      if (eventoId) {
        this.eventoService.obtenerEventoPorId(eventoId).subscribe(
          data => {
            this.evento = data;
          },
          error => {
            console.error('Error al obtener el evento:', error);
          }
        );
      }
    });
  }

}
