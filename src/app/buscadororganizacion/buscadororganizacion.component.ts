import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscadororganizacion',
  templateUrl: './buscadororganizacion.component.html',
  styleUrls: ['./buscadororganizacion.component.css']
})
export class BuscadororganizacionComponent {
  busqueda = {busqueda: ''};
  organizaciones: any;

  constructor(private service: GeneralService, public router: Router) {
  }

  buscar() {
    this.service.buscarOrganizacion(this.busqueda).subscribe(data => {
        console.log(data);
        this.organizaciones = data;
      },
      error => {
        console.error('Error al buscar organizacion:', error);
      }
    );
  }
}
