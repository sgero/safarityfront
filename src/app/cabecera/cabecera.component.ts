import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Observable} from "rxjs";
import {Auth} from "../models/Auth";
import {getTokenAtPosition} from "@angular/compiler-cli/src/ngtsc/util/src/typescript";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{


  usuarioAutenticado: boolean = false; // Variable para verificar si el usuario está autenticado
  usuarioAlias: string = ''; // Variable para almacenar el alias del usuario autenticado
  auth = {token: ''}


  constructor(private authService: GeneralService, public router: Router) {}

  ngOnInit(): void {
    this.authService.usuarioAutenticado$.subscribe((autenticado) => {
      this.usuarioAutenticado = autenticado;
    });

    this.authService.usuarioAlias$.subscribe((alias) => {
      this.usuarioAlias = alias;
    });
  }

  logout() {

    //this.auth.token = localStorage.getItem('token') || '';
    this.authService.logout(localStorage.getItem('token') || '');
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('info');
    //localStorage.clear();
    this.router.navigate(['/inicio']);

  }

}

