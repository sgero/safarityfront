import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeneralService} from "../services/general.service";

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

  constructor(private http: HttpClient, private service: GeneralService) { }

  enviarFormulario() {
    // Enviar datos al backend
    this.service.mensajeUsuario(this.Mensaje)
      .subscribe(
        (response) => {
          console.log('Mensaje enviado correctamente', response);
        },
        (error) => {
          console.error('Error al enviar el mensaje', error);
        }
      );
  }
}


