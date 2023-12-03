// auth.guard.ts

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild
} from '@angular/router';
import { GeneralService } from '../services/general.service';
import {map, Observable, take} from "rxjs"; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: GeneralService, private router: Router) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | UrlTree {
  //   if (this.authService.isLoggedIn()) {
  //     return true;
  //   } else {
  //     return this.router.parseUrl('/login'); // Redirige a la página de inicio de sesión
  //   }
  // }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isLoggedIn().pipe(
      take(1),
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        } else {
          // Redirige a la página de inicio de sesión
          return this.router.parseUrl('/login');
        }
      })
    );
  }
}
