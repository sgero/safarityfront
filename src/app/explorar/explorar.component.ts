import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent {

  eventos : any;
  organizaciones : any;

  // constructor(private service:EventoService, private router:Router) {
  //
  //   this.service.getEventos()
  //     .subscribe(data => {this.eventos=data})
  //
  // }
  constructor(private  service:GeneralService, private router:Router) {
    this.service.getOrganizacion().subscribe(data=> {this.organizaciones=data;})
    this.service.getEvento().subscribe(data=> {this.eventos=data;})

  }

}
