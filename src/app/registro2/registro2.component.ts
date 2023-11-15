import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";
import {RegistroComponent} from "../registro/registro.component";
import {RegistroService} from "../services/registro.service";

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.css']
})
export class Registro2Component{

  participante = { nombre: '', apellidos: '', email: '', fecha_nacimento: '', usuario:{alias:'', password:''}};
  errorMensaje?: string;

  constructor(private service:GeneralService, public router: Router, private service1:RegistroService) {
  }

  register() {
    this.participante.usuario.alias == this.service1.datosPaso1.alias
    this.participante.usuario.password == this.service1.datosPaso1.password
    this.service.register(this.participante).subscribe(data => {
      // Manejar la respuesta del servicio
      console.log(data);

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


}
