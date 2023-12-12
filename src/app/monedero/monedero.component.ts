import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-monedero',
  templateUrl: './monedero.component.html',
  styleUrls: ['./monedero.component.css']
})
export class MonederoComponent implements  OnInit{

  alias = localStorage.getItem('alias');
  participante: any;
  numero: any;

  constructor(private generalService: GeneralService, public router: Router) {

  }

  ngOnInit() {
    if (this.alias)
      this.generalService.mostrarParticipante(this.alias).subscribe(data =>{
        this.participante = data;
        console.log(data)
      });
  }
  Saldo(){
    if (this.numero >= 0){
      this.participante.saldo = this.participante.saldo + this.numero;
      this.generalService.aumentarSaldo(this.participante).subscribe(data =>{
        console.log(data)
          // Redirigir a la misma URL
          window.location.href = window.location.href;

        }
      )
    }
  }
}
