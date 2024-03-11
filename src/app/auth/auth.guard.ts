/*import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  return true;
};*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

constructor(private authService:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {
    // La logica della tua guardia va qui
    return this.authService.isAuthenticated(); // o una UrlTree, ad esempio per reindirizzare a una pagina di login
  }
}
