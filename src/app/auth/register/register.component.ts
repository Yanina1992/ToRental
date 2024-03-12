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
    nome: '',
    cognome: '',
    email: '',
    password: '',
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  register() {

    /*if (
      this.formData.nome &&
      this.formData.cognome &&
      this.formData.email &&
      this.formData.password
    ) {
      this.authSvc.signUp(this.formData)
      .subscribe(res);
    } else {
      console.error('Compila tutti i campi richiesti per la registrazione.');
    }*/

    this.authSvc.signUp(this.formData)
    .subscribe(res => {
      console.log('registrato')
      this.router.navigate(['/register'])
    })

  }
}
