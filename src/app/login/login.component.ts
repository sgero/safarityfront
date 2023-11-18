import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Usuario} from "../models/Usuario";
import {GeneralService} from "../services/general.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = { alias: '', password: '' };
  errorMensaje?: string;
  userRole: string = 'rol';
  visibleNavItems: any[] = [];

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

  ngOnInit() {
    // Llama al método para construir la barra de navegación
    this.buildNavbar();
  }
  login() {
    this.service.login(this.usuario).subscribe(data => {
      // Manejar la respuesta del servicio
      console.log(data);

      // Realizar acciones adicionales según la respuesta del servidor
      if (data.token && data.info !== undefined) {
        // El inicio de sesión fue exitoso, puedes almacenar el token en localStorage o en una cookie
        localStorage.setItem('token', data.token);// El inicio de sesión fue exitoso, almacena el token y el rol
        localStorage.setItem('rol', data.info!.toString()); // Almacena el rol del usuario

        this.userRole = data.info.toString();
        // Redirigir al usuario
        this.router.navigate(['/inicio']);
      } else {
        // El inicio de sesión no fue exitoso, manejar según sea necesario
        this.errorMensaje = data.info;
        alert(this.errorMensaje = data.info)
      }
    });
  }


  // Implementa la lógica para verificar si mostrar el elemento de menú según el rol
  shouldShowNavItem(nav: any): boolean {
    switch (nav.role) {
      case 'ADMIN':
        return this.userRole === 'ADMIN';
      case 'PARTICIPANTE':
        return this.userRole === 'PARTICIPANTE';
      case 'ORGANIZACION':
        return this.userRole === 'ORGANIZACION';
      default:
        return true; // Mostrar por defecto si no se especifica un rol
    }
  }
  // Lógica para construir la barra de navegación
  buildNavbar() {
    const navItems = [
      // ... otros elementos de menú ...
      { label: 'Explorar', route: '/explorar', role: 'PARTICIPANTE' },
      { label: 'Registro', route: '/registro', role: 'ADMIN' },
      // ... otros elementos de menú ...
    ];


    // Filtra los elementos de menú según el rol del usuario
    this.visibleNavItems = navItems.filter(nav => this.shouldShowNavItem(nav));
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
    return true;
  }

}
