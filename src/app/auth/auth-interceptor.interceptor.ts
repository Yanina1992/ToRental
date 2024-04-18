import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { IAccessData } from './interface/iaccess-data';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private authSvc: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return this.authSvc.user$.pipe(
      take(1),
      switchMap((user: IAccessData | null) => {
        if (user) {
          //debugger;
          const newRequest = request.clone({
            headers: request.headers.append(
              'Authorization',
              `Bearer ${user!.access_token}  `
            ),
          });
          return next.handle(newRequest);
        } else {
          return next.handle(request);
        }
      }),
        catchError((error:HttpErrorResponse)=>{
          if(error.status == 401){
            console.log('Token scaduto o non valido')
          }
          return throwError(error);
        })
    );
  }
}
