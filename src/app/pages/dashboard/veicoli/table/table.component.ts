import { Component, OnInit } from '@angular/core';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from '../../../../services/veicoli.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {


  page = 1;
	pageSize = 10;
	collectionSize = Veicoli.length;
	veicoli:Veicoli[] = [];
  veicoliToShow: Veicoli[] | undefined;

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

refreshVeicoli() {
    this.veicoliToShow = this.veicoli.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
}


}
