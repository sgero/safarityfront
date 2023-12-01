import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  usuarioAutenticado: any; // Variable para verificar si el usuario está autenticado
  auth = {token: ''}

  constructor(
    private generalService: GeneralService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    // logout()
    // {

      //this.auth.token = localStorage.getItem('token') || '';
      this.generalService.logout(localStorage.getItem('token') || '');
      localStorage.removeItem('token');
      localStorage.removeItem('rol');
      localStorage.removeItem('info');
      localStorage.removeItem('alias');
      //localStorage.clear();
      this.usuarioAutenticado = false;
      this.router.navigate(['/inicio']).then(() => window.location.href = '/inicio');
    //
    // }

  }
}
