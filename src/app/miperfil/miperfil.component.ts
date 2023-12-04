import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css'],

})
export class MiperfilComponent implements OnInit {
  // usuario: any;
  //
  // constructor(private route: ActivatedRoute, private generalService: GeneralService) {}
  //
  // // ngOnInit(): void {
  // //   const id = +this.route.snapshot.params['id'];
  // //   this.generalService.obtenerPerfil(id).subscribe((data) => {
  // //     this.usuario = data;
  // //   });
  // // }
  //
  //
  // ngOnInit(): void {
  //   const id = +this.route.snapshot.params['id'];
  //   this.generalService.obtenerPerfil(id).subscribe((data) => {
  //     this.usuario = data;
  //   });
  // }

  alias = localStorage.getItem('alias');
  participante: any;

  constructor(private generalService: GeneralService, public router: Router) {

  }

  ngOnInit() {
    if (this.alias)
      this.generalService.mostrarParticipante(this.alias).subscribe(data =>{
        this.participante = data;
        console.log(data)
      });
  }


}
