import { Component, OnInit } from '@angular/core';
import { IAlert } from 'src/app/interfaces/alert/ialert';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-bolli',
  templateUrl: './bolli.component.html',
  styleUrls: ['./bolli.component.scss']
})
export class BolliComponent implements OnInit  {

  page = 1;
  pageSize = 10;
  bolli: IAlert[] = [];
  collectionSize = this.bolli.length;
  bolliToShow: IAlert[] | undefined;

  filteredBolli: IAlert[] = [];
  filter = new FormControl('');

  spinner:boolean | undefined = true;

  constructor(private svc: ServizioService) {}

  ngOnInit() {

    this.svc.refreshTable$
      .subscribe(() => {
        this.getAllBolli()
      });
    this.getAllBolli();
  }
    private getAllBolli(){
      const firstParam = 'bollo'
        this.svc.getAll(firstParam).subscribe((data: IAlert[]) => {
        this.bolli = data.reverse();
        this.collectionSize = data.length;
        this.refreshBolli();

        this.filteredBolli = [...this.bolli];
        this.setupFilter();

        if(data){
          this.spinner = false;
          console.log('bolli', data)
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
          return id > 0 ? this.search(id) : this.bolli; // Assicurati che sia un ID valido e maggiore di zero
        })
      )
      .subscribe((filtered) => {
        this.filteredBolli = filtered;
        this.collectionSize = filtered.length;
        this.refreshBolli();
      });
  }

  search(id: number): IAlert[] {
    console.log(id);
  
    return this.bolli.filter((bollo) =>
      bollo.id_veicolo === id
    );
  }
  

  refreshBolli() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.bolliToShow = this.filteredBolli.slice(start, end);

  }
}


