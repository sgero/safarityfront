import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modificarparticipante',
  templateUrl: './modificarparticipante.component.html',
  styleUrls: ['./modificarparticipante.component.css']
})
export class ModificarparticipanteComponent implements OnInit{

  participante = {
    id:+'',  // Agrega el campo 'id' para identificar el evento que se desea modificar
    nombre: '',
    apellidos: '',
    direccion: '',
    email: '',
    dni: '',
    telefono: '',
    fecha_nacimiento: ''
  };
  participantemodificar: any;
  mensaje:any;
  participanteid : any;

  constructor(private service: GeneralService, public router: Router, private route: ActivatedRoute ) {
    // Obtén el ID del evento de la URL usando ActivatedRoute
    this.route.params.subscribe(params => {
      // Convierte el parámetro 'id' a un BigInt
      this.participanteid = +params['id'];
    });

  }

  private formatearFecha(fecha: string): string {
    const partes = fecha.split('/');
    if (partes.length === 3) {
      const [dia, mes, año] = partes;
      // Formato ISO: YYYY-MM-DD
      return `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    } else {
      // Si el formato no es válido, devolver la fecha original
      return fecha;
    }
  }

  formatDate() {

    // Función para formatear una fecha
    const formatSingleDate = (inputDate: string): string => {
      // Convierte el valor a un objeto Date
      const dateObject = new Date(inputDate);

      // Obtiene día, mes y año
      const day = dateObject.getDate();
      const month = dateObject.getMonth() + 1; // ¡Atención! Meses en JavaScript comienzan desde 0
      const year = dateObject.getFullYear();

      // Formatea como dd/MM/yyyy
      return `${(day < 10 ? '0' : '') + day}/${(month < 10 ? '0' : '') + month}/${year}`;
    };

    // Formatea las fechas
    const formattedFechaLanzamiento = formatSingleDate(this.participante.fecha_nacimiento);

    this.participante.fecha_nacimiento = formattedFechaLanzamiento

    // Muestra los resultados (puedes hacer lo que quieras con los valores formateados)

  }

  autocompletar(){

    let check = (<HTMLInputElement>(document.getElementById("auto")))

    if (check.checked) {

      (<HTMLInputElement>(document.getElementById("nombre"))).value = this.participantemodificar.nombre;

      (<HTMLInputElement>(document.getElementById("apellidos"))).value = this.participantemodificar.apellidos;

      (<HTMLInputElement>(document.getElementById("direccion"))).value = this.participantemodificar.direccion;

      (<HTMLInputElement>(document.getElementById("email"))).value = this.participantemodificar.email;

      (<HTMLInputElement>(document.getElementById("dni"))).value = this.participantemodificar.dni;

      (<HTMLInputElement>(document.getElementById("telefono"))).value = this.participantemodificar.telefono;

      (<HTMLInputElement>(document.getElementById("fecha_nacimiento"))).value = this.formatearFecha(this.participantemodificar.fecha_nacimiento);


    }else{

      (<HTMLInputElement>(document.getElementById("nombre"))).value = "";

      (<HTMLInputElement>(document.getElementById("apellidos"))).value = "";

      (<HTMLInputElement>(document.getElementById("direccion"))).value = "";

      (<HTMLInputElement>(document.getElementById("email"))).value = "";

      (<HTMLInputElement>(document.getElementById("dni"))).value = "";

      (<HTMLInputElement>(document.getElementById("telefono"))).value = "";

      (<HTMLInputElement>(document.getElementById("fecha_nacimiento"))).value = "";


    }

  }
  ngOnInit() {
    // Llama al servicio para obtener los datos del evento a modificar
    this.service.mostrarParticipante(localStorage.getItem('alias') || '').subscribe(data => {

      this.participantemodificar = data;

    });
  }

  modificarParticipante() {

    this.participante.id = this.participantemodificar.id

    if(this.participante.nombre == ''){
      this.participante.nombre= this.participantemodificar.nombre
    }

    if(this.participante.apellidos == ''){
      this.participante.apellidos= this.participantemodificar.apellidos
    }

    if(this.participante.direccion == ''){
      this.participante.direccion= this.participantemodificar.direccion
    }

    if(this.participante.email == ''){
      this.participante.email= this.participantemodificar.email
    }

    if(this.participante.dni == ''){
      this.participante.dni = this.participantemodificar.dni
    }

    if(this.participante.fecha_nacimiento == 'NaN/NaN/NaN'){
      this.participante.fecha_nacimiento = this.participantemodificar.fecha_nacimiento
    }



    this.service.modificarParticipante(this.participante).subscribe(data  =>{
      console.log(data);
      this.router.navigate(['/miperfil' , this.participante.id])

    });
  }

}
