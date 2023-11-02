import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



class Evento {
  id: number;
  nombre: string;
  direccion: string;
  descripcion: string;
  imagen: string;
  aforo: number;
  fecha_lanzamiento: string;
  fecha_venta: string;
  fecha_inicio: string;
  fecha_fin: string;
  entradasVendidas: number;
  tipoEvento: string;
  tipoPago: string;

  constructor(id:number, nombre:string, direccion:string, descripcion:string, imagen:string, aforo:number, fecha_lanzamiento:string, fecha_venta:string, fecha_inicio:string, fecha_fin:string, entradasVendidas:number, tipoEvento:string, tipoPago:string){
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.aforo = aforo;
    this.fecha_lanzamiento = fecha_lanzamiento;
    this.fecha_venta = fecha_venta;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.entradasVendidas = entradasVendidas;
    this.tipoEvento = tipoEvento;
    this.tipoPago = tipoPago;
  }

}

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/evento';

  getEventos(){
    return this.http.get<Evento[]>(this.url);
  }
}
