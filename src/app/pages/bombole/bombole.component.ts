import { Component, OnInit } from '@angular/core';
import { IAlert } from 'src/app/interfaces/alert/ialert';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-bombole',
  templateUrl: './bombole.component.html',
  styleUrls: ['./bombole.component.scss']
})
export class BomboleComponent implements OnInit  {

  page = 1;
  pageSize = 10;
  bombole: IAlert[] = [];
  collectionSize = this.bombole.length;
  bomboleToShow: IAlert[] | undefined;

  filteredBombole: IAlert[] = [];
  filter = new FormControl('');

  spinner:boolean | undefined = true;

  constructor(private svc: ServizioService) {}

  ngOnInit() {

    this.svc.refreshTable$
      .subscribe(() => {
        this.getAllBombole()
      });
    this.getAllBombole();
  }
    private getAllBombole(){
      const firstParam = 'bombole'
        this.svc.getAll(firstParam).subscribe((data: IAlert[]) => {
        this.bombole = data.reverse();
        this.collectionSize = data.length;
        this.refreshBombole();

        this.filteredBombole = [...this.bombole];
        this.setupFilter();

        if(data){
          this.spinner = false;
          console.log('bombole', data)
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
          return id > 0 ? this.search(id) : this.bombole; // Assicurati che sia un ID valido e maggiore di zero
        })
      )
      .subscribe((filtered) => {
        this.filteredBombole = filtered;
        this.collectionSize = filtered.length;
        this.refreshBombole();
      });
  }

  search(id: number): IAlert[] {
    console.log(id);
  
    return this.bombole.filter((bombola) =>
      bombola.id_veicolo === id
    );
  }
  

  refreshBombole() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.bomboleToShow = this.filteredBombole.slice(start, end);

  }
}


