import { Component, OnInit } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  eventos:any = [];
  constructor(private service:GeneralService, private router:Router) { }

  //Me suscribo al evento y lo traigo para mostrarlo
  ngOnInit(): void {
    this.service.getEvento().subscribe(data=> {this.eventos=data;})
  }
}
