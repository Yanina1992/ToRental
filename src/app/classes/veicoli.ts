import { DatePipe } from "@angular/common";

export class Veicoli
{ 

    //id = required

    public cilindrata: number = 0 ; //+min 0

    public colore: string = '';

    public destinazione_uso_nome?: string = '';
    public id_destinazione_uso?: number = 0;

    public marca_nome?: string = '';
    public id_marca?: number = 0 ;

    public massa: string = '';

    public modello_nome?: string = '';
    public id_modello?: number = 0;

    public numero_assi: number = 0;

    public portata: number =  0;

    public potenza: number = 0;

    public societa_nome?: string = '';
    public id_societa?: number = 0;

    public targa: string = '';

    public tipo_alimentazione_nome?: string = '';
    public id_tipo_alimentazione?: number = 0;

    public tipo_allestimento_nome?: string = '';
    public id_tipo_allestimento?: number = 0;

    public tipo_asse_nome?: string = '';
    public id_tipo_asse?: number = 0;

    public tipo_cambio_nome?: string = '';
    public id_tipo_cambio?: number = 0;

    public tipo_veicolo_nome?: string = '';
    public id_tipo_veicolo?: number = 0;

    public data_immatricolazione:any;

    public id?:number = 0;
}
