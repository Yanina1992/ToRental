import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILogin } from '../ilogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formData:ILogin = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router:Router
    ){}

  /*login(email: string, password: string){
    this.authService.getCsrfCookie().subscribe(()=>{
      this.authService.login(email, password).subscribe(response => {
        console.log("Login ok", response);
      }, error => {
        console.error("Errore nel login", error);
      })
    })

  }*/

}
