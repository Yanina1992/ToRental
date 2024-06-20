import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILogin } from '../interface/ilogin';
import { Router } from '@angular/router';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formData: ILogin = {
    email: '',
    password: '',
  };

  label:any = '';

  formSubmitted: boolean = false;

  constructor(private authSvc: AuthService,
              private router: Router,
              private svc: ServizioService
              ) {}
  ngOnInit(): void {
    this.readUrl()
  }

  passwordVisible = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  isLoginOk: boolean = false;

  login() {
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

  readUrl():void{
    this.svc.currentPage(this.label)
    console.log('url', this.label);
  }
}
