import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {interval} from "rxjs";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  eventos: any = [];
  mouseSobreEvento: boolean = false;

  constructor(private service: GeneralService, private router: Router, private route: ActivatedRoute,) {
  }

  //Me suscribo al evento y lo traigo para mostrarlo
  ngOnInit(): void {
    this.service.getEvento().subscribe(data => {
      this.eventos = data;
      // this.service.getEventos().subscribe(data => {
      //   this.eventos = data;
      // });

      //llamar al metodo getEventos() del servicio para mostrar eventos por pantalla
      // getEventos(){
      //   this.service.getEventos().subscribe(data=>{
      //     this.eventos=data;
      //   })
      // }
    // });
    // this.service.getEvento().subscribe(data=>{
    //   this.eventos=data;



      //HAGO MÉTODOS PARA MOSTRAR 5 EVENTOS ALEATORIOS EN EL INDEX.HTML
      this.mostrarEventosAleatorios();
      interval(5000).subscribe(() => {
        if (!this.mouseSobreEvento) {
        this.mostrarEventosAleatorios();}
      });
    });
  }

  mostrarEventosAleatorios() {
    const eventosAleatorios = this.obtener5EventosAleatorios();
    this.eventos = eventosAleatorios;
  }

  haciaevento(){


  }

  obtener5EventosAleatorios(): any[] {
    const eventosAleatorios = this.eventos.sort(() => Math.random() - 0.5).slice(0, 5);
    return eventosAleatorios;
  }


  pausarActualizacion() {
    this.mouseSobreEvento = true;
  }

  reanudarActualizacion() {
    this.mouseSobreEvento = false;
  }



}

