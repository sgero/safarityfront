import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {RegistroComponent} from "./registro/registro.component";
import {LoginComponent} from "./login/login.component";
import {Registro2Component} from "./registro2/registro2.component";
import {ExplorarComponent} from "./explorar/explorar.component";
import {DetallesEventoComponent} from "./detalles-evento/detalles-evento.component";
import {BuscadorEventoComponent} from "./buscador-evento/buscador-evento.component";
import {OrganizacionReg2Component} from "./organizacion-reg2/organizacion-reg2.component";
import {BuscadoreventoComponent} from "./buscadorevento/buscadorevento.component";
import {OrganizacionReg1Component} from "./organizacion-reg1/organizacion-reg1.component";
import {EventosComponent} from "./eventos/eventos.component";
import {OrganizacionesComponent} from "./organizaciones/organizaciones.component";
import {BuscadorComponent} from "./buscador/buscador.component";

// Rutas de navegación

const routes: Routes = [

  {path:'inicio', component : IndexComponent},
  {path:'', redirectTo: '/inicio' , pathMatch:"full"},
  {path:'registro', component : RegistroComponent},
  {path:'login', component : LoginComponent},
  {path:'registro2', component : Registro2Component},
  {path:'login', component : LoginComponent},
  {path:'explorar', component : ExplorarComponent},
  { path: 'organizacion-reg1', component: OrganizacionReg1Component },
  { path: 'organizacion-reg2', component: OrganizacionReg2Component },
  { path: 'detallesEvento/:id', component: DetallesEventoComponent },
  { path: 'buscadorEvento', component: BuscadorEventoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'organizaciones', component: OrganizacionesComponent },
  { path: 'buscador', component: BuscadorComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
