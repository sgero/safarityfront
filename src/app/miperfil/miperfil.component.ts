import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css'],

})
export class MiperfilComponent implements OnInit {

  alias = localStorage.getItem('alias');
  participante: any;

  constructor(private generalService: GeneralService, public router: Router) {

  }

  ngOnInit() {

    if (this.alias)
      this.generalService.mostrarParticipante(this.alias).subscribe(data => {
        this.participante = data;
        console.log(data)
      });

  }

}
