// organizacion-reg.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from  "../services/general.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizacion-reg',
  templateUrl: './organizacion-reg.component.html',
  styleUrls: ['./organizacion-reg.component.css'],
})
export class OrganizacionRegComponent {
  organizacionForm: FormGroup;

  constructor(private fb: FormBuilder, private organizacionService: GeneralService, private router: Router) {
    this.organizacionForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cif: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaFundacion: ['', Validators.required],
      direccion: ['', Validators.required],
      info: ['', Validators.required],
      sitioWeb: ['', Validators.required],
      logo: ['', Validators.required],
      alias: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.organizacionForm.valid) {
      const organizacionData = this.organizacionForm.value;
      this.organizacionService.registrarOrganizacion(organizacionData)
        .subscribe(
          response => {
            console.log('Organización registrada con éxito:', response);
            // Puedes hacer algo después de registrar exitosamente, como redirigir a otra página

            // Añade un retraso de 3 segundos antes de redirigir
            setTimeout(() => {
              // Redirige a la página de login después de 3 segundos
              this.router.navigate(['/login']);
            }, 3000);

          },
          error => {
            console.error('Error al registrar la organización:', error);
            // Maneja el error de acuerdo a tus necesidades
          }
        );
    } else {
      // El formulario no es válido, puedes mostrar un mensaje de error o realizar otras acciones
    }
  }
}
