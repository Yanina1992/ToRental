import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { Subscription, endWith } from 'rxjs';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from '../../../services/veicoli.service';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';
import { IAlimentazione } from 'src/app/interfaces/options-select/ialimentazione';
import { IAllestimento } from 'src/app/interfaces/options-select/iallestimento';
import { IAsse } from 'src/app/interfaces/options-select/iasse';
import { ICambio } from 'src/app/interfaces/options-select/icambio';
import { IDestinazioneDUso } from 'src/app/interfaces/options-select/idestinazione-duso';
import { IMarca } from 'src/app/interfaces/options-select/imarca';
import { IModello } from 'src/app/interfaces/options-select/imodello';
import { ISocieta } from 'src/app/interfaces/options-select/isocieta';
import { ITipoVeicolo } from 'src/app/interfaces/options-select/itipo-veicolo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {

  private subscriptions = new Subscription();

  veicoloForm: Veicoli = new Veicoli();

  page = 1;
  pageSize = 10;
  veicoli: Veicoli[] = [];
  veicoliOnInit: Veicoli[] = [];
  collectionSize = 0;
  filter = new FormControl('');

  term:string | undefined;

  myArraySize: number = 0;
  text: string = '';

  spinner: boolean | undefined = true;

  //Variables to manage select options
  tipiVeicoli: ITipoVeicolo[] = [];
  marche: IMarca[] = [];
  modelli: IModello[] = [];
  destinazioni: IDestinazioneDUso[] = [];
  societas: ISocieta[] = [];
  tipiAlimentazione: IAlimentazione[] = [];
  allestimenti: IAllestimento[] = [];
  tipiAsse: IAsse[] = [];
  tipiCambio: ICambio[] = [];

  redIconList: Veicoli[] = [];
  orangeIconList: Veicoli[] = [];
  greenIconList: Veicoli[] = [];
  greyIconList: Veicoli[] = [];

  isVeicoloPartiallyOk: boolean = false;
  isVeicoloNotOk: boolean = false;
  isVeicoloOk: boolean = false;
  isVeicoloStatoNotDefined: boolean = false;

  //Variable to handle validation
  formSubmitted: boolean = false;

  constructor(
    private veicoliSvc: VeicoliService
  ) {}

  public getAllVeicoli() {
       this.veicoliSvc
      .getAllWithParams(this.page, this.pageSize, this.text)
      .subscribe((data: Veicoli[]) => {
        this.veicoli = data.reverse();
        this.veicoli.reverse();
        this.collectionSize = this.veicoli[0].arraySize;
        this.myArraySize = this.collectionSize;
        this.setupFilter();

        if (data) {
          this.spinner = false;
        }
      });
      }
   
  getStatoIconClass(id_stato: number | undefined): string {
    switch (id_stato) {
      case 3:
        return 'my-orange-icon';
      case 2:
        return 'my-red-icon';
      case 1:
        return 'my-green-icon';
      default:
        return 'my-grey-icon';
    }
  }
  getBanClass(id_disponibilita: number | undefined): string {
    switch (id_disponibilita) {
      case 1:
        return 'd-none';
      default:
        return 'd-inline-block';
    }
  }
  getCheckIconClass(id_disponibilita: number | undefined): string {
    switch (id_disponibilita) {
      case 1:
        return 'd-inline-block text-success';
      default:
        return 'd-none';
    }
  }
  ngOnInit() {
    this.getAllVeicoli();
    this.veicoliSvc.refreshVeicoliTable$.subscribe(() => {
      this.getAllVeicoli();
    });

    //Selects:
    this.veicoliSvc.getAllTipiVeicoli().subscribe((data: ITipoVeicolo[]) => {
      this.tipiVeicoli = data;
    });
    this.veicoliSvc.getAllMarche().subscribe((data: IMarca[]) => {
      this.marche = data;
    });
    this.veicoliSvc
      .getAllDestinazioniDUso()
      .subscribe((data: IDestinazioneDUso[]) => {
        this.destinazioni = data;
      });
    this.veicoliSvc.getAllSocieta().subscribe((data: ISocieta[]) => {
      this.societas = data;
    });
    this.veicoliSvc
      .getAllAlimentazioni()
      .subscribe((data: IAlimentazione[]) => {
        this.tipiAlimentazione = data;
      });
    this.veicoliSvc.getAllAllestimenti().subscribe((data: IAllestimento[]) => {
      this.allestimenti = data;
    });
    this.veicoliSvc.getAllTipiAsse().subscribe((data: IAsse[]) => {
      this.tipiAsse = data;
    });
    this.veicoliSvc.getAllTipiCambio().subscribe((data: ICambio[]) => {
      this.tipiCambio = data;
    });

  }

  veicoloSuccess:boolean = false;

  ngOnChanges(): void {
    this.veicoloSuccess  = this.veicoliSvc.successMessage;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  setupFilter() {
    //When values changes in 'filter' form -> serch input
    const subscription = this.filter.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((text) => {
          this.term = text?.trim().toLowerCase() || '';
          if(this.term == '' && this.term.length == 0){
          }
          return this.term;
        }),
        endWith('')
      )
      .subscribe((t) => {
        if (t && t.length > 0) {
          this.search(t);
        } else {
          this.collectionSize = this.veicoli[0].arraySize;
          this.myArraySize = this.collectionSize
        }
      });
    this.subscriptions.add(subscription);
   
  }
  //Search by targa or telaio
 search(text: string) {
    this.term = text.toLowerCase();
    this.text = this.term;
    this.page = 1;
    this.veicoliSvc
      .getAllWithParams(this.page, this.pageSize, this.text)
      .subscribe((data: Veicoli[]) => {
        this.veicoli = data;
        this.collectionSize = this.veicoli[0].arraySize;
        this.myArraySize = this.collectionSize
        return this.text;
      });
      
  }
  customizedSearch() {
    try {
      this.veicoliSvc
        .getAllWithCustomizedParams(
          this.page,
          this.pageSize,          
          this.veicoloForm?.id_tipo_veicolo,
          this.veicoloForm?.id_marca,
          this.veicoloForm?.id_modello,
          this.veicoloForm?.id_destinazione_uso,
          this.veicoloForm?.id_proprietario,
          this.veicoloForm?.id_alimentazione,
          this.veicoloForm?.id_tipo_allestimento,
          this.veicoloForm?.id_tipo_asse,
          this.veicoloForm?.id_tipo_cambio,
          this.veicoloForm?.id_stato,
          this.veicoloForm?.id_disponibilita,
        )
        .subscribe((data: Veicoli[]) => {
          //console.log('stato', this.veicoloForm.id_stato);
          //console.log('disponibilità', this.veicoloForm.id_disponibilita)
          
          this.veicoli = data.reverse();
          this.veicoli.reverse();
          //this.refreshVeicoli();
          this.setupFilter();
        });
    } catch (error) {
      console.error('Errorrrrr', error);
    }
   this.scrollToResults()
  }
  scrollToResults() {
    const element = document.getElementById('results-table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  //Variable to receive the brand value and populate the model select accordingly
  selectedMarcaId: number | null = null;
  //modelli
  onMarcaChange(selectedMarcaId: number | null) {
    if (selectedMarcaId) {
      //Save the ID value in the object to be sent in the post
      this.veicoloForm.id_marca = selectedMarcaId;
      this.veicoliSvc.getAllModelli().subscribe((data: IModello[]) => {
        //filter
        this.modelli = data.filter((m) => {
          let idMarca = m.id_marca;
          if (idMarca == selectedMarcaId) {
            return true;
          } else {
            return false;
          }
        });
      });
    }
  }
  selectedCambioId: number | null = null;
  onCambioChange(selectedCambioId: number | null) {
    if (selectedCambioId) {
      this.veicoloForm.id_tipo_cambio = selectedCambioId;
    }
  }
  selectedTipoAsseId: number | null = null;
  onTipoAsseChange(selectedTipoAsseId: number | null) {
    if (selectedTipoAsseId) {
      this.veicoloForm.id_tipo_asse = selectedTipoAsseId;
    }
  }
  selectedAllestimentoId: number = 0;
  onAllestimentoChange(selectedAllestimentoId: number) {
    if (selectedAllestimentoId) {
      this.veicoloForm.id_tipo_allestimento = selectedAllestimentoId;
    }
  }
  selectedAlimentazioneId: number = 0;
  onAlimentazioneChange(selectedAlimentazioneId: number) {
    if (selectedAlimentazioneId) {
      this.veicoloForm.id_alimentazione = selectedAlimentazioneId;
    }
  }
  selectedSocietaId: number = 0;
  onSocietaChange(selectedSocietaId: number) {
    if (selectedSocietaId) {
      this.veicoloForm.id_proprietario = selectedSocietaId;
    }
  }
  selectedDestinazioneUsoId: number = 0;
  onDestinazioneUsoChange(selectedDestinazioneUsoId: number) {
    if (selectedDestinazioneUsoId) {
      this.veicoloForm.id_destinazione_uso = selectedDestinazioneUsoId;
    }
  }
  selectedModelloId: number = 0;
  onModelloChange(selectedModelloId: number) {
    if (selectedModelloId) {
      this.veicoloForm.id_modello = selectedModelloId;
    }
  }
  selectedTipoVeicoloId: number = 0;
  onTipeVeicoloChange(selectedTipoVeicoloId: number) {
    if (selectedTipoVeicoloId) {
      this.veicoloForm.id_tipo_veicolo = selectedTipoVeicoloId;
    }
  }
  selectedStatoId:number = 0;
  onStatoChange(selectedStatoId:number){
    if(selectedStatoId){
      this.veicoloForm.id_stato = selectedStatoId;
    }
  }
  selectedDisponibilitaId:number = 0;
  onDisponibilitaChange(selectedDisponibilitaId:number){
    if(selectedDisponibilitaId) {
      this.veicoloForm.id_disponibilita = selectedDisponibilitaId;
    }
  }
 }