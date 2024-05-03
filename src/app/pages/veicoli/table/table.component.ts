import { Component, OnInit } from '@angular/core';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from '../../../services/veicoli.service';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { IAlimentazione } from 'src/app/interfaces/options-select/ialimentazione';
import { IAllestimento } from 'src/app/interfaces/options-select/iallestimento';
import { IAsse } from 'src/app/interfaces/options-select/iasse';
import { ICambio } from 'src/app/interfaces/options-select/icambio';
import { IDestinazioneDUso } from 'src/app/interfaces/options-select/idestinazione-duso';
import { IMarca } from 'src/app/interfaces/options-select/imarca';
import { IModello } from 'src/app/interfaces/options-select/imodello';
import { ISocieta } from 'src/app/interfaces/options-select/isocieta';
import { ITipoVeicolo } from 'src/app/interfaces/options-select/itipo-veicolo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  veicoloForm: Veicoli = new Veicoli();

  page = 1;
  pageSize = 10;
  collectionSize = Veicoli.length;
  veicoli: Veicoli[] = [];
  veicoliToShow: Veicoli[] | undefined;

  filteredVeicoli: Veicoli[] = [];
  filter = new FormControl('');

  spinner: boolean | undefined = true;

  //Variables to manage select options
  tipiVeicoli: ITipoVeicolo[] = [];
  marche: IMarca[] = [];
  modelli: IModello[] = [];
  destinazioni: IDestinazioneDUso[] = [];
  societas: ISocieta[] = [];
  tipiAlimentazione: IAlimentazione[] = [];
  allestimenti: IAllestimento[] = [];
  tipiAsse: IAsse[] = [];
  tipiCambio: ICambio[] = [];

  constructor(private veicoliSvc: VeicoliService) {}

  ngOnInit() {
    this.veicoliSvc.refreshVeicoliTable$.subscribe(() => {
      this.getAllVeicoli();
    });
    this.getAllVeicoli();

    //Selects:
    //tipi di veicoli
    this.veicoliSvc.getAllTipiVeicoli().subscribe((data: ITipoVeicolo[]) => {
      this.tipiVeicoli = data;
    });
    //marche
    this.veicoliSvc.getAllMarche().subscribe((data: IMarca[]) => {
      this.marche = data;
    });
    //destinazioni d'uso
    this.veicoliSvc.getAllDestinazioniDUso().subscribe((data: IDestinazioneDUso[]) => {
        this.destinazioni = data;
      });
    //società
    this.veicoliSvc.getAllSocieta().subscribe((data: ISocieta[]) => {this.societas = data;
    });
    //tipi alimentazione
    this.veicoliSvc.getAllAlimentazioni().subscribe((data: IAlimentazione[]) => {
        this.tipiAlimentazione = data;
      });
    //allestimenti
    this.veicoliSvc.getAllAllestimenti().subscribe((data: IAllestimento[]) => {
      this.allestimenti = data;
    });
    //tipi asse
    this.veicoliSvc.getAllTipiAsse().subscribe((data: IAsse[]) => {
      this.tipiAsse = data;
    });
    //cambi
    this.veicoliSvc.getAllTipiCambio().subscribe((data: ICambio[]) => {
      this.tipiCambio = data;
    });
  }

  private getAllVeicoli() {
    this.veicoliSvc.getAll().subscribe((data: Veicoli[]) => {
      this.veicoli = data.reverse();
      this.collectionSize = data.length;
      this.refreshVeicoli();

      this.filteredVeicoli = [...this.veicoli];
      this.setupFilter();

      if (data) {
        this.spinner = false;
      }
    });
  }

  setupFilter() {
    this.filter.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((text) =>
          text!.trim().length > 0 ? this.search(text!) : this.veicoli
        )
      )
      .subscribe((filtered) => {
        this.filteredVeicoli = filtered;
        this.collectionSize = filtered.length;
        this.refreshVeicoli();
      });
  }

  //Search by targa
  search(text: string): Veicoli[] {
    const term = text.toLowerCase();
    console.log(text);

    return this.veicoli.filter((veicolo) =>
      (veicolo.targa || '').toLowerCase().startsWith(term)
    );
  }

  saveFilterByTipoVeicoloRes: Veicoli[] = [];
  saveFilterByMarcaRes: Veicoli[] = [];
  saveFilterByModelloRes: Veicoli[] = [];
  saveFilterByDestinazioneRes: Veicoli[] = [];
  saveFilterBySocietaRes: Veicoli[] = [];
  saveFilterByAlimentazioneRes: Veicoli[] = [];
  saveFilterByAllestimentoRes: Veicoli[] = [];
  saveFilterByAsseRes: Veicoli[] = [];
  saveFilterByCambioRes: Veicoli[] = [];

  myFilteredVeicoli: Veicoli[] = [];

  customizedSearch() {
    this.myFilteredVeicoli = [];
    try {
      if (this.veicoloForm.id_tipo_veicolo && this.veicoloForm.id_tipo_veicolo > 0
      ) {
        this.filterByTipoVeicolo();
      }
      if (this.veicoloForm.id_marca && this.veicoloForm.id_marca > 0) {
        this.filterByMarca();
      }
      if (this.veicoloForm.id_modello && this.veicoloForm.id_modello > 0) {
        this.filterByModello();
      }
      if (
        this.veicoloForm.id_destinazione_uso &&
        this.veicoloForm.id_destinazione_uso > 0
      ) {
        this.filterByDestinazione();
      }
      if (this.veicoloForm.id_societa && this.veicoloForm.id_societa > 0) {
        this.filterBySocieta();
      }
      if (
        this.veicoloForm.id_tipo_alimentazione &&
        this.veicoloForm.id_tipo_alimentazione > 0
      ) {
        this.filterByAlimentazione();
      }
      if (
        this.veicoloForm.id_tipo_allestimento &&
        this.veicoloForm.id_tipo_allestimento > 0
      ) {
        this.filterByAllestimento();
      }
      if (this.veicoloForm.id_tipo_asse && this.veicoloForm.id_tipo_asse > 0) {
        this.filterByAsse();
      }
      if (
        this.veicoloForm.id_tipo_cambio &&
        this.veicoloForm.id_tipo_cambio > 0
      ) {
        this.filterByCambio();
      }
    } catch {
      throw new Error();
    } finally {
      this.showResOfAllFilters();
    }
  }

  filterByTipoVeicolo() {
    // If myFilteredVeicoli has any element filter this array
    if (this.myFilteredVeicoli.length > 0) {
      // Make another array including only the element that have the following conditions
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_tipo_veicolo == this.veicoloForm.id_tipo_veicolo
      );
    } else {
      // If myFilteredVeicoli is empty, filter the veicoli array
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_tipo_veicolo == this.veicoloForm.id_tipo_veicolo
      );
    }
    console.log(
      'myFilteredVeicoli after filterByTipoVeicolo',
      this.myFilteredVeicoli
    );
    return this.myFilteredVeicoli;
  }
  filterByMarca() {
    if (this.myFilteredVeicoli.length > 0) {
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_marca == this.veicoloForm.id_marca
      );
    } else {
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_marca == this.veicoloForm.id_marca
      );
    }
    console.log(
      'myFilteredVeicoli after filterByMarca',
      this.myFilteredVeicoli
    );
    return this.myFilteredVeicoli;
  }
  filterByModello() {
    if (this.myFilteredVeicoli.length > 0) {
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_modello == this.veicoloForm.id_modello
      );
    } else {
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_modello == this.veicoloForm.id_modello
      );
    }
    console.log(
      'myFilteredVeicoli after filterByModello',
      this.myFilteredVeicoli
    );
    return this.myFilteredVeicoli;
  }
  filterByDestinazione() {
    if (this.myFilteredVeicoli.length > 0) {
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_destinazione_uso == this.veicoloForm.id_destinazione_uso
      );
    } else {
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_destinazione_uso == this.veicoloForm.id_destinazione_uso
      );
    }
    console.log('does filterByDestinazione work?', this.myFilteredVeicoli);
    return this.myFilteredVeicoli;
  }
  filterBySocieta() {
    if (this.myFilteredVeicoli.length > 0) {
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_societa == this.veicoloForm.id_societa
      );
    } else {
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_societa == this.veicoloForm.id_societa
      );
    }
    console.log('does filterBySocieta work?', this.myFilteredVeicoli);
    return this.myFilteredVeicoli;
  }
  filterByAlimentazione() {
    console.log(this.myFilteredVeicoli);

    if (this.myFilteredVeicoli.length > 0) {
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_tipo_alimentazione == this.veicoloForm.id_tipo_alimentazione
      );
    } else {
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_tipo_alimentazione == this.veicoloForm.id_tipo_alimentazione
      );
    }
    console.log('does filterByAlimentazione work?', this.myFilteredVeicoli);
    return this.myFilteredVeicoli;
  }
  filterByAllestimento() {
    if (this.myFilteredVeicoli.length > 0) {
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_tipo_allestimento == this.veicoloForm.id_tipo_allestimento
      );
    } else {
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_tipo_allestimento == this.veicoloForm.id_tipo_allestimento
      );
    }
    console.log('does filterByAllestimento work?', this.myFilteredVeicoli);
    return this.myFilteredVeicoli;
  }
  filterByAsse() {
    if (this.myFilteredVeicoli.length > 0) {
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_tipo_asse == this.veicoloForm.id_tipo_asse
      );
    } else {
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_tipo_asse == this.veicoloForm.id_tipo_asse
      );
    }
    console.log('does filterByAsse work?', this.myFilteredVeicoli);
    return this.myFilteredVeicoli;
  }
  filterByCambio() {
    if (this.myFilteredVeicoli.length > 0) {
      this.myFilteredVeicoli = this.myFilteredVeicoli.filter(
        (e) => e.id_tipo_cambio == this.veicoloForm.id_tipo_cambio
      );
    } else {
      this.myFilteredVeicoli = this.veicoli.filter(
        (e) => e.id_tipo_cambio == this.veicoloForm.id_tipo_cambio
      );
    }
    console.log('does filterByCambio work?', this.myFilteredVeicoli);
    return this.myFilteredVeicoli;
  }

  /*showResOfAllFilters() {
    console.log('the very last check', this.myFilteredVeicoli);
    this.veicoliToShow = this.myFilteredVeicoli;
  }*/
  showResOfAllFilters() {
    this.filteredVeicoli = this.myFilteredVeicoli; // Aggiorna l'array filtrato
    this.collectionSize = this.filteredVeicoli.length; // Aggiorna il numero totale di elementi filtrati
    this.refreshVeicoli(); // Applica la paginazione
  }

  refreshVeicoli() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.veicoliToShow = this.filteredVeicoli.slice(start, end);
  }
  //Variable to receive the brand value and populate the model select accordingly
  selectedMarcaId: number | null = null;
  //modelli
  onMarcaChange(selectedMarcaId: number | null) {
    if (selectedMarcaId) {
      //Save the ID value in the object to be sent in the post
      this.veicoloForm.id_marca = selectedMarcaId;
      this.veicoliSvc.getAllModelli().subscribe((data: IModello[]) => {
        //filter
        this.modelli = data.filter((m) => {
          let idMarca = m.id_marca;
          if (idMarca == selectedMarcaId) {
            return true;
          } else {
            return false;
          }
        });
      });
    }
  }
  selectedCambioId: number | null = null;
  onCambioChange(selectedCambioId: number | null) {
    if (selectedCambioId) {
      this.veicoloForm.id_tipo_cambio = selectedCambioId;
    }
  }
  selectedTipoAsseId: number | null = null;
  onTipoAsseChange(selectedTipoAsseId: number | null) {
    if (selectedTipoAsseId) {
      this.veicoloForm.id_tipo_asse = selectedTipoAsseId;
    }
  }
  selectedAllestimentoId: number = 0;
  onAllestimentoChange(selectedAllestimentoId: number) {
    if (selectedAllestimentoId) {
      this.veicoloForm.id_tipo_allestimento = selectedAllestimentoId;
    }
  }
  selectedAlimentazioneId: number = 0;
  onAlimentazioneChange(selectedAlimentazioneId: number) {
    if (selectedAlimentazioneId) {
      this.veicoloForm.id_tipo_alimentazione = selectedAlimentazioneId;
    }
  }
  selectedSocietaId: number = 0;
  onSocietaChange(selectedSocietaId: number) {
    if (selectedSocietaId) {
      this.veicoloForm.id_societa = selectedSocietaId;
    }
  }
  selectedDestinazioneUsoId: number = 0;
  onDestinazioneUsoChange(selectedDestinazioneUsoId: number) {
    if (selectedDestinazioneUsoId) {
      this.veicoloForm.id_destinazione_uso = selectedDestinazioneUsoId;
    }
  }
  selectedModelloId: number = 0;
  onModelloChange(selectedModelloId: number) {
    if (selectedModelloId) {
      this.veicoloForm.id_modello = selectedModelloId;
    }
  }
  selectedTipoVeicoloId: number = 0;
  onTipeVeicoloChange(selectedTipoVeicoloId: number) {
    if (selectedTipoVeicoloId) {
      this.veicoloForm.id_tipo_veicolo = selectedTipoVeicoloId;
    }
  }

  //Variable to handle validation
  formSubmitted: boolean = false;
}
