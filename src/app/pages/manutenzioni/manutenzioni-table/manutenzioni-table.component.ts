import { Component, OnInit, OnDestroy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, debounceTime, map } from 'rxjs';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { ServizioService } from 'src/app/services/servizio.service';
import { VeicoliService } from 'src/app/services/veicoli.service';

@Component({
  selector: 'app-manutenzioni-table',
  templateUrl: './manutenzioni-table.component.html',
  styleUrls: ['./manutenzioni-table.component.scss'],
})
export class ManutenzioniTableComponent
  implements OnInit, OnDestroy, OnChanges
{
  private subscriptions = new Subscription();

  tipo: string | null = '';
  page = 1;
  pageSize = 10;
  manutenzioni: IManutenzione[] = [];
  collectionSize: number | undefined;
  filter = new FormControl('');
  term?: string;
  myArraySize: any;
  text?: string;
  spinner: boolean | undefined = true;
  formSubmitted: boolean = false;
  manutenzioneSuccess: boolean = false;
  targheAttive: string[] = [];

  veicoloNotFound: boolean = false;
  readIdFromScadenze = this.veicoliService.idFromScadenze;

  constructor(
    private route: ActivatedRoute,
    private svc: ServizioService,
    private veicoliService: VeicoliService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(): void {
    this.veicoloNotFound = this.svc.notFoundMessage;
  }
  //Define the method for calling manutenzioni's list
  public getAllManutenzioni() {
    this.svc
      .getAllWithParams(this.tipo, this.page, this.pageSize, this.text)
      .subscribe((data: IManutenzione[]) => {
        this.manutenzioni = data.reverse();
        this.collectionSize = this.manutenzioni[0]?.arraySize ?? 0;
        this.myArraySize = this.collectionSize;
        this.spinner = false;
        this.manutenzioni.forEach((e) => {
          e.targhe?.forEach((targa) => {
            if (targa.attiva) {
              e.targa_attuale = targa.targa;
            }
          });
        });
      });
  }

  ngOnInit(): void {
    this.veicoliService.savedManutenzioni$.subscribe(
      (manutenzioneFromScadenze) => {
        if (manutenzioneFromScadenze) {
          this.manutenzioni = manutenzioneFromScadenze;
          console.log('man from scad', manutenzioneFromScadenze);
          console.log(this.manutenzioni);
          this.cdr.detectChanges();
          this.spinner = false;
        } else {
          //Get the type of manutenzione
          this.route.paramMap.subscribe((params) => {
            this.tipo = params.get('tipo');
          });
          //Call the method which gets the list of manutenzioni
          this.svc.refreshTable$.subscribe(() => {
            this.getAllManutenzioni();
          });
          this.getAllManutenzioni();
          this.setupFilter();

          //Scadenze
          if (this.readIdFromScadenze) {
            console.log(this.readIdFromScadenze);
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  getArraySize() {
    if (this.manutenzioni.length > 0) {
      this.veicoloNotFound = false;
      return this.manutenzioni[0].arraySize;
    } else {
      this.veicoloNotFound = true;
      console.log('this.veicoloNotFound', this.veicoloNotFound);
      return 0;
    }
  }
  setupFilter() {
    const subscription = this.filter.valueChanges
      .pipe(
        debounceTime(300),
        map((text) => {
          const term = text ? text.trim().toLowerCase() : '';
          return term;
        })
      )
      .subscribe((t) => {
        this.text = t;
        this.search(t);
        console.log(this.manutenzioni.length);
        this.myArraySize = this.getArraySize();
        console.log('array size', this.myArraySize);
      });
  }
  search(text: string) {
    console.log('search text', text);
    console.log('search term', this.term);
    this.page = 1;
    const subsc = this.svc
      .getAllWithParams(this.tipo, this.page, this.pageSize, text)
      .subscribe((data: IManutenzione[]) => {
        this.manutenzioni = data;
        this.myArraySize = this.getArraySize();
      });
    this.subscriptions.add(subsc);
  }
}
