import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRegister } from './interface/iregister';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { IAccessData } from './interface/iaccess-data';
import { ILogin } from './interface/ilogin';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from '../../environments/environment.development'
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Method that helps us decode JWT tokens
  private jwtHelper: JwtHelperService = new JwtHelperService();

  // API URLs for registration and login
  apiUrl: string = environment.authEndPoint;
  registerUrl: string = environment.authEndPoint; //+ `/register`;
  loginUrl: string = environment.authEndPoint; //+`/login`;

  // BehaviorSubject indicates whether the user is logged in or not. Initial value is set to null and then changed when the user logs in.
  private authSubject = new BehaviorSubject<null | IAccessData>(null);
  user$ = this.authSubject.asObservable();

  // The first operator (!) converts the data to boolean; the second one reverts it back because it has been inverted
  isLoggedIn$ = this.user$.pipe(map(user => !!user));

  // Property to store an instance of the timer for auto-logout when the token expires
  autoLogoutTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    // Invoke the restoredUser method every time the class is instantiated
    this.restoredUser();
  }

  readCookie(){
    const cookieValue = this.cookieService.get('cookieName');
    console.log(cookieValue);
  }

  login(data: ILogin) {
    // Logging in
    console.log("AuthService login called with data:", data);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return (
      this.http
        .post<IAccessData>(this.loginUrl, data, {headers})
        // Process the data before subscribing
        .pipe(
          tap(data => {

            // Ask authSubject to use the next method (which will send new data to the subject)
            this.authSubject.next(data);

            try{
              console.log("Saving data to locale storage:", data);
              // Without this system, the user would have to log in again after a page reload
              localStorage.setItem('accessData', JSON.stringify(data));
            } catch (error) {
              console.error("Error saving to localStorage:", error);
            }


            // Prepare token expiration
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
    this.router.navigate(['']);
  }

  autoLogout(expDate: Date) {
    if(!expDate){
      return console.log(expDate)
    }
    const expMs = expDate.getTime() - new Date().getTime();
    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, expMs);
    this.router.navigate(['']);
  }

  signUp(data: IRegister) {
    // Make a post call to registerUrl to create the user
    return this.http
      .post<IAccessData>(this.registerUrl, data)
  }

  // Prevent the user from being kicked out
  restoredUser() {
    const userJson:string|null = localStorage.getItem('accessData');

    if (!userJson) {
      return
    }
    const accessData:IAccessData = JSON.parse(userJson);
    //console.log("Token being checked:", accessData.access_token);

    if (this.jwtHelper.isTokenExpired(accessData.access_token)) {
      console.log("Token expired:", accessData.access_token);
      this.router.navigate(['']);
      return;
    }
    //console.log("User restored with access data:", accessData);
    this.authSubject.next(accessData);

  }}
