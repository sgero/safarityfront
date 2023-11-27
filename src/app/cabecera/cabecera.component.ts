import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{


  usuarioAutenticado: any; // Variable para verificar si el usuario está autenticado
  usuarioAlias: string = ''; // Variable para almacenar el alias del usuario autenticado
  auth = {token: ''}
  rol : any
  constructor(private authService: GeneralService, public router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('rol')!= null){

      this.usuarioAutenticado = true;



    this.authService.usuarioAlias$.subscribe((alias) => {
      this.usuarioAlias = alias;


    });

  }

  }


  logout() {

    //this.auth.token = localStorage.getItem('token') || '';
    this.authService.logout(localStorage.getItem('token') || '');
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('info');
    //localStorage.clear();
    this.usuarioAutenticado = false;
    this.router.navigate(['/inicio']).then(()=>window.location.href='/inicio');

  }

}

