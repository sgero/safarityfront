import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recaudacion',
  templateUrl: './recaudacion.component.html',
  styleUrls: ['./recaudacion.component.css']
})
export class RecaudacionComponent implements OnInit {
  alias = localStorage.getItem('alias');
  organizacion: any;

  constructor(private service: GeneralService, public router: Router) {
  }

  ngOnInit() {
    if (this.alias)
      this.service.mostrarOrganizacion(this.alias).subscribe(data => {
        this.organizacion = data;
        console.log(data)
      });
  }
}
