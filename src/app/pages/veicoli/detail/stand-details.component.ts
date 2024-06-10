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

  closeResult: string | undefined;

  kListOk: any[] = [];

  kListScaduto: any[] = [];

  kListSospeso: any[] = [];

  kListDaNonMostrare: any[] = [];
  

  constructor(
    private offcanvasService: NgbOffcanvas,
    private veicoliSvc: VeicoliService
  ) {}

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
    this.veicoliSvc.getExtraById(this.id).subscribe((res) => {
      this.veicolo = res;
      console.log('this.veicolo', this.veicolo);
      console.log('k', this.veicolo.k);

      if (this.veicolo) {
        this.veicolo.k.forEach((el) => {
          //debugger
          const status = el[0];
            if (status == 'OK') {
              this.kListOk.push(el);      
              //
            } else if (status == 'SCADUTO') {
              this.kListScaduto.push(el);
              //
            } else if (status == 'SOSPESO') {
              this.kListSospeso.push(el);
              //
            } else if (status == 'DA NON MOSTRARE') {
              this.kListDaNonMostrare.push(el);
              //
            }
        });
        console.log('ok', this.kListOk);
        console.log('scaduto', this.kListScaduto);
        console.log('sospeso', this.kListSospeso);
        //console.log('da non mostrare', this.kListDaNonMostrare);
      }
    });
  }
}
