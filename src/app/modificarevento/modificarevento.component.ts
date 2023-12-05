import {Component, OnInit} from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import {CreareventoComponent} from "../crearevento/crearevento.component";

@Component({
  selector: 'app-modificarevento',
  templateUrl: './modificarevento.component.html',
  styleUrls: ['./modificarevento.component.css']
})
export class ModificareventoComponent implements OnInit {

  evento = {
    id:+'',  // Agrega el campo 'id' para identificar el evento que se desea modificar
    nombre: '',
    direccion: '',
    descripcion: '',
    imagen: '',
    precio: +'',
    aforo: +'',
    fecha_lanzamiento: '',
    fecha_venta: '',
    fecha_inicio: '',
    fecha_fin: '',
    tipoEvento: '',
    tipoPago: '',
    organizacion: localStorage.getItem('token')
  };
  eventomodificar: any;
  mensaje:any;
  eventoid : any;

  constructor(private service: GeneralService, public router: Router, private route: ActivatedRoute ) {
    // Obtén el ID del evento de la URL usando ActivatedRoute
    this.route.params.subscribe(params => {
      // Convierte el parámetro 'id' a un BigInt
      this.eventoid = +params['id'];
    });

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
    const formattedFechaLanzamiento = formatSingleDate(this.evento.fecha_lanzamiento);
    const formattedFechaVenta = formatSingleDate(this.evento.fecha_venta);
    const formattedFechaInicio = formatSingleDate(this.evento.fecha_inicio);
    const formattedFechaFin = formatSingleDate(this.evento.fecha_fin);

    this.evento.fecha_lanzamiento = formattedFechaLanzamiento
    this.evento.fecha_venta = formattedFechaVenta
    this.evento.fecha_inicio = formattedFechaInicio
    this.evento.fecha_fin = formattedFechaFin
    // Muestra los resultados (puedes hacer lo que quieras con los valores formateados)

  }

  ngOnInit() {
    // Llama al servicio para obtener los datos del evento a modificar
    this.service.obtenerEventoPorId(this.eventoid).subscribe(data => {

      this.eventomodificar= data;


    });
  }

  modificar() {

    this.evento.id = this.eventomodificar.id
  if(this.evento.nombre == ''){this.evento.nombre= this.eventomodificar.nombre}
  if(this.evento.descripcion == ''){this.evento.descripcion= this.eventomodificar.descripcion}
  if(this.evento.direccion == ''){this.evento.direccion= this.eventomodificar.direccion}
  if(this.evento.imagen == ''){this.evento.imagen= this.eventomodificar.imagen}
  if(this.evento.aforo == 0){this.evento.aforo = this.eventomodificar.aforo}
  if(this.evento.fecha_lanzamiento == 'NaN/NaN/NaN'){this.evento.fecha_lanzamiento = this.eventomodificar.fecha_lanzamiento}
  if(this.evento.fecha_venta == 'NaN/NaN/NaN'){this.evento.fecha_venta = this.eventomodificar.fecha_venta}
  if(this.evento.fecha_inicio == 'NaN/NaN/NaN'){this.evento.fecha_inicio = this.eventomodificar.fecha_inicio}
  if(this.evento.fecha_fin == 'NaN/NaN/NaN'){this.evento.fecha_fin = this.eventomodificar.fecha_fin}
  if(this.evento.tipoEvento == ''){this.evento.tipoEvento = this.eventomodificar.tipoEvento}
  if(this.evento.tipoPago == ''){this.evento.tipoPago = this.eventomodificar.tipoPago}
  this.service.modificarEvento(this.evento).subscribe(data  =>{
    console.log(data);
    this.router.navigate(['/detallesEvento' , this.evento.id])

  });
  }

}
