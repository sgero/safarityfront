import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modificarorganizacion',
  templateUrl: './modificarorganizacion.component.html',
  styleUrls: ['./modificarorganizacion.component.css']
})
export class ModificarorganizacionComponent  implements OnInit {

  organizacion = {
    id:+'',  // Agrega el campo 'id' para identificar el evento que se desea modificar
    nombre: '',
    email: '',
    cif: '',
    telefono: '',
    info: '',
    sitioWeb: '',
    logo: '',
    direccion: '',
    usuario: localStorage.getItem('token')
  };
  organizacionmodificar: any;
  mensaje:any;
  organizacionid : any;

  constructor(private service: GeneralService, public router: Router, private route: ActivatedRoute ) {
    // Obtén el ID del evento de la URL usando ActivatedRoute
    this.route.params.subscribe(params => {
      // Convierte el parámetro 'id' a un BigInt
      this.organizacionid = +params['id'];
    });

  }

  autocompletar(){

    let check = (<HTMLInputElement>(document.getElementById("auto")))

    if (check.checked) {

      (<HTMLInputElement>(document.getElementById("nombre"))).value = this.organizacionmodificar.nombre;

      (<HTMLInputElement>(document.getElementById("email"))).value = this.organizacionmodificar.email;

      (<HTMLInputElement>(document.getElementById("cif"))).value = this.organizacionmodificar.cif;

      (<HTMLInputElement>(document.getElementById("telefono"))).value = this.organizacionmodificar.telefono;

      (<HTMLInputElement>(document.getElementById("informacion"))).value = this.organizacionmodificar.info;

      (<HTMLInputElement>(document.getElementById("direccion"))).value = this.organizacionmodificar.direccion;

      (<HTMLInputElement>(document.getElementById("logo"))).value = this.organizacionmodificar.logo;

      (<HTMLInputElement>(document.getElementById("sitioweb"))).value = this.organizacionmodificar.sitioWeb;



    }else{

      (<HTMLInputElement>(document.getElementById("nombre"))).value = "";

      (<HTMLInputElement>(document.getElementById("apellidos"))).value = "";

      (<HTMLInputElement>(document.getElementById("direccion"))).value = "";

      (<HTMLInputElement>(document.getElementById("email"))).value = "";

      (<HTMLInputElement>(document.getElementById("dni"))).value = "";

      (<HTMLInputElement>(document.getElementById("telefono"))).value = "";

      (<HTMLInputElement>(document.getElementById("fecha_nacimiento"))).value = "";

      (<HTMLInputElement>(document.getElementById("direccion"))).value = this.organizacionmodificar.direccion;



    }

  }



  ngOnInit() {
    // Llama al servicio para obtener los datos del evento a modificar
    this.service.mostrarOrganizacion(localStorage.getItem('alias') || '').subscribe(data => {

      this.organizacionmodificar= data;

    });
  }

  modificarOranizacion() {

    this.organizacion.id = this.organizacionmodificar.id
    if(this.organizacion.nombre == ''){this.organizacion.nombre= this.organizacionmodificar.nombre}
    if(this.organizacion.email == ''){this.organizacion.email= this.organizacionmodificar.descripcion}
    if(this.organizacion.cif == ''){this.organizacion.cif= this.organizacionmodificar.direccion}
    if(this.organizacion.telefono == ''){this.organizacion.telefono= this.organizacionmodificar.imagen}
    if(this.organizacion.info == ''){this.organizacion.info = this.organizacionmodificar.info}
    if(this.organizacion.logo == ''){this.organizacion.logo = this.organizacionmodificar.logo}
    if(this.organizacion.direccion == ''){this.organizacion.direccion = this.organizacionmodificar.direccion}
    if(this.organizacion.sitioWeb == ''){this.organizacion.sitioWeb = this.organizacionmodificar.sitio_web}

    this.service.modificarOrganizacion(this.organizacion).subscribe(data  =>{
      console.log(data);

      this.router.navigate(['/miperfilorg' , this.organizacion.id])

    });
  }

}

