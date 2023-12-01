import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { GeneralService } from '../services/general.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  userRole: string = 'usuario';
  fillerNav: any[] = [];
  usuarioAutenticado: any; // Variable para verificar si el usuario está autenticado

  auth: { token: string } = { token: '' };

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private generalService: GeneralService,
    public router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // En SidenavComponent
  ngOnInit() {

    // Assuming you want to initialize auth from localStorage during component initialization
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.auth.token = storedToken;
    }

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
    if (localStorage.getItem('rol') === 'ADMIN') {
      this.fillerNav = [
        { name: 'PANEL DE ADMIN', route: '', icon: '' },
        { name: 'Home', route: 'inicio', icon: 'home' },
        { name: 'Contacto', route: 'contacto', icon: 'perm_contact_calendar' }
      ];
    } else if (localStorage.getItem('rol') === 'ORGANIZACION') {
      this.fillerNav = [
        { name: 'PANEL DE ORGANIZACION', route: '', icon: '' },
        { name: 'Home', route: 'inicio', icon: 'home' },
        { name: 'Contacto', route: 'contacto', icon: 'perm_contact_calendar' },
        { name: 'Mis Eventos', route: 'misEventos', icon: 'perm_contact_calendar' },
        { name: 'Crear Evento', route: 'crearevento', icon: 'perm_contact_calendar' },
        { name: 'Logout', route: 'logout', icon: 'perm_contact_calendar' }
      ];
    } else if (localStorage.getItem('rol') === 'PARTICIPANTE') {
      this.fillerNav = [
        { name: 'PANEL DE PARTICIPANTE', route: '', icon: '' },
        { name: 'Home', route: 'inicio', icon: 'home' },
        { name: 'Contacto', route: 'contacto', icon: 'perm_contact_calendar' },
        { name: 'Mis Tickets', route: 'listatickets', icon: 'perm_contact_calendar' },
        { name: 'Favoritos', route: 'favoritos', icon: 'perm_contact_calendar' },
        { name: 'Logout', route: 'logout', icon: 'perm_contact_calendar' }
      ];
    } else {
      // Default fillerNav for other roles or situations
      this.fillerNav = [
        { name: 'PANEL DE USUARIO', route: '', icon: '' },
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


 // logout() {

   // const token = localStorage.getItem('token') ?? '';

   // if (localStorage.getItem('token') == null) {

   // } else {

    //  this.auth.token = token

    //}

    //this.generalService.logout(this.auth).subscribe(
     // data => {

      // console.log(data);

    // });

  //}


  // logout() {
  //   const token = localStorage.getItem('token') || '';
  //
  //   this.generalService.logout(token).subscribe(
  //     data => {
  //       console.log('Logout successful', data);
  //       // Additional logout logic if needed
  //     },
  //     error => {
  //       console.error('Logout failed', error);
  //     }
  //   );
  // }

  logout() {

    //this.auth.token = localStorage.getItem('token') || '';
    this.generalService.logout(localStorage.getItem('token') || '');
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('info');
    localStorage.removeItem('alias');
    //localStorage.clear();
    this.usuarioAutenticado = false;
    this.router.navigate(['/inicio']).then(()=>window.location.href='/inicio');

  }


}
