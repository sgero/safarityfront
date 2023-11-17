import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {RegistroComponent} from "./registro/registro.component";
import {LoginComponent} from "./login/login.component";
import {Registro2Component} from "./registro2/registro2.component";
import {ExplorarComponent} from "./explorar/explorar.component";
import {DetallesEventoComponent} from "./detalles-evento/detalles-evento.component";

// Rutas de navegación

const routes: Routes = [

  {path:'inicio', component : IndexComponent},
  {path:'', redirectTo: '/inicio' , pathMatch:"full"},
  {path:'registro', component : RegistroComponent},
  {path:'login', component : LoginComponent},
  {path:'registro2', component : Registro2Component},
  {path:'explorar', component : ExplorarComponent},
  {path:'evento/detalles/:id', component : DetallesEventoComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
