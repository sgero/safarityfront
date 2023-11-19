// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



/**
 * Material Modules
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';



/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { Registro2Component } from './registro2/registro2.component';
import { ExplorarComponent } from './explorar/explorar.component';
import {SidenavComponent} from "./sidenav/sidenav.component";
import { MiperfilComponent } from './miperfil/miperfil.component';
import {OrganizacionReg2Component} from "./organizacion-reg2/organizacion-reg2.component";
import {BuscadoreventoComponent} from "./buscadorevento/buscadorevento.component";
import { OrganizacionReg1Component } from './organizacion-reg1/organizacion-reg1.component';
import { DetallesEventoComponent } from './detalles-evento/detalles-evento.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CabeceraComponent,
    FooterComponent,
    RegistroComponent,
    ExplorarComponent,
    LoginComponent,
    Registro2Component,
    SidenavComponent,
    OrganizacionReg2Component,
    BuscadoreventoComponent,
    MiperfilComponent,
    OrganizacionReg1Component,
    DetallesEventoComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([ // Configura tus rutas aquí
      { path: 'login', component: LoginComponent },
      // Otras rutas
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
