import { SafeResourceUrl } from "@angular/platform-browser";

export interface IManutenzione {
    agenzia:string;
    anno:number;
    data_pagamento:string;
    inizio_validita:string;
    fine_validita:string;
    id?:number;
    id_veicolo:number;
    importo:number;
    polizza:string;
    targa:string;
    targa_attuale?:string;
    telaio?:string;
    tipo_scadenza:any;
    note:string;
    arraySize?: number;
    targhe?: { attiva: boolean, targa:string , data_immatricolazione: Date}[]; 
}
