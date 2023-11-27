import {Asistente} from "./Asistente";

export class Ticket {
  id?: bigint;
  dineroAportado?: number;
  fecha?: string;
  participanteDTO?: bigint;
  eventoDTO?: bigint;
  asistenteDTO?: Asistente = new Asistente();
  activo?: boolean;


  // constructor(id: bigint, es_disponible: boolean, dinero_aportado: number, fecha_compra: string, id_participante:bigint, id_evento: bigint, activo: boolean) {
  //   this.id = id;
  //   this.es_disponible = es_disponible;
  //   this.dinero_aportado = dinero_aportado;
  //   this.fecha_compra = fecha_compra;
  //   this.id_participante = id_participante;
  //   this.id_evento = id_evento;
  //   this.activo = activo;
  //
  //
  // }
}
