import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  comprobarContrasena() {
    let clave1 = (<HTMLInputElement>document.getElementById("clave1")).value
    let clave2 = (<HTMLInputElement>document.getElementById("clave2")).value

    if (clave1 != clave2) {
      alert("Las contraseñas son distintas")
      event.preventDefault()
    }

  }

}
