import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRegister } from './interface/iregister';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { IAccessData } from './interface/iaccess-data';
import { ILogin } from './interface/ilogin';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from './../../environments/environment.development'
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Metodo che ci aiuta a decodificare i token jwt
  private jwtHelper: JwtHelperService = new JwtHelperService();

  apiUrl: string = environment.authEndPoint; //da controllare correttezza endpoint
  //Queste cose vanno ricontrollate, qui viene seguita la documentazione di npm x json.server
  registerUrl: string = environment.authEndPoint; //+ `/register`;o whatever
  loginUrl: string = environment.authEndPoint; //+`/login`;

  //Il BehaviorSubject ci dice se l'utente è loggato o no. Il valore iniziale lo settiamo a null, e poi quando si logga si cambia
  private authSubject = new BehaviorSubject<null | IAccessData>(null);
  user$ = this.authSubject.asObservable();

  //Il primo operatore not(!) converte il dato in booleano; il secondo lo fa tornare indietro perché è stato invertito
  isLoggedIn$ = this.user$.pipe(map(user => !!user));

  //Proprietà in cui mi salvo un'istanza del timer che mi permetterà di fare l'autologout a token scaduto
  autoLogoutTimer: any;
  //cookieValue: string;

  /*isLoggedIn = false;*/

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
    ) {
    //Lancio il metodo restoredUser tutte le volte che la classe viene istanziata
    this.restoredUser();

    //this.cookieService.set('Test', 'Hello World');
    //this.cookieValue = this.cookieService.get('Test');
  }

readCookie(){
  const cookieValue = this.cookieService.get('cookieName');
  console.log(cookieValue);
}

  login(data: ILogin) {
    //Ci logghiamo
    console.log("AuthService login called with data:", data);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return (
      this.http
        .post<IAccessData>(this.loginUrl, data, {headers})
        //elaboriamo i dati prima del subscribe
        .pipe(
          tap(data => {
            
            //chiedo all'authSubject di usare il metodo next (che invierà un nuovo dato al subject)
            this.authSubject.next(data);
        
            try{
              console.log("Saving data to locale storage:", data);
            //senza questo sistema l'utente si dovrebbe riloggare anche dopo un ricaricamento della pagina
            localStorage.setItem('accessData', JSON.stringify(data));
            } catch (error) {
              console.error("Error saving to localStorage:", error);
            }
            

            //Preparo la fine del token
            const expDate = this.jwtHelper.getTokenExpirationDate(
              data.access_token
            ) as Date;
            console.log("Token expiration date:", expDate);
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

    if (!userJson) {
      return
    }
    const accessData:IAccessData = JSON.parse(userJson);
    console.log("Token being checked:", accessData.access_token);

    if (this.jwtHelper.isTokenExpired(accessData.access_token)) {
      console.log("Token expired:", accessData.access_token);
      return;
 }
      console.log("User restored with access data:", accessData);
    this.authSubject.next(accessData);
 
}}
