export class Participante {
  id: bigint;
  nombre: string;
  apellidos: string;
  direccion: string;
  email: string;
  dni: string;
  telefono: string;
  fecha_nacimiento: string;
  id_usuario: number;
  activo: boolean;


  constructor(id: bigint, nombre: string, apellidos: string, direccion: string, email: string, dni: string, telefono: string, fecha_nacimiento: string, id_usuario: number, activo: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.email = email;
    this.dni = dni;
    this.telefono = telefono;
    this.fecha_nacimiento = fecha_nacimiento;
    this.id_usuario = id_usuario;
    this.activo = activo;

  }
}
