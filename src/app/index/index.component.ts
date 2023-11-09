import { Component, OnInit } from '@angular/core';
import {EventoService} from "../services/evento.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  eventos:any = [];
  constructor(private service:EventoService, private router:Router) { }

  //Me suscribo al evento y lo traigo para mostrarlo
  ngOnInit(): void {
    this.service.getEventos().subscribe(data => {
      this.eventos = data;
    });
  }
}
