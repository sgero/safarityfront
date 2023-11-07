import { Component } from '@angular/core';
import {OrganizacionService} from "../services/organizacion.service";
import {Router} from "@angular/router";
import {Organizacion} from "../models/Organizacion";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent {

  organizaciones : any;

  constructor(private  service:OrganizacionService, private router:Router) {
    this.service.getOrganizacion().subscribe(data=> {this.organizaciones=data;})
  }

}
