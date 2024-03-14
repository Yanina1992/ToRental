/*import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Directive({
  selector: '[appAuthStatusToggle]'
})
export class AuthStatusToggleDirective implements OnInit {

  constructor(
    private authService:AuthService,
    private el:ElementRef,
    private renderer:Renderer2
  ) { }

ngOnInit(): void {

 this.authService.isLoggedIn$.subscribe(isAuth =>{
    const actionText = isAuth ? 'Logout' : 'Login';
    const actionLink = isAuth ? 'Login' : 'Logout';
    this.renderer.setProperty(this.el.nativeElement, 'innerText', actionText);
    this.renderer.setAttribute(this.el.nativeElement, 'routerLink', actionLink);

/*if (actionText=="Logout"){
this.authService.logout()
}*/

 /*  });
}
}*/

import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appAuthStatusToggle]'
})
export class AuthStatusToggleDirective implements OnInit, OnDestroy {
  private clickListener: (() => void) | undefined;
  private subscription: Subscription = new Subscription;

  constructor(
    private authService: AuthService,
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn$.subscribe(isAuth => {
      const actionText = isAuth ? 'Logout' : 'Login';
      this.renderer.setProperty(this.el.nativeElement, 'innerText', actionText);

      // Rimuovi il listener precedente per evitare duplicazioni
      if (this.clickListener) {
        this.clickListener();
      }

      // Aggiungi un nuovo listener di click in base allo stato di autenticazione
      this.clickListener = this.renderer.listen(this.el.nativeElement, 'click', () => {
        if (isAuth) {
          // Utente loggato: esegui logout
          this.authService.logout();
        //} else {
          // Utente non loggato: reindirizza alla pagina di login
          this.router.navigate(['../auth/login']);
        }
      });
    });
  }

  ngOnDestroy(): void {
    // Pulisci per evitare perdite di memoria
    if (this.clickListener) {
      this.clickListener();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
