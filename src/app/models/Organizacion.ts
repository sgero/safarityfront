import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {GeneralService} from "../services/general.service";

export class Organizacion{
  id?: bigint;
  nombre?: string;
  email?: string;
  cif?: string;
  telefono?: string;
  fecha_fundacion?: string;
  info?: string;
  sitio_web?: string;
  logo?: string;
  id_usuario?: bigint;
  activo?: boolean;



  // constructor(id: bigint, nombre: string, email: string, cif: string, telefono: string, fecha_fundacion: string, info: string, sitio_web: string, logo: string, id_usuario: bigint, activo: boolean, private fb: FormBuilder, private organizacionService: GeneralService, private router: Router)
  // {
  //   this.id = id;
  //   this.nombre = nombre;
  //   this.email = email;
  //   this.cif = cif;
  //   this.telefono = telefono;
  //   this.fecha_fundacion = fecha_fundacion;
  //   this.info = info;
  //   this.sitio_web = sitio_web;
  //   this.logo = logo;
  //   this.id_usuario = id_usuario;
  //   this.activo = activo;
  //
  // }


}
