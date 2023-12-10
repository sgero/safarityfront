import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Evento} from "../models/Evento";

@Component({
  selector: 'app-mis-favoritos',
  templateUrl: './mis-favoritos.component.html',
  styleUrls: ['./mis-favoritos.component.css']
})
export class MisFavoritosComponent implements OnInit {
  participanteId: number | undefined; // Puedes obtener este valor desde tu lógica de autenticación o de alguna manera adecuada
  eventosFavoritos: Evento[] | undefined;

  constructor(private favoritoService: GeneralService) { }

  ngOnInit(): void {
    this.obtenerEventosFavoritos();
  }

  obtenerEventosFavoritos() {
    this.favoritoService.obtenerEventosFavoritos(this.participanteId)
      .subscribe(data => {
        this.eventosFavoritos = data;
      });
  }

  eliminarFavorito(evento: Evento) {
    this.favoritoService.eliminarFavorito(evento.id, this.participanteId)
      .subscribe(() => {
        this.obtenerEventosFavoritos();
      });

  }
}
