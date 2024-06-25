import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
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
export class ManutenzioniComponent implements OnInit, OnDestroy, OnChanges{

  idFromScadenze:number | undefined = 0;
  tipoFromScadenze:string | undefined;

  private subscriptions = new Subscription();

  scadenzeForm:any ;

  page = 1;
  pageSize = 10;
  scadenze: IScadenze[] = [];
  collectionSize = 0;
  
  //targa_attiva:boolean = false;

  filter = new FormControl('');

  term: string | undefined;

  myArraySize: number = 0;
  text: string = '';

  spinner: boolean | undefined = true;

  /*redIconList: Veicoli[] = [];
  orangeIconList: Veicoli[] = [];
  greenIconList: Veicoli[] = [];
  greyIconList: Veicoli[] = [];

  isVeicoloPartiallyOk: boolean = false;
  isVeicoloNotOk: boolean = false;
  isVeicoloOk: boolean = false;
  isVeicoloStatoNotDefined: boolean = false;*/

  //Variable to handle validation
  //formSubmitted: boolean = false;

  //veicoloSuccess: boolean = false;

  veicoloNotFound: boolean = false;

  constructor(
    private router: Router,
    private svc:ServizioService,
    private veicoliSvc: VeicoliService
  ){}

  label:any;

  ngOnInit() {
    this.getAllScadenze();
    this.veicoliSvc.refreshVeicoliTable$.subscribe(() => {
      this.getAllScadenze();
    });
    /*this.veicoloSuccess = this.veicoliSvc.successMessage;
    console.log('success', this.veicoloSuccess);*/
    this.readUrl()
  }
  readUrl():void{
    let labelToModify = this.router.url
    this.label = labelToModify.slice(1)
    
    this.svc.currentPage(this.label)
    //console.log('url', this.label);
  }

  public getAllScadenze() {
    this.veicoliSvc
      .getScadenze(this.page, this.pageSize, this.text)
      .subscribe((data: IScadenze[]) => {
        console.log(data);
        
        this.scadenze = data.reverse();
        this.scadenze.reverse();
        this.collectionSize = this.scadenze[0].arraySize;
        this.myArraySize = this.collectionSize;
        this.setupFilter();

        /*this.scadenze.forEach((e)=>{
          if(e.targa_attiva == false){
            console.log('oninit targa_attiva == 0', this.veicoli);
          }
        })*/
        
        if (data) {
          this.spinner = false;
        }
      });
  }

  ngOnChanges(): void {
    //this.veicoloSuccess = this.veicoliSvc.successMessage;
    //console.log('success', this.veicoloSuccess);
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
          /*this.veicoloForm?.id,
          this.veicoloForm?.id_marca,
          this.veicoloForm?.id_modello,
          this.veicoloForm?.id_destinazione_uso,
          this.veicoloForm?.id_proprietario,
          this.veicoloForm?.id_alimentazione,
          this.veicoloForm?.id_tipo_allestimento,
          this.veicoloForm?.id_tipo_asse,
          this.veicoloForm?.id_tipo_cambio,
          this.veicoloForm?.id_stato,
          this.veicoloForm?.id_disponibilita */
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
      
      this.veicoliSvc.saveResFromGetScadenze(data)
    })

  }
 
}