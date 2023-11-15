import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GeneralService} from "../services/general.service";
import {RegistroService} from "../services/registro.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private service:GeneralService, public router: Router, private service2:RegistroService) {
  }

  guardarDatos() {
    this.service2.guardarDatosPaso1((<HTMLInputElement>document.getElementById("username")).value, (<HTMLInputElement>document.getElementById("pwd1")).value);
  }


  mostrarContrasena(){

    var eye = document.getElementById("eye")
    var input = <HTMLInputElement>document.getElementById("pwd1")
    input!.type = "text";
    eye!.style.opacity = String(0.5);

  }

  mostrarContrasena2(){

    var eye = document.getElementById("eye2")
    var input = <HTMLInputElement>document.getElementById("pwd2")
    input!.type = "text";
    eye!.style.opacity = String(0.5);

  }

  arriba(){

    var eye = document.getElementById("eye")
    var input = <HTMLInputElement>document.getElementById("pwd1")
    eye!.style.opacity = String(1);
    input!.type = "password";

  }

  arriba2(){

    var eye = document.getElementById("eye2")
    var input = <HTMLInputElement>document.getElementById("pwd2")
    eye!.style.opacity = String(1);
    input!.type = "password";

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


