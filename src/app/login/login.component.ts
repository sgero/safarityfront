import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GeneralService} from "../services/general.service";
import {Usuario} from "../models/Usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mostrarContrasena(){

    var eye = document.getElementById("eye")
    var input = <HTMLInputElement>document.getElementById("pwd")
    eye!.style.opacity = String(0.5);
    input!.type = "text";

  }

  arriba(){

    var eye = document.getElementById("eye")
    var input = <HTMLInputElement>document.getElementById("pwd")
    eye!.style.opacity = String(1);
    input!.type = "password";

  }



  constructor(public router: Router) {
  }

  checkForm(){
    let usuario = (<HTMLInputElement>document.getElementById("usuario")).value
    let clave = (<HTMLInputElement>document.getElementById("pwd")).value

    if(usuario == "") {
      alert("Error: Debe escribir un Usuario!");
      this.router.navigate(['/login']);
      document.getElementById("usuario")!.focus()
      return false;
    }

    if(clave == "") {
      alert("Error: debe introducir una contraseña!");
      this.router.navigate(['/login']);
      document.getElementById("pwd")!.focus();
      return false;
    }
    this.router.navigate(['/inicio']);
    return true;
  }

}
