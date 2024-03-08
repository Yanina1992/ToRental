import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  private url:string="http://torental.bentraining.it/tagliando";

  constructor(
    private http:HttpClient
  ) { }

  /* DA TIPIZZARE!!!!!!*/

getAll(): Observable<any[]> {
  return this.http.get<any[]>(this.url);
}

getById(id: number): Observable<any[]> {
  return this.http.get<any[]>(this.url + '?id=' + id);
}

create(tagliando: any): Observable<any> {
  return this.http.post<any>(this.url, tagliando);
}

update(tagliando: any): Observable<any> {
  return this.http.put<any>(this.url + '/' + tagliando.id, tagliando);
}

delete(tagliando: any) {
  return this.http.delete(this.url + '/' + tagliando.id);
}

}
