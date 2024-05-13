import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { IAlert } from '../interfaces/ialert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private revisioniAlertUrl:string = environment.revisioniAlertEndPoint;
  private assicurazioniAlertUrl:string = environment.assicurazioniAlertEndPoint;
  private atpAlertUrl:string = environment.atpAlertEndPoint;
  private bolliAlertUrl:string = environment.bolliAlertEndPoint;
  private bomboleAlertUrl:string = environment.bomboleAlertEndPoint;
  private tachigrafiAlertUrl:string = environment.tachigrafiAlertEndPoint;
  private tagliandiAlertUrl:string = environment.tagliandiAlertEndPoint;

  //BehaviorSubject to handle alerts
  private manutenzioniScaduteSource = new BehaviorSubject<IAlert[]>([]);
  private manutenzioniInScadenzaBreveTermineSource = new BehaviorSubject<IAlert[]>([]);
  private manutenzioniInScadenzaMedioTermineSource = new BehaviorSubject<IAlert[]>([]);
  private manutenzioniInScadenzaLungoTermineSource = new BehaviorSubject<IAlert[]>([]);

  //Publicly accessible observables
  manutenzioniScadute$ = this.manutenzioniScaduteSource.asObservable();
  manutenzioniInScadenzaBreveTermine$ = this.manutenzioniInScadenzaBreveTermineSource.asObservable();
  manutenzioniInScadenzaMedioTermine$ = this.manutenzioniInScadenzaMedioTermineSource.asObservable();
  manutenzioniInScadenzaLungoTermine$ = this.manutenzioniInScadenzaLungoTermineSource.asObservable();

  constructor(
    private http:HttpClient
  ) { }

  //Fetch data and update BehaviorSubjects
  getAllRevisioniAlert():Observable<IAlert[]>{
    return this.http.get<{data: {[key: string]: IAlert}, total: number}>(this.revisioniAlertUrl).pipe(
      map(response => Object.values(response.data)), // Convert object to array
      tap(data => {
          console.log("Processed data:", data); // Check the processed data
          this.updateAlerts(data);
      }),
      catchError(error => {
          console.error("Error fetching revisioni alerts:", error);
          return throwError(() => new Error('Error fetching data'));
      })
  );
  }
  private updateAlerts(data:any):void{
    console.log("Updating alerts with data:", data);
    this.manutenzioniScaduteSource.next(data.filter((alert: { livello: number; }) => alert.livello < 0));
    this.manutenzioniInScadenzaBreveTermineSource.next(data.filter((alert: { livello: number; }) => alert.livello >= 0 && alert.livello < 7));
    this.manutenzioniInScadenzaMedioTermineSource.next(data.filter((alert: { livello: number; }) => alert.livello >= 7 && alert.livello < 15));
    this.manutenzioniInScadenzaLungoTermineSource.next(data.filter((alert: { livello: number; }) => alert.livello >= 15 && alert.livello <= 30));
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
