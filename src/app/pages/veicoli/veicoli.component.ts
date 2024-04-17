import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerModule,
  NgbDate,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe, JsonPipe } from '@angular/common';
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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-veicoli',
  templateUrl: './veicoli.component.html',
  styleUrls: ['./veicoli.component.scss'],
})
export class VeicoliComponent implements OnInit {
  //Datepicker
  //dateControl = new FormControl();


  model: NgbDateStruct | undefined;
  //date!: { year: number; month: number };

  //isDatepickerOpen = false;
  //dataImmatricolazione: any;

  veicoloForm: Veicoli = new Veicoli();

  constructor(
    private calendar: NgbCalendar,
    private datePipe: DatePipe,
    private veicoliSvc: VeicoliService
  ) {}

  
  isTarga: boolean = false;

  //Datepicker
  //toggleDatePicker() {
  //this.isDatepickerOpen = !this.isDatepickerOpen;
  //}

  //New date picker
  isDisabled = (
    date: NgbDate,
    current: { year: number; month: number } | undefined
  ) => date.month !== current!.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  myDate: any;

  formatDate(date: NgbDateStruct | undefined): string {
    if (date) {
      this.myDate =
        this.datePipe.transform(
          new Date(date.year, date.month - 1, date.day),
          'dd-MM-yyyy'
        ) || '';
      return this.myDate;
    }
    return '';
  }

  //DA FORMATTARE
  selectToday() {
    //const today = this.calendar.getToday();
    //this.veicoloForm.data_immatricolazione = this.formatDate(today);
    //console.log(this.veicoloForm.data_immatricolazione);
    //this.veicoloForm.data_immatricolazione = this.dataImmatricolazione;
    const today = this.calendar.getToday();
    this.veicoloForm.data_immatricolazione = this.formatDate(today);
    this.myDate = this.veicoloForm.data_immatricolazione;
    console.log(this.veicoloForm.data_immatricolazione);
  }

  //Variabili per gestire le opzioni della select
  tipiVeicoli: ITipoVeicolo[] = [];
  marche: IMarca[] = [];
  modelli: IModello[] = [];
  destinazioni: IDestinazioneDUso[] = [];
  societas: ISocieta[] = [];
  tipiAlimentazione: IAlimentazione[] = [];
  allestimenti: IAllestimento[] = [];
  tipiAsse: IAsse[] = [];
  tipiCambio: ICambio[] = [];

  ngOnInit(): void {
    //Popolo le select con i vari tipi di veicoli
    this.veicoliSvc.getAllTipiVeicoli().subscribe((data: ITipoVeicolo[]) => {
      this.tipiVeicoli = data;
    });
    //di marche
    this.veicoliSvc.getAllMarche().subscribe((data: IMarca[]) => {
      this.marche = data;
    });
    //di destinazioni d'uso
    this.veicoliSvc
      .getAllDestinazioniDUso()
      .subscribe((data: IDestinazioneDUso[]) => {
        this.destinazioni = data;
      });
    //di società
    this.veicoliSvc.getAllSocieta().subscribe((data: ISocieta[]) => {
      this.societas = data;
    });
    //di tipi alimentazione
    this.veicoliSvc
      .getAllAlimentazioni()
      .subscribe((data: IAlimentazione[]) => {
        this.tipiAlimentazione = data;
      });
    //di allestimenti
    this.veicoliSvc.getAllAllestimenti().subscribe((data: IAllestimento[]) => {
      this.allestimenti = data;
    });
    //di tipi asse
    this.veicoliSvc.getAllTipiAsse().subscribe((data: IAsse[]) => {
      this.tipiAsse = data;
    });
    //di cambi
    this.veicoliSvc.getAllTipiCambio().subscribe((data: ICambio[]) => {
      this.tipiCambio = data;
    });
  }
  //POST-------------------
  //variabile per ricevere il value della marca e poter popolare la select dei modelli di conseguenza
  selectedMarcaId: number | null = null;
  //di modelli
  onMarcaChange(selectedMarcaId: number | null) {
    if (selectedMarcaId) {
      //salvo il valore id nell'oggetto da mandare in post
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

  //Variabile per gestire validazione
  formSubmitted: boolean = false;

  veicoli: Veicoli[] = [];
  
  onInput() {
        this.isTarga = false; // reimposta formSubmitted a false quando viene rilevato un input
      }  

  creaVeicolo() {
    this.formSubmitted = true;

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
}
