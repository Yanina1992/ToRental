import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-manutenzioni',
  templateUrl: './manutenzioni.component.html',
  styleUrls: ['./manutenzioni.component.scss'],
})
export class ManutenzioniComponent implements OnInit{

  constructor(
    private router: Router,
    private svc:ServizioService
  ){}

  label:any;

  ngOnInit(): void {
    this.readUrl()
  }
  readUrl():void{
    let labelToModify = this.router.url
    this.label = labelToModify.slice(1)
    
    this.svc.currentPage(this.label)
    console.log('url', this.label);
  }

}
