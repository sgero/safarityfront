import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalles-organizacion',
  templateUrl: './detalles-organizacion.component.html',
  styleUrls: ['./detalles-organizacion.component.css']
})
export class DetallesOrganizacionComponent implements OnInit{
  alias = localStorage.getItem('alias');
  organizacion: any;
  constructor(private service: GeneralService, public router: Router) {
  }

  ngOnInit() {
    if (this.alias)
    this.service.mostrarOrganizacion(this.alias).subscribe(data =>{
      this.organizacion = data;
      console.log(data)
    });
  }

}
