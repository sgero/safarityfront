export class Evento {
  id?: bigint;
  nombre?: string;
  direccion?: string;
  descripcion?: string;
  imagen?: string;
  aforo?: number;
  fecha_lanzamiento?: string;
  fecha_venta?: string;
  fecha_inicio?: string;
  fecha_fin?: string;
  tipoEvento?: string;
  tipoPago?: string;
  id_organizacion?: bigint;
  activo?: boolean;



  // constructor(id: bigint, nombre: string, direccion: string, descripcion: string, imagen: string, aforo: number, fecha_lanzamiento: string, fecha_venta: string, fecha_inicio: string, fecha_fin: string, tipoEvento: string, tipoPago: string, id_organizacion: bigint, activo: boolean) {
  //   this.id = id;
  //   this.nombre = nombre;
  //   this.direccion = direccion;
  //   this.descripcion = descripcion;
  //   this.imagen = imagen;
  //   this.aforo = aforo;
  //   this.fecha_lanzamiento = fecha_lanzamiento;
  //   this.fecha_venta = fecha_venta;
  //   this.fecha_inicio = fecha_inicio;
  //   this.fecha_fin = fecha_fin;
  //   this.tipoEvento = tipoEvento;
  //   this.tipoPago = tipoPago;
  //   this.id_organizacion = id_organizacion;
  //   this.activo = activo;
  // }

  //imprime por pantalla los eventos que traigo desde mi backend
  toString(): string {

    return `Evento[id=${this.id},
     nombre=${this.nombre},
      direccion=${this.direccion},
        descripcion=${this.descripcion},
          imagen=${this.imagen},
          aforo=${this.aforo},
            fecha_lanzamiento=${this.fecha_lanzamiento},
            fecha_venta=${this.fecha_venta},
              fecha_inicio=${this.fecha_inicio},
              fecha_fin=${this.fecha_fin},
                tipoEvento=${this.tipoEvento},
                tipoPago=${this.tipoPago},
                  id_organizacion=${this.id_organizacion},
                  activo=${this.activo}]`;

  }




}
