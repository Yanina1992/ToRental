import { HttpClient } from '@angular/common/http';
import { IRegister } from './iregister';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Route, Router } from '@angular/router';
import { IAccessData } from './iaccess-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Metodo che ci aiuta a decodificare i token jwt
  private jwtHelper: JwtHelperService = new JwtHelperService();

  apiUrl:string = 'http://dev.backend.torental.raphp.nhet';//da controllare correttezza endpoint
  //Queste cose vanno ricontrollate, qui viene seguita la documentazione di npm x json.server
  registerUrl:string = this.apiUrl+`/register`;//o whatever
  loginUrl:string = this.apiUrl+`/login`;

/*isLoggedIn = false;*/

  constructor(
    private http:HttpClient,
    private router: Router
    ) { }

    signUp(data:IRegister){
      //faccio una chiamata post a registerUrl per creare l'utente
      return this.http.post<IAccessData>(this.registerUrl, data);
    }

}
