import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  Input
} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stand-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stand-details.component.html',
  styleUrls: ['./stand-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StandDetailsComponent {
  @Input() id: number = 0;

  veicolo: Veicoli = new Veicoli();

  closeResult: string | undefined;

  kListOk: any[] = [];
  kListScaduto: any[] = [];
  kListSospeso: any[] = [];
  kListDaNonMostrare: any[] = [];

  allVeicoliToShow:any[] = [];

  format = 'shortDate';
  timezone = 'Europe/Rome';
  locale = 'it-IT';

  secondParameter:string = '';

  public dynamicRoute: string = '/manutenzioni/assicurazione_assistenza_stradale';
  public dynamicVehicleId: number = 0
  public dynamicObjId: number = 0

  constructor(
    private offcanvasService: NgbOffcanvas,
    private veicoliSvc: VeicoliService,
  ) {}

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
    this.veicoliSvc.getExtraById(this.id).subscribe((res) => {
      this.veicolo = res;
      console.log('veicolo.k', this.veicolo);
      
      if (this.veicolo) {
        this.veicolo.k.forEach((el) => {
          const status = el[0];
          if (status == 'OK') {
            this.kListOk.push(el);
          } else if (status == 'SCADUTO') {
            this.kListScaduto.push(el);
          } else if (status == 'SOSPESO') {
            this.kListSospeso.push(el);
          } else if (status == 'DA NON MOSTRARE') {
            this.kListDaNonMostrare.push(el);
          }
        });
      }
    });
  }

  idFromScadenze:number | undefined = 0;
  tipoFromScadenze:string | undefined;

  setDynamicValues(route: string, vehicleId: number, objId: number): void {
    this.dynamicRoute = route;
    this.dynamicVehicleId = vehicleId;
    this.dynamicObjId = objId;
  }
  getIdFromScadenze(tipo: string, idVeicolo: number | undefined, idScadenza: number): void {
    if (idVeicolo == undefined) {
      console.error('Invalid vehicle ID');
      return;
    }

    this.idFromScadenze = idScadenza;
    this.tipoFromScadenze = tipo;

    this.veicoliSvc.getScadenzaById(tipo, idVeicolo, idScadenza)
      .subscribe((data: IManutenzione[]) => {
        console.log('does getScadenzaFromId work?', data);
        this.veicoliSvc.saveResFromGetScadenze(data);
  })
this.offcanvasService.dismiss('Cross click')
}
}