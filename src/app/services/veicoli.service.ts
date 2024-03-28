import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Veicoli } from '../classes/veicoli';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ITipoVeicolo } from 'src/app/interfaces/options-select/itipo-veicolo';
import { IMarca } from 'src/app/interfaces/options-select/imarca';
import { IModello } from 'src/app/interfaces/options-select/imodello';
import { IDestinazioneDUso } from 'src/app/interfaces/options-select/idestinazione-duso';
import { ISocieta } from 'src/app/interfaces/options-select/isocieta';
import { IAlimentazione } from 'src/app/interfaces/options-select/ialimentazione';
import { IAllestimento } from 'src/app/interfaces/options-select/iallestimento';
import { IAsse } from 'src/app/interfaces/options-select/iasse';
import { ICambio } from 'src/app/interfaces/options-select/icambio';

@Injectable({
  providedIn: 'root'
})
export class VeicoliService {

  //Veicoli
 veicoliUrl: string = environment.veicoliEndPoint;
 //Select
 tipoVeicoliUrl:string = environment.tipoVeicoloEndPoint;
 marcaUrl:string = environment.marcaEndPoint;
 modelloUrl:string = environment.modelloEndPoint;
 destinazioneDUsoUrl:string = environment.destinazioneDUsoEndPoint;
 societaUrl:string = environment.societaEndPoint;
 alimentazioneUrl:string = environment.alimentazioneEndPoint;
 allestimentoUrl:string = environment.allestimentoEndPoint;
 tipoAsseUrl:string = environment.tipoAsseEndPoint;
 cambioUrl:string = environment.cambioEndPoint;
 

  constructor(
    private http:HttpClient
  ){}
//Veicoli
getAll():Observable<Veicoli[]>{
  return this.http.get<Veicoli[]>(this.veicoliUrl);
}
getById(id:number):Observable<Veicoli>{
  return this.http.get<Veicoli>(this.veicoliUrl+'?id'+id)
}
//----------
create(veicoli:Veicoli):Observable<Veicoli>{
  return this.http.post<Veicoli>(this.veicoliUrl, veicoli)
}
//Tipo veicolo
getAllTipiVeicoli():Observable<ITipoVeicolo[]>{
  return this.http.get<ITipoVeicolo[]>(this.tipoVeicoliUrl);
}




//Marca
getAllMarche():Observable<IMarca[]>{
  return this.http.get<IMarca[]>(this.marcaUrl);
}
//Modello
getAllModelli():Observable<IModello[]>{
  return this.http.get<IModello[]>(this.modelloUrl);
}






//Destinazione d'uso
getAllDestinazioniDUso():Observable<IDestinazioneDUso[]>{
  return this.http.get<IDestinazioneDUso[]>(this.destinazioneDUsoUrl);
}
//Società
getAllSocieta():Observable<ISocieta[]>{
  return this.http.get<ISocieta[]>(this.societaUrl);
}
//Alimentazione
getAllAlimentazioni():Observable<IAlimentazione[]>{
  return this.http.get<IAlimentazione[]>(this.alimentazioneUrl);
}
//Allestimento
getAllAllestimenti():Observable<IAllestimento[]>{
  return this.http.get<IAllestimento[]>(this.allestimentoUrl);
}
//Tipo asse
getAllTipiAsse():Observable<IAsse[]>{
  return this.http.get<IAsse[]>(this.tipoAsseUrl);
}
//Cambio
getAllTipiCambio():Observable<ICambio[]>{
  return this.http.get<ICambio[]>(this.cambioUrl);
}
}
