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
    tipo_scadenza:any;
    note:string;
}
