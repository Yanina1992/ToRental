import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounce } from 'rxjs';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-create-manutenzione',
  templateUrl: './create-manutenzione.component.html',
  styleUrls: ['./create-manutenzione.component.scss'],
})
export class CreateManutenzioneComponent {
  manutenzioneForm: IManutenzione = {
    anno: 0,
    data_pagamento: '',
    inizio_validita: '',
    fine_validita: '',
    id: 0,
    agenzia:'',
    polizza:'',
    tipo_scadenza:'',
    importo: 0,
    id_veicolo: 0,
    targa: '',
    note: '',

  };
  isValidDate: any;
  tipo:string = '';

  constructor(
    private datePipe: DatePipe,
    private svc: ServizioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('creaManutenzione called');
    //debugger;
    //Take 'tipo' from parameters
    this.route.params.subscribe((params) => {
      let firstParam = params['tipo'];
      this.tipo = firstParam;
      console.log('tipo:', this.tipo);
    })
  }

  handlePagamentoChange(date: any) {
    console.log('data pagamento', date);
    this.manutenzioneForm.data_pagamento = date;
  }

  handleInizioValiditaChange(date: any) {
    console.log('inizio validita', date);
    this.manutenzioneForm.inizio_validita = date;
  }

  handleFineValiditaChange(date: any) {
    console.log('fine validita', date);
    this.manutenzioneForm.fine_validita = date;
  }

  note:string = '';
  creaManutenzione() {
    let nuovaManutenzione = this.manutenzioneForm;
    this.svc.create(this.tipo, nuovaManutenzione).subscribe(

      (res) => {
        console.log('nuova manutenzione:', res);
      },
      (error) => {
        console.error('Failed to submit form:', error);
      }
    );
     
  }
}
