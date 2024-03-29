import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILogin } from '../interface/ilogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData: ILogin = {
    email: '',
    password: '',
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  passwordVisible = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  login() {
    this.authSvc.login(this.formData).subscribe(
      (data) => {
        this.router.navigate(['/pages/dashboard']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
