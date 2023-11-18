import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  usuarioAutenticado: boolean = false; // Variable para verificar si el usuario está autenticado
  usuarioAlias: string = ''; // Variable para almacenar el alias del usuario autenticado

  // Puedes implementar la lógica de autenticación en tu servicio y llamar a esta función según sea necesario.
  // Esta función podría ser llamada al iniciar la aplicación para verificar si el usuario está autenticado.
  verificarAutenticacion() {
    // Tu lógica para verificar la autenticación aquí.


    // Asigna valores a usuarioAutenticado y usuarioAlias según sea necesario.


  }

  // Implementa la lógica para cerrar sesión.
  logout() {
    // Tu lógica para cerrar sesión aquí.

    //método de logout que te devuelve a la pantalla de index


    // Puedes llamar a un servicio de autenticación para realizar las acciones necesarias.
    this.usuarioAutenticado = false;
    this.usuarioAlias = '';
  }
}

