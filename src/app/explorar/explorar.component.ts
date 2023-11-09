import { Component } from '@angular/core';
import {ConectionService} from "../service/conection.service";
import {Router} from "@angular/router";
import {OrganizacionService} from "../services/organizacion.service";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent {

  eventos:any;
  organizaciones : any;

  constructor(private service:ConectionService, private router:Router) {

    this.service.getEventos()
      .subscribe(data => {this.eventos=data})

  }
  // constructor(private  service:OrganizacionService, private router:Router) {
  //   this.service.getOrganizacion().subscribe(data=> {this.organizaciones=data;})
  // }




}
