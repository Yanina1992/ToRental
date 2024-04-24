import { Component, OnInit } from '@angular/core';
import { IAlert } from 'src/app/interfaces/alert/ialert';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-tachigrafo',
  templateUrl: './tachigrafo.component.html',
  styleUrls: ['./tachigrafo.component.scss']
})
export class TachigrafoComponent implements OnInit {

  page = 1;
  pageSize = 10;
  tachigrafi: IAlert[] = [];
  collectionSize = this.tachigrafi.length;
  tachigrafiToShow: IAlert[] | undefined;

  filteredTachigrafi: IAlert[] = [];
  filter = new FormControl('');

  spinner:boolean | undefined = true;

  constructor(private svc: ServizioService) {}

  ngOnInit() {

    this.svc.refreshTable$
      .subscribe(() => {
        this.getAllTachigrafi()
      });
    this.getAllTachigrafi();
  }
    private getAllTachigrafi(){
      const firstParam = 'tachigrafo'
        this.svc.getAll(firstParam).subscribe((data: IAlert[]) => {
        this.tachigrafi = data.reverse();
        this.collectionSize = data.length;
        this.refreshTachigrafi();

        this.filteredTachigrafi = [...this.tachigrafi];
        this.setupFilter();

        if(data){
          this.spinner = false;
          console.log('tachigrafi', data)
        }
      });
    }

  setupFilter() {
    this.filter.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((text) =>
          text!.trim().length > 0 ? this.search(text!) : this.tachigrafi
        )
      )
      .subscribe((filtered) => {
        this.filteredTachigrafi = filtered;
        this.collectionSize = filtered.length;
        this.refreshTachigrafi();
      });
  }

  search(text: string): IAlert[] {
    const term = text.toLowerCase();
    console.log(text);

    return this.tachigrafi.filter((tachigrafi) =>
      (tachigrafi.targa || '').toLowerCase().startsWith(term)
    );
  }

  refreshTachigrafi() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.tachigrafiToShow = this.filteredTachigrafi.slice(start, end);

  }
}

