import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  datosPaso1: any = {alias:'', password:''};

  guardarDatosPaso1(alias:String, password:String) {
    alias = this.datosPaso1.alias
    password = this.datosPaso1.password
  }
}
