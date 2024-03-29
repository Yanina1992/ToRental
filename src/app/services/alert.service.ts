import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IBombole } from '../interfaces/alert/ibombole';
import { IRevisioni } from '../interfaces/alert/irevisioni';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  revisioniAlertUrl:string = environment.revisioniAlertEndPoint;
  bomboleAlertUrl:string = environment.bomboleAlertEndPoint;

  constructor(
    private http:HttpClient
  ) { }

  getAllRevisioniAlert():Observable<IRevisioni[]>{
    return this.http.get<IRevisioni[]>(this.revisioniAlertUrl);
  }
  getAllBomboleAlert():Observable<IBombole[]>{
    return this.http.get<IBombole[]>(this.bomboleAlertUrl);
  }


}
