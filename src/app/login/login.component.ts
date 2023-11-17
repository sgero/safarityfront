import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Usuario} from "../models/Usuario";
import {GeneralService} from "../services/general.service";
import{Rol} from "../models/Rol";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = { alias: '', password: '' };
  errorMensaje?: string;
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




  constructor(private service:GeneralService, public router: Router) {
  }

  login() {
    this.service.login(this.usuario).subscribe((data: any) => {
      // Manejar la respuesta del servicio
      console.log(data);

      // Realizar acciones adicionales según la respuesta del servidor
      if (data.token && data.rol) {
        // El inicio de sesión fue exitoso, puedes almacenar el token y el rol en localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.rol.toString()); // Convierte el int a cadena

        // Redirigir al usuario según su rol
        if (data.rol === 0) {
          this.router.navigate(['/inicio']);
        } else if (data.rol === 1) {
          this.router.navigate(['/inicio']);
        } else if (data.rol === 2) {
          // Manejar otros roles o redirigir a una ruta por defecto
          this.router.navigate(['/inicio']);
        }
      } else {
        // El inicio de sesión no fue exitoso, manejar según sea necesario
        this.errorMensaje = data.info;
        alert(this.errorMensaje);
      }
    });
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

    var re = /^[A-Za-z][A-Za-z0-9]*$/;
    if(!re.test(usuario)) {
      alert(usuario + " no es válido, debe tener una longitud mínima de 8 carácteres y ser alfanumerico");
      this.router.navigate(['/login']);
      document.getElementById("usuario")!.focus()
      return false;
    }

    function checkPassword(valor: any){
      var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if(myregex.test(valor)){
        return true;
      }else{
        alert(valor + " no es valido, debe incluir al menos 8 dígitos, mayúscula y números.");
        return false;
      }
    }

    if(clave != "") {
      if(!checkPassword(clave)) {
        this.router.navigate(['/login']);
        document.getElementById("pwd")!.focus();
        return false;
      }
    }else {
      alert("Error: debe introducir una contraseña!");
      this.router.navigate(['/login']);
      document.getElementById("pwd")!.focus();
      return false;
    }
    return true;
  }
}
