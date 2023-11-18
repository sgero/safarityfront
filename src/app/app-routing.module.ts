import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {RegistroComponent} from "./registro/registro.component";
import {LoginComponent} from "./login/login.component";
import {Registro2Component} from "./registro2/registro2.component";
import {ExplorarComponent} from "./explorar/explorar.component";
import {OrganizacionRegComponent} from "./organizacion-reg/organizacion-reg.component";

// Rutas de navegación

const routes: Routes = [

  {path:'inicio', component : IndexComponent},
  {path:'', redirectTo: '/inicio' , pathMatch:"full"},
  {path:'registro', component : RegistroComponent},
  {path:'login', component : LoginComponent},
  {path:'registro2', component : Registro2Component},
  {path:'login', component : LoginComponent},
  {path:'explorar', component : ExplorarComponent},
  { path: 'organizacion-reg', component: OrganizacionRegComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
