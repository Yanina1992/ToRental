//Production
export const environment = {
  production: false,

  //Auth
  authEndPoint: 'http://dev.backend.torental.bentraining.it/api/auth/login',
  //authEndPoint: 'http://localhost:3000/users',

  //Veicoli
  veicoliEndPoint: 'http://dev.backend.torental.bentraining.it/veicolo',
  //veicoliEndPoint: 'http://torental.raffo.photo/veicolo/search/a',

  //Endpoints to fill up the select's options
  tipoVeicoloEndPoint: 'http://dev.backend.torental.bentraining.it/tipo_veicolo',
  societaEndPoint: 'http://dev.backend.torental.bentraining.it/societa_veicolo',
  allestimentoEndPoint: 'http://dev.backend.torental.bentraining.it/allestimento_veicolo',
  marcaEndPoint: 'http://dev.backend.torental.bentraining.it/marca_veicolo',
  modelloEndPoint: 'http://dev.backend.torental.bentraining.it/modello_veicolo',
  tipoAsseEndPoint: 'http://dev.backend.torental.bentraining.it/asse_veicolo',
  cambioEndPoint: 'http://dev.backend.torental.bentraining.it/cambio_veicolo',
  alimentazioneEndPoint: 'http:///dev.backend.torental.bentraining.it/alimentazione_veicolo',
  destinazioneDUsoEndPoint: 'http://dev.backend.torental.bentraining.it/destinazione_veicolo',
  modelloByMarcaEndPoint: 'http://dev.backend.torental.bentraining.it/get-modello-by-marca',

  //Endpoints alert
  revisioniAlertEndPoint:'http://dev.backend.torental.bentraining.it/revisione/alert',
  assicurazioniAlertEndPoint: 'http://dev.backend.torental.bentraining.it/assicurazione/alert',
  atpAlertEndPoint:'http://dev.backend.torental.bentraining.it/atp/alert',
  bolliAlertEndPoint:'http://dev.backend.torental.bentraining.it/bollo/alert',
  bomboleAlertEndPoint: 'http://dev.backend.torental.bentraining.it/bombole/alert',
  tachigrafiAlertEndPoint:'http://dev.backend.torental.bentraining.it/tachigrafo/alert',
  tagliandiAlertEndPoint: 'http://dev.backend.torental.bentraining.it/tagliando/alert',

  //Assicurazione, Revisione, ecc > CRUD
  generalEndPoint: 'http://dev.backend.torental.bentraining.it',
};
