export interface IAlert {
    id_veicolo: number;
    id?: number | undefined;
    anno?: number | undefined;
    data_pagamento: Date;
    inizio_validita: Date;
    fine_validita: Date;
    importo: number;
    agenzia: string;
    polizza: string;
    tipo_scadenza: any;
    livello: number;
    marca?: string | undefined;
    modello?: string | undefined;
    valid?: boolean | undefined;
    expired?: boolean | undefined;
    targa?:any
}
