export interface IManutenzione {

    anno:number;
    data_pagamento:string;
    inizio_validita:string;
    fine_validita:string;
    id?:number;
    id_disponibilita?:number;
    id_stato?:number;
    importo:number;
    id_veicolo:number;
    targa:string;
    note:string;

    cilindrata?:number;
    colore?:string;
    id_alimentazione?:number;
    id_destinazione_uso?:number;
    id_destinazione?:number;
    id_marca?:number;
    id_modello?:number;
    id_proprietario?:number;
    id_tipo_allestimento?:number;
    id_tipo_asse?:number;
    id_tipo_cambio?:number;
    id_tipo_veicolo?:number;
    larghezza_esterna?:number;
    lunghezza_esterna?:number;
    massa?:number;
    numero_assi?:number;
    portata?:number;
    potenza?:number;
    
}
