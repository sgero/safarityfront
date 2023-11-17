export class Usuario {
  id?: bigint;
  alias: string = ''; // Establecer un valor predeterminado o inicializar en el constructor
  password: string = ''; // Establecer un valor predeterminado o inicializar en el constructor
  activo?: boolean;
  rol?: number;

  // constructor(id: bigint, alias: string, password: string, activo: boolean, rol: number) {
  //   this.id = id;
  //   this.alias = alias;
  //   this.password = password;
  //   this.activo = activo;
  //   this.rol = rol;
  // }
}
