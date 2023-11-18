import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent implements OnInit {

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

  eventos: any;
  organizaciones: any;

  constructor(private service: GeneralService, private router: Router) {
    this.service.getOrganizacion().subscribe(data => {
      this.organizaciones = data;
    })
    this.service.getEvento().subscribe(data => {
      this.eventos = data;
    })

//   constructor(private  service:OrganizacionService, private router:Router) {
//     this.service.getOrganizacion().subscribe(data=> {this.organizaciones=data;})
// }



  }

}
