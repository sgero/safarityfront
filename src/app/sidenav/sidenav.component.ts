import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  userRole: string = 'usuario';
  fillerNav: any[] = [];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private generalService: GeneralService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // En SidenavComponent
  ngOnInit() {
    // Suscríbete a los cambios de rol
    this.generalService.roleChange.subscribe(() => {
      // Actualiza el rol y el menú cuando cambia el rol
      this.userRole = this.generalService.getUserRole();
      this.initializeFillerNav();
    });

    // Inicializa el menú al cargar el componente
    this.initializeFillerNav();
  }

  private initializeFillerNav() {
    if (localStorage.getItem("rol") === 'ADMIN') {
      this.fillerNav = [
        { name: 'PANEL ADMINISTRADOR', route: 'inicio', icon: 'home' },
        { name: 'Contacto', route: 'contacto', icon: 'perm_contact_calendar' }
      ];
    } else if (localStorage.getItem("rol") === 'ORGANIZACION') {
      this.fillerNav = [
        { name: 'PANEL ORGANIZACION', route: 'inicio', icon: 'home' },
        { name: 'Contacto', route: 'contacto', icon: 'perm_contact_calendar' },
        { name: 'Mis Eventos', route: 'misEventos', icon: 'perm_contact_calendar' },
        { name: 'Crear Evento', route: 'crearEvento', icon: 'perm_contact_calendar' },
        { name: 'Logout', route: 'logout', icon: 'perm_contact_calendar', onclick: 'logout()' }
      ];
    } else if (localStorage.getItem("rol") === 'PARTICIPANTE') {
      this.fillerNav = [
        { name: 'PANEL PARTICIPANTE', route: 'inicio', icon: 'home' },
        { name: 'Contacto', route: 'contacto', icon: 'perm_contact_calendar' },
        { name: 'Mis Eventos', route: 'misEventos', icon: 'perm_contact_calendar' },
        { name: 'Favoritos', route: 'favoritos', icon: 'perm_contact_calendar' },
        { name: 'Logout', route: 'logout', icon: 'perm_contact_calendar', onclick: 'logout()' }
      ];
    } else {
      // Default fillerNav for other roles or situations
      this.fillerNav = [
        { name: 'Home', route: 'inicio', icon: 'home' },
        { name: 'Contacto', route: 'contacto', icon: 'perm_contact_calendar' }
      ];
    }
  }


  // Implementa la lógica para verificar si mostrar el elemento de menú según el rol
  shouldShowNavItem(nav: any): boolean {
    switch (nav.role) {
      case 'ADMIN':
        return localStorage.getItem("rol") === 'ADMIN';
      case 'PARTICIPANTE':
        return localStorage.getItem("rol") === 'PARTICIPANTE';
      case 'ORGANIZACION':
        return localStorage.getItem("rol") === 'ORGANIZACION';
      default:
        return true; // Mostrar por defecto si no se especifica un rol
    }
  }
  // Métodos para cambiar el rol cuando el usuario se loguea como admin, participante u organización
  setRoleAsAdmin() {
    this.generalService.setRoleAsAdmin();
  }

  setRoleAsParticipant() {
    this.generalService.setRoleAsParticipant();
  }

  setRoleAsOrganization() {
    this.generalService.setRoleAsOrganization();
  }

  // ngOnDestroy should be placed at the end of the class
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  auth = {
    token:''
  };

  logout(){

    const token = localStorage.getItem('token') ?? '';

    if (localStorage.getItem('token') == null){

    }else {

      this.auth.token = token

    }
  }

}
