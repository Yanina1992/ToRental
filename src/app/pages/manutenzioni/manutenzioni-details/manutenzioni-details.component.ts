import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IManutenzione } from 'src/app/interfaces/imanutenzione';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-manutenzioni-details',
  templateUrl: './manutenzioni-details.component.html',
  styleUrls: ['./manutenzioni-details.component.scss']
})
export class ManutenzioniDetailsComponent implements OnInit {

  /*manutenzione:IManutenzione | undefined;
  tipo:string = '';

  constructor(
    private svc:ServizioService,
    private route:ActivatedRoute
  ){}*/

  ngOnInit(){

    /*this.route.params.subscribe((params) => {
      let firstParam = params['tipo'];
      this.tipo = firstParam;
      let id = params['id'];
      
      this.svc.getById(firstParam, id).subscribe((res)=>{
        this.manutenzione = res;
        console.log('manutenzioni details', res)
      })
    })*/

  }
}
