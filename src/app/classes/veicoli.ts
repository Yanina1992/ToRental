import { IAlert } from "../interfaces/ialert";

export class Veicoli implements IAlert {

    //getAll properties
  public id_veicolo!: number;

  public id_stato?:number = 0;
  public nome_stato?:string = '';

  public id_disponibilita?:number | undefined = 0;
  public nome_disponibilita?:string | undefined = '';

  public tipo_veicolo_nome?: string = '';
  public id_tipo_veicolo?: number | undefined = 0;

  public targa: string = '';

  public marca?: string | undefined;//da toglieree
  public marca_nome?: string = '';
  public id_marca?: number = 0;
  
  public modello?: string | undefined;//da togliere
  public modello_nome?: string = '';
  public id_modello?: number = 0;

  public cilindrata: number = 0; //+min 0/

  public colore: string = '';

  public destinazione_uso_nome?: string = '';
  public id_destinazione_uso?: number = 0;

  public massa: string = '';//è sbagliato, la massa è un numero!

  public numero_assi: number = 0;

  public portata: number = 0;

  public potenza: number = 0;

  public proprietario_nome?: string = '';
  public id_proprietario?: number = 0;

  public tipo_alimentazione_nome?: string = '';
  public id_alimentazione?: number = 0;

  public tipo_allestimento_nome?: string = '';
  public id_tipo_allestimento?: number = 0;

  public tipo_asse_nome?: string = '';
  public id_tipo_asse?: number = 0;

  public tipo_cambio_nome?: string = '';
  public id_tipo_cambio?: number = 0;

  public larghezza_esterna?:number;//----------------------

  public lunghezza_esterna?:number;//----------------------

  public note:string = '';//----------------------

  public altre_caratteristiche?: string | undefined;//---------------

  public arraySize: number = 0;

  //
  public data_immatricolazione: any;

  public anno?: number | undefined;
  public data_pagamento!: Date;
  public inizio_validita!: Date;
  public fine_validita!: Date;
  public importo!: number;
  public agenzia!: string;
  public polizza!: string;
  public tipo_scadenza: any;
  public livello!: number;
  
  public valid?: boolean | undefined;
  public expired?: boolean | undefined;

  

  //'extra' and 'current' work only with getById
  public extra: {
      assicurazione: IAlert[];
      atp: IAlert[];
      bollo: IAlert[];
      bombole: IAlert[];
      intervento: IAlert[];
      multa: IAlert[];
      revisione: IAlert[];
      sinistro: IAlert[];
      tachigrafo: IAlert[];
      tagliando: IAlert[];
  } | undefined;

  public current: {
      assicurazione: IAlert[];
      atp: IAlert[];
      bollo: IAlert[];
      bombole: IAlert[];
      intervento: IAlert[];
      multa: IAlert[];
      revisione: IAlert[];
      sinistro: IAlert[];
      tachigrafo: IAlert[];
      tagliando: IAlert[];
  } | undefined;

  public id?: number = 0;
  id_asse: any;
  id_Asse: any;
  id_cambio: any;
}