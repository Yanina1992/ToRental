import { IAlert } from "../interfaces/ialert";
import { IAms } from "../interfaces/iams";

export class Veicoli{

  public id?: number;

  public id_stato: number | undefined = undefined;
  public nome_stato?: string = '';

  public id_disponibilita: number | undefined = undefined;
  public nome_disponibilita?: string | undefined = '';

  public tipo_veicolo_nome?: string = '';
  public id_tipo_veicolo?: number | undefined = 0;

  public targa?: string | undefined;

  public telaio?: string | undefined;

  //public marca?: string | undefined; //da toglieree
  public marca_nome?: string = '';
  public id_marca?: number = 0;

  //public modello?: string | undefined; //da togliere
  public modello_nome?: string = '';
  public id_modello?: number = 0;

  public cilindrata: number = 0;

  public colore: string = '';

  public destinazione_uso_nome?: string = '';
  public id_destinazione_uso?: number = 0;

  public massa: string = '';

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

  public larghezza_esterna?: number;
  public lunghezza_esterna?: number;

  public note: string = '';
  public altre_caratteristiche?: string | undefined;

  public arraySize: number = 0;

  public data_immatricolazione: any;

  public alert:IAlert | undefined;

  //'extra', 'current', 'next' and 'past' work only with getById

  public extra:IAlert | undefined;

  public current:any;

  public next:IAlert | undefined;

  public past:IAlert | undefined;

  public k:any [] = [];
}