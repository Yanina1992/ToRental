import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Revisioni } from '../interfaces/alert/revisioni';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlerService {

  revisioniAlertUrl:string = environment.revisioniAlertEndPoint;

  constructor(
    private http:HttpClient
  ) { }

  getAllRevisioniAlert():Observable<Revisioni[]>{
    return this.http.get<Revisioni[]>(this.revisioniAlertUrl);
  }
}
