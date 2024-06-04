import { IAlert } from "../interfaces/ialert";

export class Veicoli implements IAlert {
  //getAll properties
  public id_veicolo!: number;

  public id_stato: number | undefined = undefined;
  public nome_stato?: string = '';

  public id_disponibilita: number | undefined = undefined;
  public nome_disponibilita?: string | undefined = '';

  public tipo_veicolo_nome?: string = '';
  public id_tipo_veicolo?: number | undefined = 0;

  public targa?: string | undefined;

  public telaio?: string | undefined;

  public marca?: string | undefined; //da toglieree
  public marca_nome?: string = '';
  public id_marca?: number = 0;

  public modello?: string | undefined; //da togliere
  public modello_nome?: string = '';
  public id_modello?: number = 0;

  public cilindrata: number = 0; //+min 0/

  public colore: string = '';

  public destinazione_uso_nome?: string = '';
  public id_destinazione_uso?: number = 0;

  public massa: string = ''; //è sbagliato, la massa è un numero!

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

  public larghezza_esterna?: number; //----------------------

  public lunghezza_esterna?: number; //----------------------

  public note: string = ''; //----------------------

  public altre_caratteristiche?: string | undefined; //---------------

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

  //'extra', 'current', 'next' and 'past' work only with getById

  public ams: {
      assicurazione_assistenza_stradale: boolean;
      assicurazione_atti_vandalici: boolean;
      assicurazione_bonus_malus: boolean;
      assicurazione_chilometri: boolean;
      assicurazione_collisione: boolean;
      assicurazione_cristalli: boolean;
      assicurazione_danni_terzi: boolean;
      assicurazione_eventi_atmosferici: boolean;
      assicurazione_furto_incendio: boolean;
      assicurazione_infortuni_conducente: boolean;
      assicurazione_kasko: boolean;
      assicurazione_perdita_valore: boolean;
      assicurazione_rca: boolean;
      assicurazione_scatola_nera: boolean;
      assicurazione_temporanea: boolean;
      atp: boolean;
      bollo: boolean;
      bombole: boolean;
      //gps: boolean;
      intervento: boolean;
      multa: boolean;
      revisione: boolean;
      sinistro: boolean;
      tachigrafo: boolean;
      tagliando: boolean;
  } | undefined;

  public extra:
    | {
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
      }
    | undefined;

  public current:
    | {
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
      }
    | undefined;

  public next:
    | {
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
      }
    | undefined;

  public past:
    | {
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
      }
    | undefined;

  public id?: number = 0;
  id_asse: any;
  id_Asse: any;
  id_cambio: any;
}