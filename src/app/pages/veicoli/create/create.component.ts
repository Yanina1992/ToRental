import { Component, OnInit } from '@angular/core';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { ITipoVeicolo } from 'src/app/interfaces/options-select/itipo-veicolo';
import { IMarca } from 'src/app/interfaces/options-select/imarca';
import { IModello } from 'src/app/interfaces/options-select/imodello';
import { IDestinazioneDUso } from 'src/app/interfaces/options-select/idestinazione-duso';
import { ISocieta } from 'src/app/interfaces/options-select/isocieta';
import { IAlimentazione } from 'src/app/interfaces/options-select/ialimentazione';
import { IAllestimento } from 'src/app/interfaces/options-select/iallestimento';
import { IAsse } from 'src/app/interfaces/options-select/iasse';
import { ICambio } from 'src/app/interfaces/options-select/icambio';
import { Veicoli } from 'src/app/classes/veicoli';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  veicoloForm: Veicoli = new Veicoli();
  myDate: any;

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

  constructor(
    //private datePipe: DatePipe,
    private veicoliSvc: VeicoliService,
    private router: Router,
  ) {}

  //isTarga: boolean = false;

  ngOnInit(): void {
    //Selects:
    //tipi di veicoli
    this.veicoliSvc.getAllTipiVeicoli().subscribe((data: ITipoVeicolo[]) => {
      this.tipiVeicoli = data;
    });
    //marche
    this.veicoliSvc.getAllMarche().subscribe((data: IMarca[]) => {
      this.marche = data;
    });
    //destinazioni d'uso
    this.veicoliSvc.getAllDestinazioniDUso().subscribe((data: IDestinazioneDUso[]) => {
        this.destinazioni = data;
      });
    //società
    this.veicoliSvc.getAllSocieta().subscribe((data: ISocieta[]) => {
      this.societas = data;
    });
    //tipi alimentazione
    this.veicoliSvc.getAllAlimentazioni().subscribe((data: IAlimentazione[]) => {
        this.tipiAlimentazione = data;
      });
    //allestimenti
    this.veicoliSvc.getAllAllestimenti().subscribe((data: IAllestimento[]) => {
      this.allestimenti = data;
    });
    //tipi asse
    this.veicoliSvc.getAllTipiAsse().subscribe((data: IAsse[]) => {
      this.tipiAsse = data;
    });
    //cambi
    this.veicoliSvc.getAllTipiCambio().subscribe((data: ICambio[]) => {
      this.tipiCambio = data;
    });
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
  selectedStatoId:number | undefined = undefined;
  onStatoChange(selectedStatoId:number | undefined){
    if(selectedStatoId && selectedStatoId > 0){
      this.veicoloForm.id_stato = selectedStatoId;
  }else{
    this.veicoloForm.id_stato = undefined;
  }
}
  selectedDisponibilitaId:number | undefined = undefined;
  onDisponibilitaChange(selectedDisponibilitaId:number | undefined){
    if(selectedDisponibilitaId && selectedDisponibilitaId > 0) {
      this.veicoloForm.id_disponibilita = selectedDisponibilitaId;
    }else{
      this.veicoloForm.id_disponibilita = undefined;
    }
  }

  //Variable to handle validation
  formSubmitted: boolean = false;

  veicoli: Veicoli[] = [];

  /*onInput() {
    this.isTarga = false; //Reset formSubmitted to false when input is detected
  }*/

  handleDateChange(date:any){
    this.veicoloForm.data_immatricolazione = date;
  }

  creaVeicolo(form: NgForm) {
    this.formSubmitted = true;

    if(form.valid){
      try{
         if(this.veicoloForm.targa == undefined || this.veicoloForm.targa == ''){
      this.veicoloForm.targa = 'MANCANTE'
    }
        this.veicoliSvc.create(this.veicoloForm).subscribe(
          (res:any) => {
            console.log('nuovo veicolo:', res);
            this.veicoliSvc.successMessage = true;
            console.log();
            
            this.router.navigate(['/pages/veicoli/table']);
          },
          (error:any) => {
            console.error('Failed to submit form:', error);
      if (error.status === 400 && error.error.errors && error.error.errors.targa) {
        // Access the specific error message from the backend response
        const errorMessage = error.error.errors.targa[0];
        alert(`Errore: Targa già presente nel database.`);
      } else {
        // Handle other types of errors
        alert('Errore');
      }           
          }
        );
      }
      catch(error){
        throw new Error
      }
    }
   
      }
    }
