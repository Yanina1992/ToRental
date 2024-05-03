import { Component, OnInit } from '@angular/core';
import { IAlert } from 'src/app/interfaces/alert/ialert';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-assicurazioni',
  templateUrl: './assicurazioni.component.html',
  styleUrls: ['./assicurazioni.component.scss']
})
export class AssicurazioniComponent implements OnInit  {

  page = 1;
  pageSize = 10;
  assicurazioni: IAlert[] = [];
  collectionSize = this.assicurazioni.length;
  assicurazioniToShow: IAlert[] | undefined;

  filteredAssicurazioni: IAlert[] = [];
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
        this.svc.getAll(firstParam).subscribe((data: IAlert[]) => {
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
        map((text) => {
          const id = Number(text!.trim());
          return id > 0 ? this.search(id) : this.assicurazioni; // Assicurati che sia un ID valido e maggiore di zero
        })
      )
      .subscribe((filtered) => {
        this.filteredAssicurazioni = filtered;
        this.collectionSize = filtered.length;
        this.refreshAssicurazioni();
      });
  }

  search(id: number): IAlert[] {
    console.log(id);
  
    return this.assicurazioni.filter((revisione) =>
      revisione.id_veicolo === id
    );
  }
  

  refreshAssicurazioni() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.assicurazioniToShow = this.filteredAssicurazioni.slice(start, end);

  }
}


