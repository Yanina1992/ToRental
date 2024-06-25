import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { ServizioService } from 'src/app/services/servizio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stand-manutenzioni-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-manutenzioni-details.component.html',
  styleUrls: ['./stand-manutenzioni-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StandManutenzioniDetailsComponent {
  @Input() id: number = 0;

  manutenzione: IManutenzione | undefined;
  tipo: string = '';

  closeResult: string | undefined;

  format = 'shortDate';
  timezone = 'Europe/Rome';
  locale = 'it-IT';

  constructor(
    private svc: ServizioService,
    private offcanvasService: NgbOffcanvas,
    private route: ActivatedRoute
  ) {}

  openEnd(content: TemplateRef<any>) {
      this.route.params.subscribe((params) => {
      let firstParam = params['tipo'];
      this.tipo = firstParam;
      console.log('first param:', firstParam,'id:', this.id);
      
      this.offcanvasService.open(content, { position: 'end' });

      this.svc.getById(firstParam, this.id).subscribe((res) => {
        //debugger
        this.manutenzione = res;
        console.log('is firstParam in getById?', firstParam);
        
        console.log('manutenzioni details', res);
      });
    });
  }
}