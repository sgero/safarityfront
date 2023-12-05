import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent {


  Mensaje = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  constructor(private http: HttpClient, private service: GeneralService, private router: Router, private toastr: ToastrService) { }

  // enviarFormulario() {
  //   // Enviar datos al backend
  //   this.service.mensajeUsuario(this.Mensaje)
  //     .subscribe(
  //       (response) => {
  //         console.log('Mensaje enviado correctamente', response);
  //         this.router.navigate(['/inicio']);
  //       },
  //       (error) => {
  //         console.error('Error al enviar el mensaje', error);
  //       }
  //     );
  // }


  enviarFormulario() {
    // Enviar datos al backend
    this.service.mensajeUsuario(this.Mensaje).subscribe(
      (response) => {
        console.log('Mensaje enviado correctamente', response);
        this.toastr.success('Mensaje enviado correctamente', 'Éxito');
        setTimeout(() => {
          this.router.navigate(['/inicio']);
        }, 1500); // 1500 milisegundos (1.5 segundos)
      },
      (error) => {
        console.error('Error al enviar el mensaje', error);
        this.toastr.error('Error al enviar el mensaje', 'Error');
      }
    );
  }
}


