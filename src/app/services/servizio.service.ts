import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { IManutenzione } from '../interfaces/imanutenzione';

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

  getAll(firstParam:string): Observable<IManutenzione[]> {
    return this.http.get<IManutenzione[]>(this.url + `/` + firstParam);
  }

  /*getById(firstParam:string, id: number): Observable<IManutenzione> {
    return this.http.get<IManutenzione>(
      this.url + `/${firstParam}` + `?id=` + id
    );
  }*/
  getById(firstParam: string, id: number): Observable<IManutenzione> {
    return this.http.get<IManutenzione>(`${this.url}/${firstParam}/${id}`);
  }
  

  getExtraById(id: number): Observable<IManutenzione> {
    return this.http.get<IManutenzione>(this.url + id);
  }

  create(firstParam:string, element: IManutenzione): Observable<IManutenzione> {
    return this.http
      .post<IManutenzione>(this.url + `/${firstParam}`, element)
      .pipe(
        tap(() => {
          this._refreshTable$.next();
        })
      );
  }

  update(firstParam:string, element: IManutenzione): Observable<IManutenzione> {
    return this.http.put<IManutenzione>(
      this.url + `/${firstParam}/` + element.id,
      element
    );
  }

  delete(firstParam:string, element: IManutenzione) {
    return this.http.delete(
      this.url + `/${firstParam}` + `/` + element.id
    );
  }
}
