import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

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

  constructor(private service: GeneralService, private router: Router) {
    this.service.getEvento().subscribe(data => {
      this.eventos = data;
    })

  }
  busqueda = { busqueda: '', tipoEvento: '', tipoPago: '', fecha: +'' };

}
