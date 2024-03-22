export const environment = {    

veicoliEndPoint: 'http://torental.raffo.photo/veicolo/search/a',

societaEndPoint: 'http://torental.raffo.photo/get_proprietario',

tipoVeicoloEndPoint: 'http://torental.raffo.photo/get_tipo_veicolo',

allestimentoEndPoint: 'http://torental.raffo.photo/get_tipo_allestimento',

marcaEndPoint: 'http://torental.raffo.photo/get_marca',

modelloEndPoint: 'http://torental.raffo.photo/get_modello',

tipoAsseEndPoint: 'http://torental.raffo.photo/get_tipo_asse',

cambioEndPoint: 'http://torental.raffo.photo/get_tipo_cambio',

alimentazioneEndPoint: 'http://torental.raffo.photo/get_alimentazione',

destinazioneDUsoEndPoint: 'http://torental.raffo.photo/get_destinazione_uso',

modelloByMarcaEndPoint: 'http://torental.raffo.photo/get-modello-by-marca',
};


/*<script>
	var id_marca = $('#id_marca');
	var id_modello = $('#id_modello');
	id_marca.change(function() {
		var marcaID = $(this).val();
		if (marcaID) {
			$.ajax({
				type: "GET",
				url: "/get-modello-by-marca/" + marcaID,
				success: function(res) {
					if (res) {
						id_modello.empty();
						id_modello.append('<option>Selezionare Un Modello</option>');
						$.each(res, function(key, value) {
							id_modello.append('<option value="' + key + '">' + value + '</option>');
						});
					} else {
						id_modello.empty();
					}
				}
			});
		} else {
			id_modello.empty();
		}
	});

</script>*/

