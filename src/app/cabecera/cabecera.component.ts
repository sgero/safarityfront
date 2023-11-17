import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  constructor(private service: GeneralService, private router: Router) { }

  logout() {
    this.service.logout();

    this.router.navigate(['/inicio']);
  }

}
