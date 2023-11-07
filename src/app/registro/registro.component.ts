import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  mostrarContrasena(){

  var eye = document.getElementById("eye")
  var input = <HTMLInputElement>document.getElementById("pwd1")
    if (input!.type == 'password'){

      input!.type = "text";
      eye!.style.opacity = String(0.5);

    }else {

      input!.type = "password";
      eye!.style.opacity = String(1);

    }

  }

  mostrarContrasena2(){

    var eye = document.getElementById("eye2")
    var input = <HTMLInputElement>document.getElementById("pwd2")
    if (input!.type == 'password'){

      input!.type = "text";
      eye!.style.opacity = String(0.5);

    }else {

      input!.type = "password";
      eye!.style.opacity = String(1);

    }

  }


  constructor(public router: Router) {
  }

  checkForm(){
    let username = (<HTMLInputElement>document.getElementById("username")).value
    let clave1 = (<HTMLInputElement>document.getElementById("pwd1")).value
    let clave2 = (<HTMLInputElement>document.getElementById("pwd2")).value
    if(username == "") {
      alert("Error: Debe escribir Usuario!");
      this.router.navigate(['/registro']);
      document.getElementById("username")!.focus()
      return false;
    }
    var re = /^\w+$/;
    if(!re.test(username)) {
      alert("Error: Nombre de usuario debe contener únicamente letras, numeros y underscores!");
      this.router.navigate(['/registro']);
      document.getElementById("username")!.focus()
      return false;
    }

    function checkPassword(valor: any){
      var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if(myregex.test(valor)){
        return true;
      }else{
        alert(valor+" no es valido");
        return false;
      }
    }

    if(clave1 != "" && clave1 == clave2) {
      if(!checkPassword(clave1)) {
        alert("La contraseña no es valida!");
        this.router.navigate(['/registro']);
        document.getElementById("pwd1")!.focus();
        return false;
      }
    } else {
      alert("Error: las contraseñas no coinciden!");
      this.router.navigate(['/registro']);
      document.getElementById("pwd1")!.focus();
      return false;
    }
    this.router.navigate(['/registro2']);
    return true;
  }

}


