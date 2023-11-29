import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent implements OnInit {

  ngOnInit(): void {
    const rol = localStorage.getItem('rol');

    // Aplica lógica específica del rol
    if (rol === 'admin') {
      // Usuario con rol de administrador
      document.body.classList.add('admin-panel');
    } else {
      // Usuario con otro rol
      document.body.classList.add('user-panel');
    }
  }

  organizaciones: any;

  constructor(private service: GeneralService, private router: Router) {
    this.service.getOrganizacion().subscribe(data => {
      this.organizaciones = data;
    })
  }
}
