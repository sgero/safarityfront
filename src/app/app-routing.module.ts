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
import {BuscadororganizacionComponent} from "./buscadororganizacion/buscadororganizacion.component";
import {CreareventoComponent} from "./crearevento/crearevento.component";
import {CrearticketComponent} from "./crearticket/crearticket.component";
import {ListaticketsComponent} from "./listatickets/listatickets.component";
import {DetallesTicketComponent} from "./detalles-ticket/detalles-ticket.component";
import {LogoutComponent} from "./logout/logout.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {BusquedageneralComponent} from "./busquedageneral/busquedageneral.component";
import {MiperfilComponent} from "./miperfil/miperfil.component";
import {OurservicesComponent} from "./ourservices/ourservices.component";
import {PrivacypolicyComponent} from "./privacypolicy/privacypolicy.component";
import {TermsconditionsComponent} from "./termsconditions/termsconditions.component";
import {CareerComponent} from "./career/career.component";
import {DetallesOrganizacionComponent} from "./detalles-organizacion/detalles-organizacion.component";
import {TicketListComponent} from "./ticket-list/ticket-list.component";
import {AuthGuard} from "./models/AuthGuard";
import {ModificareventoComponent} from "./modificarevento/modificarevento.component";

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
  { path: 'buscador', component: BuscadorComponent },
  { path: 'buscadororg', component: BuscadororganizacionComponent },
  { path: 'crearevento', component: CreareventoComponent },
  { path: 'modificarevento/:id', component: ModificareventoComponent},
  { path: 'crearticket', component: CrearticketComponent },
  { path: 'listatickets', component: ListaticketsComponent },
  { path: 'detallesTicket/:id', component: DetallesTicketComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'ourservices', component: OurservicesComponent},
  { path: 'privacypolicy', component: PrivacypolicyComponent},
  { path: 'termsconditions', component: TermsconditionsComponent},
  { path: 'career', component: CareerComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'busquedageneral/:busqueda', component: BusquedageneralComponent},
  { path: 'miperfil', component: MiperfilComponent},
  { path: 'miperfilorg', component: DetallesOrganizacionComponent},
  { path: 'ticket-list', component: TicketListComponent},

  {
    path: 'ruta-protegida',
    component: MiperfilComponent,
    canActivateChild: [AuthGuard],
    children: [
      // Otras rutas protegidas

    ],
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
