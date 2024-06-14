import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, debounceTime, map, startWith } from 'rxjs';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-manutenzioni-table',
  templateUrl: './manutenzioni-table.component.html',
  styleUrls: ['./manutenzioni-table.component.scss'],
})
export class ManutenzioniTableComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  tipo:string | null = '';

  page = 1;
  pageSize = 10;
  manutenzioni: IManutenzione[] = [];
  collectionSize:number | undefined;

  filter = new FormControl('');

  term:string = '';

  myArraySize: any;
  text: string = '';

  spinner:boolean | undefined = true;

  formSubmitted: boolean = false;

  manutenzioneSuccess:boolean = false;

  constructor(
    private route:ActivatedRoute,
    private svc:ServizioService
  ){}

   //Define the method for calling manutenzioni's list
   public getAllManutenzioni(){
    this.svc.getAllWithParams(this.tipo, this.page, this.pageSize, this.text)
    .subscribe((data: IManutenzione[]) => {
    this.manutenzioni = data.reverse();
    this.collectionSize = this.manutenzioni[0]?.arraySize ?? 0;
    this.myArraySize = this.collectionSize;
      this.spinner = false;
      this.setupFilter();
      console.log(this.manutenzioni);  
  });
}

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
    this.setupFilter();
    
  }
  /*ngOnChanges(): void {
    this.manutenzioneSuccess  = this.svc.successMessage;
  }*/
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  setupFilter() {
    const subscription = this.filter.valueChanges  
      .pipe(
        debounceTime(300),
        map((text) => {
          const term = text ? text.trim().toLowerCase() : '';
          //console.log('text', text);
          return term     
  }),
      )
      .subscribe((t) => {
          if(t && t.length > 0){
            this.search(t)
            //console.log('term', t);         
          }else{
            this.collectionSize = this.manutenzioni[0]?.arraySize ?? 0;
            this.myArraySize = this.collectionSize
          }
      });
    this.subscriptions.add(subscription); 
  }
       search(text: string) {
        console.log('search text',text);
        
        this.page = 1;
        this.svc
          .getAllWithParams(this.tipo, this.page, this.pageSize, text)
          .subscribe((data: IManutenzione[]) => {
            this.manutenzioni = data;
            console.log('data', data);
            
            this.collectionSize = this.manutenzioni.length ? this.manutenzioni[0].arraySize : 0;
            this.myArraySize = this.collectionSize;
          });
      }
}