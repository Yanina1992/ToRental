import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, map, startWith } from 'rxjs';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-manutenzioni-table',
  templateUrl: './manutenzioni-table.component.html',
  styleUrls: ['./manutenzioni-table.component.scss'],
})
export class ManutenzioniTableComponent implements OnInit {

  tipo:string | null = '';

  page = 1;
  pageSize = 10;
  manutenzioni: IManutenzione[] = [];
  collectionSize = this.manutenzioni.length;
  manutenzioniToShow: IManutenzione[] | undefined;

  filteredManutenzioni: IManutenzione[] = [];
  filter = new FormControl('');

  spinner:boolean | undefined = true;

  constructor(
    private route:ActivatedRoute,
    private svc:ServizioService
  ){}

  ngOnInit(): void {

    //Get the type of manutenzione
    this.route.paramMap.subscribe(params => {
      this.tipo = params.get('tipo');
      //console.log('tipo', this.tipo)
    })

    //Call the method which gets the list of manutenzioni
    this.svc.refreshTable$
      .subscribe(() => {
        this.getAllManutenzioni()
      });
    this.getAllManutenzioni();

  }

  //Define the method for calling the list of manutenzioni
  private getAllManutenzioni(){
      this.svc.getAll(this.tipo!).subscribe((data: IManutenzione[]) => {
      this.manutenzioni = data.reverse();
      this.collectionSize = data.length;
      this.refreshManutenzioni();

      this.filteredManutenzioni = [...this.manutenzioni];
      this.setupFilter();

      if(data){
        this.spinner = false;
        //console.log('manutenzioni', data)
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
          return id > 0 ? this.search(id) : this.manutenzioni;
        })
      )
      .subscribe((filtered) => {
        this.filteredManutenzioni = filtered;
        this.collectionSize = filtered.length;
        this.refreshManutenzioni();
      });
  }
  search(id: number): IManutenzione[] {
    //console.log(id);
  
    return this.manutenzioni.filter((manutenzione) =>
      manutenzione.id_veicolo === id
    );
  }
  

  refreshManutenzioni() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.manutenzioniToShow = this.filteredManutenzioni.slice(start, end);

  }
}
