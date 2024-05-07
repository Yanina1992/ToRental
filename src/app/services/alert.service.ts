import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IAlert } from '../interfaces/ialert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  revisioniAlertUrl:string = environment.revisioniAlertEndPoint;
  assicurazioniAlertUrl:string = environment.assicurazioniAlertEndPoint;
  atpAlertUrl:string = environment.atpAlertEndPoint;
  bolliAlertUrl:string = environment.bolliAlertEndPoint;
  bomboleAlertUrl:string = environment.bomboleAlertEndPoint;
  tachigrafiAlertUrl:string = environment.tachigrafiAlertEndPoint;
  tagliandiAlertUrl:string = environment.tagliandiAlertEndPoint;


  constructor(
    private http:HttpClient
  ) { }

  getAllRevisioniAlert():Observable<IAlert[]>{
    return this.http.get<IAlert[]>(this.revisioniAlertUrl);
  }
  getAllAssicurazioniAlert():Observable<IAlert[]>{
    return this.http.get<IAlert[]>(this.assicurazioniAlertUrl)
  }
  getAllAtpAlert():Observable<IAlert[]>{
    return this.http.get<IAlert[]>(this.atpAlertUrl)
  }
  getAllBolliAlert():Observable<IAlert[]>{
    return this.http.get<IAlert[]>(this.bolliAlertUrl)
  }
  getAllBomboleAlert():Observable<IAlert[]>{
    return this.http.get<IAlert[]>(this.bomboleAlertUrl);
  }
  getAllTachigrafiAlert():Observable<IAlert[]>{
    return this.http.get<IAlert[]>(this.tachigrafiAlertUrl);
  }
  getAllTagliandiAlert():Observable<IAlert[]>{
    return this.http.get<IAlert[]>(this.tagliandiAlertUrl);
  }


}
