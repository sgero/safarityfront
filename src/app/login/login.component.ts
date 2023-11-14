import { Component } from '@angular/core';
import {Router} from "@angular/router";

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
    this.router.navigate(['/inicio']);
    return true;
  }

}
