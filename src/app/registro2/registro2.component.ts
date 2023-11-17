import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";
import {RegistroService} from "../services/registro.service";

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.css']
})
export class Registro2Component{

  participante = {
    nombre: '',
    apellidos: '',
    direccion: '',
    email: '',
    dni: '',
    telefono: '',
    fecha_nacimiento: '',
    usuarioDTO: {
      alias:'',
      password:''
    }
  };

  errorMensaje?: string;

  constructor(private service:GeneralService, public router: Router, private service1:RegistroService) {
  }

  register() {
    if (!this.service1.datosPaso1.alias || !this.service1.datosPaso1.password) {

      console.error('Datos del paso 1 no disponibles');
      return;
    }

    this.participante.fecha_nacimiento = this.formatDate(this.participante.fecha_nacimiento);
    this.participante.usuarioDTO.alias = this.service1.datosPaso1.alias
    this.participante.usuarioDTO.password = this.service1.datosPaso1.password
    this.service.register(this.participante).subscribe(data => {console.log(data);
      // Realizar acciones adicionales según la respuesta del servidor
      if (data.token) {
        // El inicio de sesión fue exitoso, puedes almacenar el token en localStorage o en una cookie
        localStorage.setItem('token', data.token);
        // Redirigir al usuario
        this.router.navigate(['/inicio']);
      } else {
        // El inicio de sesión no fue exitoso, manejar según sea necesario
        this.errorMensaje = data.info;
        alert(this.errorMensaje = data.info)
      }
    });
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  }

}
