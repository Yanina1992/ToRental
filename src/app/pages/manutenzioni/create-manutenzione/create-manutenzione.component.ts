import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-create-manutenzione',
  templateUrl: './create-manutenzione.component.html',
  styleUrls: ['./create-manutenzione.component.scss']
})
export class CreateManutenzioneComponent {
  manutenzioneForm:IManutenzione | undefined;
  isValidDate:any;

  constructor(
    private datePipe: DatePipe,
    private svc:ServizioService
  ) {}

  ngOnInit():void{
    
  }

}
