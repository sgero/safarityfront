import {Component, OnInit} from '@angular/core';
import {Evento} from "../models/Evento";
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-detalles-evento',
  templateUrl: './detalles-evento.component.html',
  styleUrls: ['./detalles-evento.component.css']
})
export class DetallesEventoComponent implements OnInit{

  evento: any;
  favorito={
    alias:"",
    evento:+""
  }
  comprobarEvento: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventoService:GeneralService,
    private router: Router,
  ) {}

  ngOnInit() {

    this.favorito.evento = Number(localStorage.getItem('id_evento') || '');
    this.favorito.alias = localStorage.getItem('alias') || '';

    this.eventoService.comprobarFavorito(this.favorito).subscribe(
      data => {
        this.comprobarEvento = data;
      },
      error => {
        console.error('Error:', error);
      }
    );

    this.activatedRoute.params.subscribe(params => {
      const eventoId = +params['id']; // Convierte el parámetro de la URL a número

      localStorage.setItem('id_evento', String(eventoId))

      if (eventoId) {
        this.eventoService.obtenerEventoPorId(eventoId).subscribe(
          data => {
            this.evento = data;
            localStorage.setItem('precio', String(data.precio));
          },
          error => {
            console.error('Error al obtener el evento:', error);
          }
        );
      }
    });
  }

  enviarfavorito(){

    this.favorito.evento = Number(localStorage.getItem('id_evento') || '');
    this.favorito.alias = localStorage.getItem('alias') || '';

    this.eventoService.favorito(this.favorito).subscribe(
      data => {
        this.evento = data;
        this.router.navigate(['/favoritos']);
      },
      error => {
        console.error('Error:', error);
      }
    );

  }

  eliminarfavorito(){

    this.favorito.evento = Number(localStorage.getItem('id_evento') || '');
    this.favorito.alias = localStorage.getItem('alias') || '';

    this.eventoService.eliminarfavorito(this.favorito).subscribe(
      data => {
        this.evento = data;
        this.router.navigate(['/inicio']);
      },
      error => {
        console.error('Error:', error);
      }
    );

  }

}
