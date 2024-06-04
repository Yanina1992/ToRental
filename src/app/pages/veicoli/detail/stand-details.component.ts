import { Component, TemplateRef, ViewEncapsulation, Input } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Veicoli } from 'src/app/classes/veicoli';
import { IAlert } from 'src/app/interfaces/ialert';
import { VeicoliService } from 'src/app/services/veicoli.service';

@Component({
  selector: 'app-stand-details',
  standalone: true,
  imports:
  [
    CommonModule
  ],
  templateUrl: './stand-details.component.html',
  styleUrls: ['./stand-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StandDetailsComponent {

  @Input() id:number = 0;

  veicolo: Veicoli = new Veicoli();

  assicurazioni: IAlert[] | undefined;
  atps: IAlert[] | undefined;
  bolli: IAlert[] | undefined;
  bombole: IAlert[] | undefined;
  interventi: IAlert[] | undefined;
  multe: IAlert[] | undefined;
  revisioni: IAlert[] | undefined;
  sinistri: IAlert[] | undefined;
  tachigrafi: IAlert[] | undefined;
  tagliandi: IAlert[] | undefined;

  closeResult: string | undefined;

	constructor(
    private offcanvasService: NgbOffcanvas,
    private veicoliSvc: VeicoliService,
  ) {}

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
      this.veicoliSvc.getExtraById(this.id).subscribe((res) => {
        this.veicolo = res;

        console.log('res edit', res)

        //console.log('ams', this.veicolo.ams)
 
        });

        this.assicurazioni = this.veicolo.current?.assicurazione;
        this.atps = this.veicolo.current?.atp;
        this.bolli = this.veicolo.current?.bollo;
        this.bombole = this.veicolo.current?.bombole;
        this.interventi = this.veicolo.current?.intervento;
        this.multe = this.veicolo.current?.multa;
        this.revisioni = this.veicolo.current?.revisione;
        this.sinistri = this. veicolo.current?.sinistro;
        this.tachigrafi = this.veicolo.current?.tachigrafo;
        this.tagliandi = this.veicolo.current?.tagliando;
        //this.bombole = this.veicolo.current?.bombole;

      }
	}






