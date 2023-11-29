import {Component, numberAttribute} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscador-evento',
  templateUrl: './buscador-evento.component.html',
  styleUrls: ['./buscador-evento.component.css']
})
export class BuscadorEventoComponent {

  busqueda = { busqueda: '', tipoEvento: '', tipoPago: '', fecha: +'' };
  eventos: any;

  constructor(private service:GeneralService, public router: Router) {
  }

  buscar(){
    this.service.getBuscar(this.busqueda).subscribe(data => {
        console.log(data);
        this.eventos=data;
      },
      error => {
        console.error('Error al buscar eventos:', error);
      }
    );
  }

}
