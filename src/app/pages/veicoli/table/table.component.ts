import { Component, OnInit, PipeTransform } from '@angular/core';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from '../../../services/veicoli.service';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = Veicoli.length;
  veicoli: Veicoli[] = [];
  veicoliToShow: Veicoli[] | undefined;

  filteredVeicoli: Veicoli[] = [];
  filter = new FormControl('');

  spinner:boolean | undefined = true;

  constructor(private veicoliSvc: VeicoliService) {}

  ngOnInit() {

    this.veicoliSvc.refreshVeicoliTable$
      .subscribe(() => {
        this.getAllVeicoli()
      });
    this.getAllVeicoli();
  }
    private getAllVeicoli(){
      this.veicoliSvc.getAll().subscribe((data: Veicoli[]) => {
        this.veicoli = data.reverse();
        this.collectionSize = data.length;
        this.refreshVeicoli();

        this.filteredVeicoli = [...this.veicoli];
        this.setupFilter();

        if(data){
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

  search(text: string): Veicoli[] {
    const term = text.toLowerCase();
    console.log(text);

    return this.veicoli.filter((veicolo) =>
      (veicolo.targa || '').toLowerCase().startsWith(term)
    );
  }

  refreshVeicoli() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.veicoliToShow = this.filteredVeicoli.slice(start, end);

  }
}
