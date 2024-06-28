import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServizioService } from 'src/app/services/servizio.service';
import { Subscription } from 'rxjs';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { IScadenze } from 'src/app/interfaces/iscadenze';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';

@Component({
  selector: 'app-manutenzioni',
  templateUrl: './manutenzioni.component.html',
  styleUrls: ['./manutenzioni.component.scss'],
})
export class ManutenzioniComponent implements OnInit, OnDestroy{

  idFromScadenze:number | undefined = 0;
  tipoFromScadenze:string | undefined;

  private subscriptions = new Subscription();

  scadenzeForm:any ;
  page = 1;
  pageSize = 10;
  scadenze: IScadenze[] = [];
  collectionSize = 0;
  filter = new FormControl('');
  term: string | undefined;
  myArraySize: number = 0;
  text: string = '';
  spinner: boolean | undefined = true;
  veicoloNotFound: boolean = false;  
  label:any;

  constructor(
    private router: Router,
    private svc:ServizioService,
    private veicoliSvc: VeicoliService
  ){}

  ngOnInit() {
    this.getAllScadenze();
    this.veicoliSvc.refreshVeicoliTable$.subscribe(() => {
      this.getAllScadenze();
    });
    this.readUrl()
  }
  readUrl():void{
    let labelToModify = this.router.url
    this.label = labelToModify.slice(1) 
    this.svc.currentPage(this.label)
  }

  public getAllScadenze() {
    this.veicoliSvc
      .getScadenze(this.page, this.pageSize, this.text)
      .subscribe((data: IScadenze[]) => {
        console.log('getALlScadenze', data);
        this.scadenze = data.reverse();
        this.scadenze.reverse();
        this.collectionSize = this.scadenze[0].arraySize;
        this.myArraySize = this.collectionSize;
        this.setupFilter();   
        if (data) {
          this.spinner = false;
        }
      });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  setupFilter() {
    //When values changes in 'filter' form -> serch input
    const subscription = this.filter.valueChanges
      .pipe(
        ///forse il tempo è da aumentare...
        debounceTime(300),
        map((text) => {
          this.term = text?.trim().toLowerCase() || '';
          return this.term;
        })
      )
      .subscribe((t) => {
        this.search(t);
        if (this.scadenze.length > 0) {
          this.collectionSize = this.scadenze[0].arraySize;
          this.veicoloNotFound = false;
        } else {
          this.collectionSize = 0;
          this.veicoloNotFound = true;
          console.log('veicolo not found', this.veicoloNotFound);
        }
        this.myArraySize = this.collectionSize;
        /*-----------------------------------*/
      });
    //this.subscriptions.add(subscription);
    
  }
  //Search by targa or telaio
  search(text: string) {
    this.term = text.toLowerCase();
    this.text = this.term;
    this.page = 1;
    this.veicoliSvc
      .getScadenze(this.page, this.pageSize, this.text)
      .subscribe((data: IScadenze[]) => {
        this.scadenze = data;
        /*-----------------------------------*/
        if (this.scadenze.length > 0) {
          this.collectionSize = this.scadenze[0].arraySize;
          this.veicoloNotFound = false;
        } else {
          this.collectionSize = 0;
          this.veicoloNotFound = true;
        }
        /*-----------------------------------*/
        this.myArraySize = this.collectionSize;
        return this.text;
      });
      
  }
  customizedSearch() {
    try {
      this.veicoliSvc
        .getScadenze(
          this.page,
          this.pageSize,
          this.text,
        )
        .subscribe((data: IScadenze[]) => {
          this.scadenze = data.reverse();
          this.scadenze.reverse();
          this.setupFilter();
          console.log('customized search res', this.scadenze);

          if (this.scadenze.length > 0) {
            this.collectionSize = this.scadenze[0].arraySize;
            this.veicoloNotFound = false;
          } else {
            this.collectionSize = 0;
            this.veicoloNotFound = true;
          }
          this.myArraySize = this.collectionSize;
        });
    } catch (error) {
      console.error('Errorrrrr', error);
    }
    this.scrollToResults();
  }
  scrollToResults() {
    const element = document.getElementById('results-table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  getIdFromScadenze(tipo:string, idVeicolo:number, idScadenza:number){
    this.idFromScadenze = idScadenza;
    this.tipoFromScadenze = tipo
    this.veicoliSvc.getScadenzaById(tipo, idVeicolo, idScadenza)
    .subscribe((data: IManutenzione[]) =>{
      console.log('does getScadenzaFromId work?', data); 
      //this.veicoliSvc.saveResFromGetScadenze(data)

      this.veicoliSvc.isId = true
    })

  }
 reset(){
  this.veicoliSvc.resetManScadenze()
 }
}