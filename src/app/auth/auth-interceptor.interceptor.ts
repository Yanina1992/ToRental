import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from './auth.service';
import { IAccessData } from './interface/iaccess-data';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private authSvc: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authSvc.user$.pipe(
      take(1),
      switchMap((user: IAccessData | null) => {
        if (!user) return next.handle(request);

        const newRequest = request.clone({
          headers: request.headers.append(
            'Authorization',
            `Bearer ${user.accessToken}  `
          ),
        });
        return next.handle(newRequest);
      })
    );

    return next.handle(request);
  }
}
