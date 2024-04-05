import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IBombole } from '../interfaces/alert/ibombole';
import { IRevisioni } from '../interfaces/alert/irevisioni';
import { IAssicurazioni } from '../interfaces/alert/iassicurazioni';
import { IAtp } from '../interfaces/alert/iatp';
import { ITachigrafi } from '../interfaces/alert/itachigrafi';
import { ITagliandi } from '../interfaces/alert/itagliandi';
import { IBolli } from '../interfaces/alert/ibolli';

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

  getAllRevisioniAlert():Observable<IRevisioni[]>{
    return this.http.get<IRevisioni[]>(this.revisioniAlertUrl);
  }
  getAllAssicurazioniAlert():Observable<IAssicurazioni[]>{
    return this.http.get<IAssicurazioni[]>(this.assicurazioniAlertUrl)
  }
  getAllAtpAlert():Observable<IAtp[]>{
    return this.http.get<IAtp[]>(this.atpAlertUrl)
  }
  getAllBolliAlert():Observable<IBolli[]>{
    return this.http.get<IBolli[]>(this.bolliAlertUrl)
  }
  getAllBomboleAlert():Observable<IBombole[]>{
    return this.http.get<IBombole[]>(this.bomboleAlertUrl);
  }
  getAllTachigrafiAlert():Observable<ITachigrafi[]>{
    return this.http.get<ITachigrafi[]>(this.tachigrafiAlertUrl);
  }
  getAllTagliandiAlert():Observable<ITagliandi[]>{
    return this.http.get<ITagliandi[]>(this.tagliandiAlertUrl);
  }


}
