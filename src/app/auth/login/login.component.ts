import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILogin } from '../interface/ilogin';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";

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

  formSubmitted: boolean = false;

  constructor(private authSvc: AuthService,
              private router: Router,
              private http:HttpClient
              ) {}

  passwordVisible = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  isLoginOk: boolean = false;

  login() {
    console.log('Login method called');

    this.formSubmitted = true;

    if (this.formData.email && this.formData.password) {
      this.isLoginOk = true;
      this.authSvc.login(this.formData).subscribe(
        (_data) => {
          this.router.navigate(['/pages/dashboard']);
        },
        (error) => {
          console.error('Login error', error);
          this.isLoginOk = false;
          console.log(this.isLoginOk);

        }
      );
    }
  }
}
