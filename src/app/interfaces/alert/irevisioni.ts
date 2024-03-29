export interface IRevisioni {
    idVeicolo:number;
    idRevisione?:number;
    anno?:number;
    data_pagamento:Date;
    inizio_validita:Date;
    fine_validita:Date;
    importo:number;
    agenzia:string;
    polizza:string;

    tipo_scadenza:[];
    //Giorni mancanti alla scadenza
    livello:number;
    targa?:string;
    id_marca?:number;
    marca?:string;
    id_modello?:number;
    modello?:string;

    valid?:boolean;
    expired?:boolean;
}
