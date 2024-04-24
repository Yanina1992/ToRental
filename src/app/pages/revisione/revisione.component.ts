import { Component, OnInit } from '@angular/core';
import { IAlert } from 'src/app/interfaces/alert/ialert';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-revisione',
  templateUrl: './revisione.component.html',
  styleUrls: ['./revisione.component.scss']
})
export class RevisioneComponent implements OnInit  {

  page = 1;
  pageSize = 10;
  revisioni: IAlert[] = [];
  collectionSize = this.revisioni.length;
  revisioniToShow: IAlert[] | undefined;

  filteredRevisioni: IAlert[] = [];
  filter = new FormControl('');

  spinner:boolean | undefined = true;

  constructor(private svc: ServizioService) {}

  ngOnInit() {

    this.svc.refreshTable$
      .subscribe(() => {
        this.getAllRevisioni()
      });
    this.getAllRevisioni();
  }
    private getAllRevisioni(){
      const firstParam = 'revisione'
        this.svc.getAll(firstParam).subscribe((data: IAlert[]) => {
        this.revisioni = data.reverse();
        this.collectionSize = data.length;
        this.refreshRevisioni();

        this.filteredRevisioni = [...this.revisioni];
        this.setupFilter();

        if(data){
          this.spinner = false;
          //console.log('revisioni', data)
        }
      });
    }

  setupFilter() {
    this.filter.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((text) =>
          text!.trim().length > 0 ? this.search(text!) : this.revisioni
        )
      )
      .subscribe((filtered) => {
        this.filteredRevisioni = filtered;
        this.collectionSize = filtered.length;
        this.refreshRevisioni();
      });
  }

   search(text: string): IAlert[] {
   const term = text.toLowerCase();
    console.log(text);

    return this.revisioni.filter((revisione) =>
      (revisione.targa || '').toLowerCase().startsWith(term)
    );
  }

  refreshRevisioni() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.revisioniToShow = this.filteredRevisioni.slice(start, end);

  }
}


