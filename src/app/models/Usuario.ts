import {Rol} from "./Rol";

export class Usuario {
  id?: bigint;
  alias?: string;
  password?: string;
  activo?: boolean;
  rol?: Rol;

  // constructor(id: bigint, alias: string, password: string, activo: boolean, rol: number) {
  //   this.id = id;
  //   this.alias = alias;
  //   this.password = password;
  //   this.activo = activo;
  //   this.rol = rol;
  // }
}
