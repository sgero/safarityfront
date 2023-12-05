import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-miseventos',
  templateUrl: './miseventos.component.html',
  styleUrls: ['./miseventos.component.css']
})
export class MiseventosComponent {

  alias = localStorage.getItem('alias');
  evento : any;

  constructor(private generalService: GeneralService, public router: Router) {

  }

  ngOnInit() {
    if (this.alias)
      this.generalService.misEventos(this.alias).subscribe(data =>{
        this.evento = data;
        console.log(data)
      });
  }

}
