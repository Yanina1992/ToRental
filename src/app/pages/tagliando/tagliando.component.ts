import { Component, OnInit } from '@angular/core';
import { IAlert } from 'src/app/interfaces/alert/ialert';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-tagliando',
  templateUrl: './tagliando.component.html',
  styleUrls: ['./tagliando.component.scss']
})
export class TagliandoComponent implements OnInit  {

  page = 1;
  pageSize = 10;
  tagliandi: IAlert[] = [];
  collectionSize = this.tagliandi.length;
  tagliandiToShow: IAlert[] | undefined;

  filteredTagliandi: IAlert[] = [];
  filter = new FormControl('');

  spinner:boolean | undefined = true;

  constructor(private svc: ServizioService) {}

  ngOnInit() {

    this.svc.refreshTable$
      .subscribe(() => {
        this.getAllTagliandi()
      });
    this.getAllTagliandi();
  }
    private getAllTagliandi(){
      const firstParam = 'tagliando'
        this.svc.getAll(firstParam).subscribe((data: IAlert[]) => {
        this.tagliandi = data.reverse();
        this.collectionSize = data.length;
        this.refreshTagliandi();

        this.filteredTagliandi = [...this.tagliandi];
        this.setupFilter();

        if(data){
          this.spinner = false;
          console.log('tagliandi', data)
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
          return id > 0 ? this.search(id) : this.tagliandi; // Assicurati che sia un ID valido e maggiore di zero
        })
      )
      .subscribe((filtered) => {
        this.filteredTagliandi = filtered;
        this.collectionSize = filtered.length;
        this.refreshTagliandi();
      });
  }

  search(id: number): IAlert[] {
    console.log(id);
  
    return this.tagliandi.filter((tagliando) =>
      tagliando.id_veicolo === id
    );
  }
  

  refreshTagliandi() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.tagliandiToShow = this.filteredTagliandi.slice(start, end);

  }
}


