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
    })

    //Call the method which gets the list of manutenzioni
    this.svc.refreshTable$
      .subscribe(() => {
        this.getAllManutenzioni()
      });
    this.getAllManutenzioni();

  }

  //Define the method for calling manutenzioni's list
  private getAllManutenzioni(){
      this.svc.getAll(this.tipo!).subscribe((data: IManutenzione[]) => {
      this.manutenzioni = data.reverse();
      this.collectionSize = data.length;
      this.refreshManutenzioni();

      this.filteredManutenzioni = [...this.manutenzioni];
      this.setupFilter();

      if(data){
        this.spinner = false;
      }
      console.log("c'è la targa?", data);
      
    });
  }

  setupFilter() {
    this.filter.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((text) =>
          text!.trim().length > 0 ? this.search(text!) : this.manutenzioni
        )
      )
      .subscribe((filtered) => {
        this.filteredManutenzioni = filtered;
        this.collectionSize = filtered.length;
        this.refreshManutenzioni();
      });
  }
  //Search by targa
  /*search(id: number): IManutenzione[] {
    //console.log(id);
  
    return this.manutenzioni.filter((manutenzione) =>
      manutenzione.id_veicolo === id
    );
  }*/
  search(text: string): IManutenzione[] {
    const term = text.toLowerCase();
    console.log(text);

    return this.manutenzioni.filter((veicolo) =>
      (veicolo.targa || '').toLowerCase().startsWith(term)
    );
  }

  refreshManutenzioni() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.manutenzioniToShow = this.filteredManutenzioni.slice(start, end);
  }
}
