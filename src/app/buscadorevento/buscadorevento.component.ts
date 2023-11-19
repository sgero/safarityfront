import {Component, numberAttribute} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-buscadorevento',
  templateUrl: './buscadorevento.component.html',
  styleUrls: ['./buscadorevento.component.css']
})
export class BuscadoreventoComponent {


  busqueda = {busqueda: '', tipoEvento: '', tipoPago: '', fecha: +''};
  eventos: any;

  constructor(private service: GeneralService, public router: Router) {
  }

  buscar() {
    this.service.getBuscar(this.busqueda).subscribe(data => {
        console.log(data);
      },
      error => {
        console.error('Error al buscar eventos:', error);
      }
    );
  }


}
