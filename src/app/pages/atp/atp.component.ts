import { Component, OnInit } from '@angular/core';
import { IAlert } from 'src/app/interfaces/alert/ialert';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-atp',
  templateUrl: './atp.component.html',
  styleUrls: ['./atp.component.scss']
})
export class AtpComponent implements OnInit {

  page = 1;
  pageSize = 10;
  atp: IAlert[] = [];
  collectionSize = this.atp.length;
  atpToShow: IAlert[] | undefined;

  filteredAtp: IAlert[] = [];
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
      const firstParam = 'atp'
        this.svc.getAll(firstParam).subscribe((data: IAlert[]) => {
        this.atp = data.reverse();
        this.collectionSize = data.length;
        this.refreshAtp();

        this.filteredAtp = [...this.atp];
        this.setupFilter();

        if(data){
          this.spinner = false;
          console.log('atp', data)
        }
      });
    }

  setupFilter() {
    this.filter.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((text) =>
          text!.trim().length > 0 ? this.search(text!) : this.atp
        )
      )
      .subscribe((filtered) => {
        this.filteredAtp = filtered;
        this.collectionSize = filtered.length;
        this.refreshAtp();
      });
  }

  search(text: string): IAlert[] {
    const term = text.toLowerCase();
    console.log(text);

    return this.atp.filter((atp) =>
      (atp.targa || '').toLowerCase().startsWith(term)
    );
  }

  refreshAtp() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.atpToShow = this.filteredAtp.slice(start, end);

  }
}
