import { IAlert } from "../interfaces/alert/ialert";

export class Veicoli implements IAlert {
    //Alert properties
  public id_veicolo!: number;
  //id db
  public idgsdfg?: number | undefined;
  public anno?: number | undefined;
  public data_pagamento!: Date;
  public inizio_validita!: Date;
  public fine_validita!: Date;
  public importo!: number;
  public agenzia!: string;
  public polizza!: string;
  public tipo_scadenza: any;
  public livello!: number;
  public marca?: string | undefined;
  public modello?: string | undefined;
  public valid?: boolean | undefined;
  public expired?: boolean | undefined;

  public cilindrata: number = 0; //+min 0

  public colore: string = '';

  public destinazione_uso_nome?: string = '';
  public id_destinazione_uso?: number = 0;

  public marca_nome?: string = '';
  public id_marca?: number = 0;

  public massa: string = '';

  public modello_nome?: string = '';
  public id_modello?: number = 0;

  public numero_assi: number = 0;

  public portata: number = 0;

  public potenza: number = 0;

  public proprietario_nome?: string = '';
  public id_proprietario?: number = 0;

  public targa: string = '';

  public tipo_alimentazione_nome?: string = '';
  public id_alimentazione?: number = 0;

  public tipo_allestimento_nome?: string = '';
  public id_tipo_allestimento?: number = 0;

  public tipo_asse_nome?: string = '';
  public id_tipo_asse?: number = 0;

  public tipo_cambio_nome?: string = '';
  public id_tipo_cambio?: number = 0;

  public tipo_veicolo_nome?: string = '';
  public id_tipo_veicolo?: number | undefined = 0;

  public data_immatricolazione: any;

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
