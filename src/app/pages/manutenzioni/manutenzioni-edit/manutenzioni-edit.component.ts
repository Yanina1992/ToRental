import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-manutenzioni-edit',
  templateUrl: './manutenzioni-edit.component.html',
  styleUrls: ['./manutenzioni-edit.component.scss'],
})
export class ManutenzioniEditComponent implements OnInit {
  manutenzione: IManutenzione | undefined;

  data_pagamento: string = '';
  inizio_validita: string = '';
  fine_validita: string = '';

  tipo: any;
  id: any;

  constructor(
    private svc: ServizioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Get manutenzione by id
    this.route.params.subscribe((params: any) => {
      this.tipo = params['tipo'];
      this.id = params['id'];
      this.svc.getById(this.tipo, this.id).subscribe((res) => {
        this.manutenzione = res;

        const dataPagamentoParts = this.manutenzione.data_pagamento.split('-');
        this.data_pagamento = `${dataPagamentoParts[2]}-${dataPagamentoParts[1]}-${dataPagamentoParts[0]}`;
        this.manutenzione.data_pagamento = this.data_pagamento;
        // Converti 'inizio_validita'
        const inizioValiditaParts =
          this.manutenzione.inizio_validita.split('-');
        this.inizio_validita = `${inizioValiditaParts[2]}-${inizioValiditaParts[1]}-${inizioValiditaParts[0]}`;
        this.manutenzione.inizio_validita = this.inizio_validita;

        // Converti 'fine_validita'
        const fineValiditaParts = this.manutenzione.fine_validita.split('-');
        this.fine_validita = `${fineValiditaParts[2]}-${fineValiditaParts[1]}-${fineValiditaParts[0]}`;
        this.manutenzione.data_pagamento = this.data_pagamento;

        console.log('data pagamento', this.inizio_validita);
      });
    });
  }

  handlePagamentoChange(date: any) {
    if (this.manutenzione?.data_pagamento) {
      this.manutenzione.data_pagamento = date;
    }
  }
  handleInizioValiditaChange(date: any) {
    if (this.manutenzione?.inizio_validita) {
      this.manutenzione.inizio_validita = date;
    }
  }
  handleFineValiditaChange(date: any) {
    if (this.manutenzione?.fine_validita) {
      this.manutenzione.fine_validita = date;
    }
  }

  editManutenzione() {
    this.svc.update(this.tipo, this.manutenzione!).subscribe((res) => {
      this.router.navigate(['manutenzioni-table']);
    });
  }
}
