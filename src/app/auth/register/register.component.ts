import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IRegister } from '../interface/iregister';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  
  formData: IRegister = {
    name: '',
    cognome: '',
    email: '',
    password: '',
  };

  formSubmitted:boolean = false;

  constructor(private authSvc: AuthService, private router:Router) {}

  passwordVisible = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  isRegisterOk:boolean | undefined
  /*register() {*/
  singUp(){
    this.formSubmitted = true;
    
    if (
      this.formData.name &&
      this.formData.cognome &&
      this.formData.email &&
      this.formData.password
    ) {
     this.authSvc.login(this.formData).subscribe(data=>{
      this.router.navigate(['/pages/dashboard']);
     },
     error =>{
      console.error(error); 
     })

    } else {
      console.error('Compila tutti i campi richiesti per la registrazione.');
    }

  }
}
