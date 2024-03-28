//Produzione
export const environment = {
  production: false,

  //Auth
  authEndPoint: 'http://localhost:3000/users',

  //veicoliEndPoint: 'http://localhost:3000/veicoli',

  //Veicoli
  veicoliEndPoint: ' http://dev.backend.torental.bentraining.it/veicolo',

  //Endpoints per popolare le select del form veicoli
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
};
