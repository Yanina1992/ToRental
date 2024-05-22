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

      //Remove the previous listener to avoid duplications
      if (this.clickListener) {
        this.clickListener();
      }

      //Add a new click listener based on the authentication status
      this.clickListener = this.renderer.listen(this.el.nativeElement, 'click', () => {
        if (isAuth) {
          //User logged in: perform logout
          this.authService.logout();
        //} else {
          //User not logged in: redirect to the login page
          this.router.navigate(['../auth/login']);
        }
      });
    });
  }

  ngOnDestroy(): void {
    //Clean up to avoid memory leaks
    if (this.clickListener) {
      this.clickListener();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
