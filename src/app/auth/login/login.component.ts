import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILogin } from '../interface/ilogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formData: ILogin = {
    email: '',
    password: '',
  };

  constructor(private authSvc: AuthService) {}

  login() {
 this.authSvc.login(this.formData).subscribe(data=>{
  
 })
  }

}
