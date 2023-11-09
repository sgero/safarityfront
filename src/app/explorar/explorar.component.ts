import { Component } from '@angular/core';
import {ConectionService} from "../services/conection.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent {

  eventos:any;

  constructor(private service:ConectionService, private router:Router) {

    this.service.getEventos()
      .subscribe(data => {this.eventos=data})

  }

}
