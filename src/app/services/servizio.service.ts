import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { IManutenzione } from '../interfaces/imanutenzione';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServizioService {
  private url: string =  environment.generalEndPoint;

  private currentPageNameSubject = new BehaviorSubject<string>('Dashboard');
  currentPageName$ = this.currentPageNameSubject.asObservable();

  currentPage(currentPage:string){
    this.currentPageNameSubject.next(currentPage);
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  private _refreshTable$ = new Subject<void>();
  get refreshTable$() {
    return this._refreshTable$;
  }

  notFoundMessage:boolean = false;
  getAllWithParams(firstParam: string | null, page: number, pageSize: number, text?: string): Observable<IManutenzione[]> {
    // Costruisci l'URL con template literals
    const url = `${this.url}/${firstParam}?page=${page}&pageSize=${pageSize}&search=${text || ''}`;
    return this.http.get<IManutenzione[]>(url);
  }
  
//(this.url + `/` + firstParam)
  getById(firstParam: string, id: number): Observable<IManutenzione> {
    return this.http.get<IManutenzione>(`${this.url}/${firstParam}/${id}`);
  }
  
  getExtraById(id: number): Observable<IManutenzione> {
    return this.http.get<IManutenzione>(this.url + id);
  }

  create(firstParam:string, element: IManutenzione): Observable<IManutenzione> {
    return this.http
      .post<IManutenzione>(`${this.url}/${firstParam}`, element)
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
