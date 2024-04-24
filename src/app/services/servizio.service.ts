import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IAlert } from '../interfaces/alert/ialert';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServizioService {
  private url: string =  environment.generalEndPoint;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  private _refreshTable$ = new Subject<void>();
  get refreshTable$() {
    return this._refreshTable$;
  }

  getAll(firstParam:string): Observable<IAlert[]> {
    return this.http.get<IAlert[]>(this.url + `/` + firstParam);
  }

  getById(firstParam:string, id: number): Observable<IAlert[]> {
    return this.http.get<IAlert[]>(
      this.url + `/${firstParam}` + `?id=` + id
    );
  }

  getExtraById(firstParam:string, id: number): Observable<IAlert> {
    return this.http.get<IAlert>(this.url + `/${firstParam}/` + id);
    //return this.http.get<IAlert[]>(this.IAlertUrl+'?id='+id)
  }

  create(firstParam:string, element: IAlert): Observable<IAlert> {
    return this.http
      .post<IAlert>(this.url + `/${firstParam}`, element)
      .pipe(
        tap(() => {
          this._refreshTable$.next();
        })
      );
  }

  update(firstParam:string, element: IAlert): Observable<IAlert> {
    return this.http.put<IAlert>(
      this.url + `/${firstParam}/` + element.id,
      element
    );
  }

  delete(firstParam:string, element: IAlert) {
    return this.http.delete(
      this.url + `/${firstParam}` + `/` + element.id
    );
  }
}
