import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {RegistroComponent} from "./registro/registro.component";
import {LoginComponent} from "./login/login.component";
import {Registro2Component} from "./registro2/registro2.component";
import {ExplorarComponent} from "./explorar/explorar.component";
import {OrganizacionReg2Component} from "./organizacion-reg2/organizacion-reg2.component";
import {BuscadoreventoComponent} from "./buscadorevento/buscadorevento.component";
import {OrganizacionReg1Component} from "./organizacion-reg1/organizacion-reg1.component";

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
  { path: 'buscadorevento', component: BuscadoreventoComponent },
  { path: 'eventoDetalles/:id', component: BuscadoreventoComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
