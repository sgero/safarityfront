// organizacion-reg2.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from  "../services/general.service";
import { Router } from '@angular/router';
import {RegistroService} from "../services/registro.service";

@Component({
  selector: 'app-organizacion-reg2',
  templateUrl: './organizacion-reg2.component.html',
  styleUrls: ['./organizacion-reg2.component.css'],
})
export class OrganizacionReg2Component {

  organizacion = {
    nombre: '',
    email: '',
    cif: '',
    telefono: '',
    fechaFundacion: '',
    direccion: '',
    info: '',
    sitioWeb: '',
    logo: '',
    usuarioDTO: {
      alias:'',
      password:''
    }
  };

  errorMensaje?: string;

  constructor(private service:GeneralService, public router: Router, private service1:RegistroService) {
  }

  register() {
    if (!this.service1.datosPaso1Org.alias || !this.service1.datosPaso1Org.password) {

      console.error('Datos del paso 1 no disponibles');
      return;
    }

    this.organizacion.fechaFundacion = this.formatDate(this.organizacion.fechaFundacion);
    this.organizacion.usuarioDTO.alias = this.service1.datosPaso1Org.alias
    this.organizacion.usuarioDTO.password = this.service1.datosPaso1Org.password
    this.service.registerOrg(this.organizacion).subscribe(data => {console.log(data);
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
    const day = date.getDate().toString().padStart(2, '0'); // Asegura que siempre haya dos dígitos en el día
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Asegura que siempre haya dos dígitos en el mes
    const formattedDate = `${day}/${month}/${date.getFullYear()}`;
    return formattedDate;
  }

}
