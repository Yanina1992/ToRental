//Production
export const environment = {
  production: false,

  //Auth
  authEndPoint: 'http://localhost:3000/users',

  //Veicoli
  veicoliEndPoint: ' http://dev.backend.torental.bentraining.it/veicolo',
  //veicoliEndPoint: 'http://localhost:3000/veicoli',

  //Endpoints to fill up the select's options
  tipoVeicoloEndPoint: 'http://torental.raffo.photo/get_tipo_veicolo',
  societaEndPoint: 'http://torental.raffo.photo/get_proprietario',
  allestimentoEndPoint: 'http://torental.raffo.photo/get_tipo_allestimento',
  marcaEndPoint: 'http://torental.raffo.photo/get_marca',
  modelloEndPoint: 'http://torental.raffo.photo/get_modello',
  tipoAsseEndPoint: 'http://torental.raffo.photo/get_tipo_asse',
  cambioEndPoint: 'http://torental.raffo.photo/get_tipo_cambio',
  alimentazioneEndPoint: 'http://torental.raffo.photo/get_alimentazione',
  destinazioneDUsoEndPoint: 'http://torental.raffo.photo/get_destinazione_uso',
  modelloByMarcaEndPoint: 'http://torental.raffo.photo/get-modello-by-marca',

  //Endpoints alert
  revisioniAlertEndPoint:'http://dev.backend.torental.bentraining.it/revisione/alert',
  assicurazioniAlertEndPoint: 'http://dev.backend.torental.bentraining.it/assicurazione/alert',
  atpAlertEndPoint:'http://dev.backend.torental.bentraining.it/atp/alert',
  bolliAlertEndPoint:'http://dev.backend.torental.bentraining.it/bollo/alert',
  bomboleAlertEndPoint: 'http://dev.backend.torental.bentraining.it/bombole/alert',
  tachigrafiAlertEndPoint:'http://dev.backend.torental.bentraining.it/tachigrafo/alert',
  tagliandiAlertEndPoint: 'http://dev.backend.torental.bentraining.it/tagliando/alert',
};
