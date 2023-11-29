import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  datosPaso1: any = {alias:'', password:''};
  datosPaso1Org: any = {alias:'', password:''};

  guardarDatosPaso1(alias:String, password:String) {
    this.datosPaso1.alias = alias
    this.datosPaso1.password = password
  }

  guardarDatosPaso1Org(alias:String, password:String) {
    this.datosPaso1Org.alias = alias
    this.datosPaso1Org.password = password
  }
}
