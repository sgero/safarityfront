import { Component } from '@angular/core';
import {ConectionService} from "../service/conection.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  // eventos:any;
  //
  // constructor(private service:ConectionService, private router:Router) {
  //
  //   this.service.getEventos()
  //     .subscribe(data => {this.eventos=data})
  //
  // }

}
