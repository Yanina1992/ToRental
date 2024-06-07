export interface IAlert {
    id_veicolo: number;
    id: number;
    anno?: number;
    data_pagamento: Date;
    inizio_validita: Date;
    fine_validita: Date;
    importo: number;
    agenzia: string;
    polizza: string;
    tipo_scadenza: any;
    livello: number;
    marca?: string;
    modello?: string;
    valid?: boolean;
    expired?: boolean;
    targa?:any;
    stato:any;
}
