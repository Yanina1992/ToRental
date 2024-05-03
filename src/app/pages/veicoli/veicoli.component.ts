import { Component, OnChanges, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { VeicoliService } from '../../services/veicoli.service';
import { ITipoVeicolo } from 'src/app/interfaces/options-select/itipo-veicolo';
import { IMarca } from 'src/app/interfaces/options-select/imarca';
import { IModello } from 'src/app/interfaces/options-select/imodello';
import { IDestinazioneDUso } from 'src/app/interfaces/options-select/idestinazione-duso';
import { ISocieta } from 'src/app/interfaces/options-select/isocieta';
import { IAlimentazione } from 'src/app/interfaces/options-select/ialimentazione';
import { IAllestimento } from 'src/app/interfaces/options-select/iallestimento';
import { IAsse } from 'src/app/interfaces/options-select/iasse';
import { ICambio } from 'src/app/interfaces/options-select/icambio';
import { Veicoli } from 'src/app/classes/veicoli';

@Component({
  selector: 'app-veicoli',
  templateUrl: './veicoli.component.html',
  styleUrls: ['./veicoli.component.scss'],
})
export class VeicoliComponent implements OnInit, OnChanges {
  veicoloForm: Veicoli = new Veicoli();
  isValidDate: any;

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

  constructor(
    private calendar: NgbCalendar,
    private datePipe: DatePipe,
    private veicoliSvc: VeicoliService
  ) {}

  isTarga: boolean = false;

  ngOnInit(): void {
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
    this.veicoliSvc
      .getAllDestinazioniDUso()
      .subscribe((data: IDestinazioneDUso[]) => {
        this.destinazioni = data;
      });
    //società
    this.veicoliSvc.getAllSocieta().subscribe((data: ISocieta[]) => {
      this.societas = data;
    });
    //tipi alimentazione
    this.veicoliSvc
      .getAllAlimentazioni()
      .subscribe((data: IAlimentazione[]) => {
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
      this.veicoloForm.id_alimentazione = selectedAlimentazioneId;
    }
  }
  selectedSocietaId: number = 0;
  onSocietaChange(selectedSocietaId: number) {
    if (selectedSocietaId) {
      this.veicoloForm.id_proprietario = selectedSocietaId;
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

  veicoli: Veicoli[] = [];

  onInput() {
    this.isTarga = false; //Reset formSubmitted to false when input is detected
  }

  creaVeicolo() {
    this.formSubmitted = true;
    //Check if this targa already exists
    this.veicoliSvc.getAll().subscribe((data: Veicoli[]) => {
      this.veicoli = data;
      this.veicoli.forEach((element) => {
        if (element.targa == this.veicoloForm.targa) {
          this.isTarga = true;
          console.log('Targa già presente', this.isTarga);
        }
      });
      if (this.isTarga == false) {
        console.log('Targa valida', this.isTarga);
        this.veicoloForm.data_immatricolazione = this.myDate;
        console.log('Submitting form with data:', this.veicoloForm);
        this.veicoliSvc.create(this.veicoloForm).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.error('Failed to submit form:', error);
          }
        );
      }
    });
  }

  ngOnChanges(): void {
    this.selectToday();
    this.formatDate(this.veicoloForm.data_immatricolazione);
  }

  //Data immatricolazione
  myDate: any;
  selectToday(this: any) {
    const today = this.calendar.getToday();
    console.log(today);
    this.veicoloForm.data_immatricolazione = today;
    this.formatDate(this.veicoloForm.data_immatricolazione);
    console.log(this.veicoloForm.data_immatricolazione);
  }

  formatDate(date: NgbDateStruct | undefined): string {
    if (date && !isNaN(date.year) && !isNaN(date.month) && !isNaN(date.day)) {
      this.myDate =
        this.datePipe.transform(
          new Date(date.year, date.month - 1, date.day),
          'dd-MM-yyyy'
        ) || '';
      return this.myDate;
    }
    return '';
  }
}
