import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Veicoli } from './veicoli';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeicoliService {

 private veicoliUrl:string="http://torental.raffo.photo/veicolo/search/lambo";

  constructor(
    private http:HttpClient
  ){}

getAll():Observable<Veicoli[]>{
  return this.http.get<Veicoli[]>(this.veicoliUrl);
}

getById(id:number):Observable<Veicoli>{
  return this.http.get<Veicoli>(this.veicoliUrl+'?id='+id)
}

create(veicoli:Veicoli):Observable<Veicoli>{
  return this.http.post<Veicoli>(this.veicoliUrl,veicoli)
}

}
