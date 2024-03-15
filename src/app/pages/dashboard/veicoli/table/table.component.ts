import { Component, OnInit } from '@angular/core';
import { Veicoli } from 'src/app/pages/dashboard/veicoli/veicoli';
import { VeicoliService } from '../veicoli.service';
/*import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';*/


@Component({
  selector: 'app-table',
  /*standalone: true,
  imports: [
    DecimalPipe, NgFor, FormsModule, NgbTypeaheadModule, NgbPaginationModule
  ],*/
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  
  page = 1;
	pageSize = 4;
	collectionSize = 0;
	veicoli:Veicoli[] = [];

	constructor(
    private veicoliSvc:VeicoliService
  ) {}

  
  ngOnInit(){
    this.veicoliSvc.getAll()
    .subscribe((data:Veicoli[]) =>{
      this.veicoli = data;
      this.collectionSize = data.length;
      this.refreshVeicoli();
    })

  }
  refreshVeicoli(){
      this.veicoli.map((veicolo, i) => ({id:i+1, ...this.veicoli})).slice(
      (this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
