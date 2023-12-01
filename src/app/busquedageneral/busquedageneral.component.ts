import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-busquedageneral',
  templateUrl: './busquedageneral.component.html',
  styleUrls: ['./busquedageneral.component.css']
})
export class BusquedageneralComponent implements OnInit{
  eventos: any;
  organizaciones: any;
  busqueda = {busqueda:'', tipoPago:'',tipoEvento: '',fecha: +''};

  constructor(private service: GeneralService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.busqueda.busqueda = params['busqueda'];
      if (this.busqueda){
        this.service.buscarOrganizacion(this.busqueda).subscribe(data =>{console.log(data)
          this.organizaciones = data;
        },
          error => {
            console.error('Error al obtener el organizacion:', error);
          }
        );
        this.service.getBuscar(this.busqueda).subscribe(data =>{console.log()
          this.eventos = data;
        },
          error => {
            console.error('Error al obtener el evento:', error);
          }
        );
      }
    });
  }

}
