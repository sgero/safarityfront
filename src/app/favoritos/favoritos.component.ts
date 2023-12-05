import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {

  favorito={
    alias:"",
    evento:+""
  }
  evento : any;

  constructor(private generalService: GeneralService, public router: Router) {

  }

  ngOnInit() {

    this.favorito.evento = Number(localStorage.getItem('id_evento') || '');
    this.favorito.alias = localStorage.getItem('alias') || '';

    this.generalService.misFavorito(this.favorito).subscribe(data => {
      this.evento = data;
      console.log(data)
    });

  }

}
