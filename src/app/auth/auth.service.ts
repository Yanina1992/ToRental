import { HttpClient } from '@angular/common/http';
import { IRegister } from './interface/iregister';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { IAccessData } from './interface/iaccess-data';
import { ILogin } from './interface/ilogin';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Metodo che ci aiuta a decodificare i token jwt
  private jwtHelper: JwtHelperService = new JwtHelperService();

  apiUrl: string = 'http://localhost:3000/users'; //da controllare correttezza endpoint
  //Queste cose vanno ricontrollate, qui viene seguita la documentazione di npm x json.server
  registerUrl: string = this.apiUrl; //+`register`o whatever
  loginUrl: string = this.apiUrl; //+`/login`;

  //Il BehaviorSubject ci dice se l'utente è loggato o no. Il valore iniziale lo settiamo a null, e poi quando si logga si cambia
  private authSubject = new BehaviorSubject<null | IAccessData>(null);
  user$ = this.authSubject.asObservable();

  //Il primo operatore not(!) converte il dato in booleano; il secondo lo fa tornare indietro perché è stato invertito
  isLoggedIn$ = this.user$.pipe(map(user => !!user));

  //Proprietà in cui mi salvo un'istanza del timer che mi permetterà di fare l'autologout a token scaduto
  autoLogoutTimer: any;

  /*isLoggedIn = false;*/

  constructor(
    private http: HttpClient,
    private router: Router) {
    //Lancio il metodo restoredUser tutte le volte che la classe viene istanziata
    this.restoredUser();
  }

  login(data: ILogin) {
    //Ci logghiamo
    return (
      this.http
        .post<IAccessData>(this.loginUrl, data)
        //elaboriamo i dati prima del subscribe
        .pipe(
          tap(data => {
            //chiedo all'authSubject di usare il metodo next (che invierà un nuovo dato al subject)
            this.authSubject.next(data);
            //senza questo sistema l'utente si dovrebbe riloggare anche dopo un ricaricamento della pagina
            localStorage.setItem('accessData', JSON.stringify(data));

            //Preparo la fine del token
            const expDate = this.jwtHelper.getTokenExpirationDate(
              data.accessToken
            ) as Date;
            this.autoLogout(expDate);
          })
        )
    );
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/login']);
  }

  autoLogout(expDate: Date) {
    if(!expDate){
      return console.log(expDate)
    }
    const expMs = expDate.getTime() - new Date().getTime();
    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, expMs);
  }

  signUp(data: IRegister) {
    //faccio una chiamata post a registerUrl per creare l'utente
    return this.http
      .post<IAccessData>(this.registerUrl, data)
  }

  //Impediamo che l'utente venga buttato fuori
  restoredUser() {
    const userJson:string|null = localStorage.getItem('accessData');

    if (!userJson) return
    const accessData:IAccessData = JSON.parse(userJson);

    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return

    this.authSubject.next(accessData);
  }
}
