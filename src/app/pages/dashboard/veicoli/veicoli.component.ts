import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { VeicoliService } from './veicoli.service';
import { ITipoVeicolo } from 'src/app/interfaces/itipo-veicolo';
import { IMarca } from 'src/app/interfaces/imarca';
import { IModello } from 'src/app/interfaces/imodello';
import { IDestinazioneDUso } from 'src/app/interfaces/idestinazione-duso';
import { ISocieta } from 'src/app/interfaces/isocieta';
import { IAlimentazione } from 'src/app/interfaces/ialimentazione';
import { IAllestimento } from 'src/app/interfaces/iallestimento';
import { IAsse } from 'src/app/interfaces/iasse';
import { ICambio } from 'src/app/interfaces/icambio';
import { Veicoli } from 'src/app/classes/veicoli';

@Component({
  selector: 'app-veicoli',
  templateUrl: './veicoli.component.html',
  styleUrls: ['./veicoli.component.scss'],
})
export class VeicoliComponent implements OnInit {

  //Datepicker
  dateControl = new FormControl();

  model: NgbDateStruct | undefined;
  date!: { year: number; month: number };

  isDatepickerOpen = false;

  constructor(
    private calendar: NgbCalendar,
    private datePipe: DatePipe,
    private veicoliSvc: VeicoliService
  ) {}

  //Datepicker
  toggleDatePicker() {
    this.isDatepickerOpen = !this.isDatepickerOpen;
    console.log(this.model);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  formatDate(date: NgbDateStruct | undefined): string {
    if (date) {
      return (
        this.datePipe.transform(
          new Date(date.year, date.month - 1, date.day),
          'dd-MM-yyyy'
        ) || ''
      );
    }
    return '';
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

  ngOnInit() {
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
  
    //Post
    
    /*addVeicolo(veicolo:Veicoli){
    this.veicoliSvc.create(veicolo)
    .subscribe({
      next:(response)=>{
        console.log('Veicolo aggiunto');       
      },
      error:(err)=>{
        console.error('ERRORE')
      }
    })
    }*/  
  }

  //variabile per ricevere il value dela marca e poter popolare la select dei modelli di conseguenza
  selectedMarcaId: number | null = null;
  //di modelli
  onMarcaChange(selectedMarcaId: number | null) {
    if (selectedMarcaId){
      console.log('selected marca id', selectedMarcaId);
      this.veicoliSvc.getAllModelli().subscribe((data: IModello[]) => {
        //filter
        this.modelli = data.filter((m) => {
          let idMarca= m.id_marca       
          if (idMarca == selectedMarcaId) {
            return true;
          } else {
            return false;
          }             
        });
      });
    }
  }

}
