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
import { DetallesEventoComponent } from './detalles-evento/detalles-evento.component';
import { BuscadorEventoComponent } from './buscador-evento/buscador-evento.component';
import {OrganizacionReg2Component} from "./organizacion-reg2/organizacion-reg2.component";
import {BuscadoreventoComponent} from "./buscadorevento/buscadorevento.component";
import { OrganizacionReg1Component } from './organizacion-reg1/organizacion-reg1.component';
import { EventosComponent } from './eventos/eventos.component';
import { OrganizacionesComponent } from './organizaciones/organizaciones.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { BuscadororganizacionComponent } from './buscadororganizacion/buscadororganizacion.component';
import { CreareventoComponent } from './crearevento/crearevento.component';
import { CrearticketComponent } from './crearticket/crearticket.component';
import { ListaticketsComponent } from './listatickets/listatickets.component';
import { DetallesTicketComponent } from './detalles-ticket/detalles-ticket.component';
import {LogoutComponent} from "./logout/logout.component";
import { BusquedageneralComponent } from './busquedageneral/busquedageneral.component';
import { DetallesOrganizacionComponent } from './detalles-organizacion/detalles-organizacion.component';
import {TicketListComponent} from "./ticket-list/ticket-list.component";
import { MiseventosComponent } from './miseventos/miseventos.component';
import {ContactoComponent} from "./contacto/contacto.component";
import {ToastrModule} from "ngx-toastr";
import {MisFavoritosComponent} from "./mis-favoritos/mis-favoritos.component";
import { FavoritosComponent } from './favoritos/favoritos.component';
import {MonederoComponent} from "./monedero/monedero.component";
import { ModificareventoComponent } from './modificarevento/modificarevento.component';
import {RecaudacionComponent} from './recaudacion/recaudacion.component';
import { ModificarparticipanteComponent } from './modificarparticipante/modificarparticipante.component';
import { ModificarorganizacionComponent } from './modificarorganizacion/modificarorganizacion.component';




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
    DetallesEventoComponent,
    BuscadorEventoComponent,
    OrganizacionReg1Component,
    EventosComponent,
    OrganizacionesComponent,
    BuscadorComponent,
    BuscadororganizacionComponent,
    CreareventoComponent,
    CrearticketComponent,
    ListaticketsComponent,
    DetallesTicketComponent,
    LogoutComponent,
    ContactoComponent,
    BusquedageneralComponent,
    TicketListComponent,
    DetallesOrganizacionComponent,
    ModificareventoComponent,
    MiseventosComponent,
    MisFavoritosComponent,
    FavoritosComponent,
    MonederoComponent,
    RecaudacionComponent,
    ModificarparticipanteComponent,
    ModificarorganizacionComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule, // Agrega BrowserAnimationsModule
    ToastrModule.forRoot(),
    RouterModule.forRoot([ // Configura tus rutas aquí
      { path: 'login', component: LoginComponent },
      // Otras rutas
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
