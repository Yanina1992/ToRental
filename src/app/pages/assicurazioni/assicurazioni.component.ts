import { Component, OnInit, } from '@angular/core';
import { IAssicurazioni } from 'src/app/interfaces/alert/iassicurazioni';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-assicurazioni',
  templateUrl: './assicurazioni.component.html',
  styleUrls: ['./assicurazioni.component.scss']
})
export class AssicurazioniComponent implements OnInit {

  page = 1;
  pageSize = 10;
  assicurazioni: IAssicurazioni[] = [];
  collectionSize = this.assicurazioni.length;
  assicurazioniToShow: IAssicurazioni[] | undefined;

  filteredAssicurazioni: IAssicurazioni[] = [];
  filter = new FormControl('');

  spinner:boolean | undefined = true;

  constructor(private svc: ServizioService) {}

  ngOnInit() {

    this.svc.refreshTable$
      .subscribe(() => {
        this.getAllAssicurazioni()
      });
    this.getAllAssicurazioni();
  }
    private getAllAssicurazioni(){
      const firstParam = 'assicurazione'
        this.svc.getAll(firstParam).subscribe((data: IAssicurazioni[]) => {
        this.assicurazioni = data.reverse();
        this.collectionSize = data.length;
        this.refreshAssicurazioni();

        this.filteredAssicurazioni = [...this.assicurazioni];
        this.setupFilter();

        if(data){
          this.spinner = false;
          console.log('assicurazioni', data)
        }
      });
    }

  setupFilter() {
    this.filter.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((text) =>
          text!.trim().length > 0 ? this.search(text!) : this.assicurazioni
        )
      )
      .subscribe((filtered) => {
        this.filteredAssicurazioni = filtered;
        this.collectionSize = filtered.length;
        this.refreshAssicurazioni();
      });
  }

  search(text: string): IAssicurazioni[] {
    const term = text.toLowerCase();
    console.log(text);

    return this.assicurazioni.filter((assicurazione) =>
      (assicurazione.targa || '').toLowerCase().startsWith(term)
    );
  }

  refreshAssicurazioni() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.assicurazioniToShow = this.filteredAssicurazioni.slice(start, end);

  }
}

