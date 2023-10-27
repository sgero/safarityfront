import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { Registro2Component } from './registro2/registro2.component';
import { ExplorarComponent } from './explorar/explorar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CabeceraComponent,
    IndexComponent,
    FooterComponent,
    RegistroComponent,
    ExplorarComponent,
    RegistroComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    Registro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
