import { Component } from '@angular/core';
import {GeneralService} from "../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crearevento',
  templateUrl: './crearevento.component.html',
  styleUrls: ['./crearevento.component.css']
})
export class CreareventoComponent {

  evento = {nombre: '', direccion: '', descripcion: '', imagen: '', precio: +'', aforo: +'', fecha_lanzamiento: '', fecha_venta: '', fecha_inicio: '', fecha_fin: '', tipoEvento: '', tipoPago: '', organizacion: localStorage.getItem('token')};
  eventomostrar: any;

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
    console.log(formattedFechaLanzamiento);
    console.log(formattedFechaVenta);
    console.log(formattedFechaInicio);
    console.log(formattedFechaFin);
  }
  constructor(private service:GeneralService, public router: Router) {
  }

  crear(){
    this.service.crearEvento(this.evento).subscribe(data => {console.log(data);
    this.eventomostrar = data;
    this.router.navigate(['/detallesEvento',this.eventomostrar.id]);
    });
  }

}
