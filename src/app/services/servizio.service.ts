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
  /*private _refreshAssicurazioniTable$ = new Subject<void>();
  get refreshAssicurazioniTable$() {
    return this._refreshAssicurazioniTable$;
  }
  private _refreshAtpTable$ = new Subject<void>();
  get refreshAtpTable$() {
    return this._refreshAtpTable$;
  }
  private _refreshBolliTable$ = new Subject<void>();
  get refreshBolliTable$() {
    return this._refreshBolliTable$;
  }
  private _refreshBomboleTable$ = new Subject<void>();
  get refreshBomboleTable$() {
    return this._refreshBomboleTable$;
  }
  private _refresRevisioniTable$ = new Subject<void>();
  get refresRevisioniTable$() {
    return this._refresRevisioniTable$;
  }
  private _refreshTachigrafiTable$ = new Subject<void>();
  get refreshTachigrafiTable$() {
    return this._refreshTachigrafiTable$;
  }
  private _refreshTagliandiTable$ = new Subject<void>();
  get refreshTagliandiTable$() {
    return this._refreshTagliandiTable$;
  }*/

  getAll(firstParam:string): Observable<IAlert[]> {
    return this.http.get<IAlert[]>(this.url + `/${firstParam}`);
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

  update(firstParam:string, assicurazione: IAlert): Observable<IAlert> {
    return this.http.put<IAlert>(
      this.url + `/${firstParam}/` + assicurazione.id,
      assicurazione
    );
  }

  delete(firstParam:string, assicurazione: IAlert) {
    return this.http.delete(
      this.url + `/${firstParam}` + `/` + assicurazione.id
    );
  }
}
