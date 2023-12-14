import {Component, OnInit} from '@angular/core';
import {Resenya} from "../models/Resenya";
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-escribir-r',
  templateUrl: './escribir-r.component.html',
  styleUrls: ['./escribir-r.component.css']
})
export class EscribirRComponent implements OnInit {

  resenya: Resenya = new Resenya();
  ticket:any;
  usuario: any;
  caracteresMaximos = 1000;
  constructor(private generalService: GeneralService, private router: Router) {


  }

  ngOnInit() {

    this.generalService.mostrarTicket(Number(localStorage.getItem('id_ticket') || '')).subscribe(
      data => {
        this.ticket = data;
      },
      error => {
        console.error('Error al obtener el evento:', error);
      }
    );

    this.generalService.mostrarUsuario(localStorage.getItem('alias') || '').subscribe(data => {
      this.usuario = data;
      console.log(data);
    } );

  }

  enviarResenya()
  {
  this.resenya.usuarioDTO = this.usuario;
  this.resenya.eventoDTO = this.ticket.eventoDTO;
    this.generalService.crearResenya(this.resenya).subscribe(data => {console.log(data);

      this.router.navigate(['/inicio']).then(()=>window.location.href='/inicio');
    });
    console.log('Reseña enviada');
  }


//  contarCaracteres(texto: string) {
 //   const longitud = texto.length;
 //   if (longitud > this.caracteresMaximos) {
 //     this.resenya.texto = texto.slice(0, this.caracteresMaximos);
 //   } else {
 //     this.resenya.texto = texto;
 //   }
 // }

  contarCaracteres() {
    const longitud = this.resenya.texto?.length || 0;
    if (longitud > this.caracteresMaximos) {
      this.resenya.texto = this.resenya.texto?.slice(0, this.caracteresMaximos) || '';
    }
  }



}


