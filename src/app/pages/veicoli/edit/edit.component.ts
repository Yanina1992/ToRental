import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipoVeicolo } from 'src/app/interfaces/options-select/itipo-veicolo';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { Veicoli } from 'src/app/classes/veicoli';
import { IMarca } from 'src/app/interfaces/options-select/imarca';
import { IModello } from 'src/app/interfaces/options-select/imodello';
import { IDestinazioneDUso } from 'src/app/interfaces/options-select/idestinazione-duso';
import { ISocieta } from 'src/app/interfaces/options-select/isocieta';
import { IAlimentazione } from 'src/app/interfaces/options-select/ialimentazione';
import { IAllestimento } from 'src/app/interfaces/options-select/iallestimento';
import { IAsse } from 'src/app/interfaces/options-select/iasse';
import { ICambio } from 'src/app/interfaces/options-select/icambio';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  veicolo: Veicoli = new Veicoli();
  data_immatricolazione:string = '';

  //Variables for filling in and saving the values of selects
  tipiVeicoli: ITipoVeicolo[] = [];
  selectedTipoVId: any;

  marche: IMarca[] = [];
  selectedMarcaId: any;

  modelli: IModello[] = [];
  selectedModelloId: any;

  destinazioni: IDestinazioneDUso[] = [];
  selectedDestinazioneId: any;

  societas: ISocieta[] = [];
  selectedSocietaId: any;

  alimentazioni: IAlimentazione[] = [];
  selectedAlimentazioneId: any;

  allestimenti: IAllestimento[] = [];
  selectedAllestimentoId: any;

  tipiAsse: IAsse[] = [];
  selectedTipoAsseId: any;

  tipiCambio: ICambio[] = [];
  selectedTipoCambioId: any;

  constructor(
    private veicoliSvc: VeicoliService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Get Veicolo by id
    this.route.params.subscribe((params: any) => {
      this.veicoliSvc.getExtraById(params.id).subscribe((res) => {
        this.veicolo = res;
        this.data_immatricolazione = this.veicolo.data_immatricolazione;

        //Get for filling in the select
        this.veicoliSvc.getAllTipiVeicoli().subscribe((data) => {
          this.tipiVeicoli = data;
          this.selectedTipoVId = this.veicolo.id_tipo_veicolo;
        });
        this.veicoliSvc.getAllMarche().subscribe((data) => {
          this.marche = data;
          this.selectedMarcaId = this.veicolo.id_marca;
        });
        this.veicoliSvc.getAllModelli().subscribe((data) => {
          this.modelli = data;
          this.selectedModelloId = this.veicolo.id_modello;
        });
        this.veicoliSvc.getAllDestinazioniDUso().subscribe((data) => {
          this.destinazioni = data;
          this.selectedDestinazioneId = this.veicolo.id_destinazione_uso;
        });
        this.veicoliSvc.getAllSocieta().subscribe((data) => {
          this.societas = data;
          this.selectedSocietaId = this.veicolo.id_proprietario;
        });
        this.veicoliSvc.getAllAlimentazioni().subscribe((data) => {
          this.alimentazioni = data;
          this.selectedAlimentazioneId = this.veicolo.id_alimentazione;
        });
        this.veicoliSvc.getAllAllestimenti().subscribe((data) => {
          this.allestimenti = data;
          this.selectedAllestimentoId = this.veicolo.id_tipo_allestimento;
        });
        this.veicoliSvc.getAllTipiAsse().subscribe((data) => {
          this.tipiAsse = data;
          this.selectedTipoAsseId = this.veicolo.id_tipo_asse;
        });
        this.veicoliSvc.getAllTipiCambio().subscribe((data) => {
          this.tipiCambio = data;
          this.selectedTipoCambioId = this.veicolo.id_tipo_cambio;
        });
      });
    });
  }

  //selected id on change
  onTipeVChange(selectedTipoVId: any) {
    if (selectedTipoVId) {
      this.veicolo.id_tipo_veicolo = selectedTipoVId;
    }
  }
  onMarcaChange(selectedMarcaId: any) {
    if (selectedMarcaId) {
      this.veicolo.id_marca = selectedMarcaId;
      //Aggiorno la lista dei modelli in base alla marca selezionata
      this.veicoliSvc.getAllModelli().subscribe((data: IModello[]) => {
        this.modelli = data.filter((m) => {
          let idMarca = m.id_marca;
          if (idMarca == this.selectedMarcaId) {
            return true;
          } else {
            return false;
          }
        });
      });
    }
  }
  onModelloChange(selectedModelloId: any) {
    if (selectedModelloId) {
      this.veicolo.id_modello = selectedModelloId;
    }
  }
  onDestinazioneUsoChange(selectedDestinazioneId: any) {
    if (selectedDestinazioneId) {
      this.veicolo.id_destinazione_uso = selectedDestinazioneId;
    }
  }
  onSocietaChange(selectedSocietaId: any) {
    if (selectedSocietaId) {
      this.veicolo.id_proprietario = selectedSocietaId;
    }
  }
  onAlimentazioneChange(selectedAlimentazioneId: any) {
    if (selectedAlimentazioneId) {
      this.veicolo.id_alimentazione = selectedAlimentazioneId;
    }
  }
  onAllestimentoChange(selectedAllestimentoId: any) {
    if (selectedAllestimentoId) {
      this.veicolo.id_tipo_allestimento = selectedAllestimentoId;
    }
  }
  onTipoAsseChange(selectedTipoAsseId: any) {
    if (selectedTipoAsseId) {
      this.veicolo.id_tipo_asse = selectedTipoAsseId;
    }
  }
  onCambioChange(selectedCambioId: any) {
    if (selectedCambioId) {
      this.veicolo.id_tipo_cambio = selectedCambioId;
    }
  }

  handleDateChange(date:any){
    this.veicolo.data_immatricolazione = date;
  }

  editVeicolo() {
    this.veicoliSvc.update(this.veicolo).subscribe((res) => {
      this.router.navigate(['/pages/dashboard']);
    });
  }
}
