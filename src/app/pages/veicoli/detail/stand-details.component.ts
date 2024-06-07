import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Veicoli } from 'src/app/classes/veicoli';
import { IAlert } from 'src/app/interfaces/ialert';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { IAms } from 'src/app/interfaces/iams';
import { IExtra } from 'src/app/interfaces/iextra';
import { Rextra } from 'src/app/interfaces/rextra';

@Component({
  selector: 'app-stand-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-details.component.html',
  styleUrls: ['./stand-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StandDetailsComponent {
  @Input() id: number = 0;

  veicolo: Veicoli = new Veicoli();

  onlyActiveAms:any[]=[];

  myAms:any[]=[];

  amsToShow:any[]=[];

  wrongAms:any[]=[];

  /*assicurazione_assistenza_stradale:IAlert[] = [];
  assicurazione_atti_vandalici: IAlert[] = [];
  assicurazione_bonus_malus: IAlert[] = [];
  assicurazione_chilometri: IAlert[] = [];
  assicurazione_collisione: IAlert[] = [];
  assicurazione_cristalli: IAlert[] = [];
  assicurazione_danni_terzi: IAlert[] = [];
  assicurazione_eventi_atmosferici: IAlert[] = [];
  assicurazione_furto_incendio: IAlert[] = [];
  assicurazione_infortuni_conducente: IAlert[] = [];
  assicurazione_kasko: IAlert[] = [];
  assicurazione_perdita_valore: IAlert[] = [];
  assicurazione_rca: IAlert[] = [];
  assicurazione_scatola_nera: IAlert[];
  assicurazione_temporanea: IAlert[];
  atp: IAlert[];
  bollo: IAlert[];
  bombole: IAlert[];
  gps: IAlert[];
  intervento: IAlert[];
  multa: IAlert[];
  revisione: IAlert[];
  sinistro: IAlert[];
  tachigrafo: IAlert[];
  tagliando: IAlert[];*/

  closeResult: string | undefined;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private veicoliSvc: VeicoliService
  ) {}

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
    this.veicoliSvc.getExtraById(
      this.id).
      subscribe((
        res) => {

      this.veicolo = res;
      console.log('this.veicolo', this.veicolo);

      this.veicolo.ams.forEach((e) => {
        if (e.attivo) {
            // AMS ON
            this.onlyActiveAms.push(e)
        }}
      )
        

      // Itera attraverso l'oggetto e verifica se gli array sono vuoti
      this.veicolo.ams.forEach((valueAMS) => {
        const amsKey = valueAMS.tabella;
        if (valueAMS.attivo) {
            // AMS ON

            if (this.veicolo.current?.hasOwnProperty(amsKey)&&this.veicolo.current[amsKey].length) {
                for(let i = 0; i < this.veicolo.current[amsKey].length; i++) {
                  this.veicolo.current[amsKey][i].stato='on ok';
                  this.veicolo.current[amsKey][i].tabella=amsKey;

                  this.onlyActiveAms.forEach((e)=>{
                    //this.myAms.forEach((el)=>{
                       if(e.tabella == this.veicolo.current[amsKey][i].tabella){
                        this.amsToShow.push(this.veicolo.current[amsKey][i])
                     }else{
                      this.wrongAms.push(this.veicolo.current[amsKey][i])
                     }
                    })
                    
                 // })
                }

                //console.log('myAms array', this.myAms);
                           
            } else {
              for(let i = 0; i < this.veicolo.current[amsKey].length; i++) {
                this.veicolo.current[amsKey][i].stato='on ko';
                this.veicolo.current[amsKey][i].tabella=amsKey;

                this.onlyActiveAms.forEach((e)=>{
                  //this.myAms.forEach((el)=>{
                     if(e.tabella == this.veicolo.current[amsKey][i].tabella){
                      this.amsToShow.push(this.veicolo.current[amsKey][i])
                   }else{
                    this.wrongAms.push(this.veicolo.current[amsKey][i])
                   }
                  })
              }
                //console.log(`AMS ON: ERRORE MANCA ASSICURAZIONE for ${amsKey}`);
            }

        } else {
            // AMS OFF
            if (this.veicolo.current?.hasOwnProperty(amsKey)&&this.veicolo.current[amsKey].length) {
              for(let i = 0; i < this.veicolo.current[amsKey].length; i++) {
                this.veicolo.current[amsKey][i].stato='off ko';
                this.veicolo.current[amsKey][i].tabella=amsKey;

                this.onlyActiveAms.forEach((e)=>{
                  //this.myAms.forEach((el)=>{
                     if(e.tabella == this.veicolo.current[amsKey][i].tabella){
                      this.amsToShow.push(this.veicolo.current[amsKey][i])
                   }else{
                    this.wrongAms.push(this.veicolo.current[amsKey][i])
                   }
                  })
              }
                //console.log('AMS OFF: questo veicolo non deve avere questa assicurazione/fare questa manutenzione ${this.amsKey}');
            } else {
              for(let i = 0; i < this.veicolo.current[amsKey].length; i++) {
                this.veicolo.current[amsKey][i].stato='off ok';
                this.veicolo.current[amsKey][i].tabella=amsKey;

                this.onlyActiveAms.forEach((e)=>{
                     if(e.tabella == this.veicolo.current[amsKey][i].tabella){
                      this.amsToShow.push(this.veicolo.current[amsKey][i])
                   }else{
                    this.wrongAms.push(this.veicolo.current[amsKey][i])
                   }
                  })
              }
                //console.log('AMS OFF: NON STAMPARE for ${this.amsKey}');
            }
        }
        
        this.myAms.push(this.veicolo.current[amsKey]);
        
        
    });
    console.log('mega array', this.myAms);
    console.log(this.myAms[2]);

    console.log(this.onlyActiveAms);


   console.log('ams to show', this.amsToShow);
   console.log('wrong ams', this.wrongAms);
   

    });
  }
}
