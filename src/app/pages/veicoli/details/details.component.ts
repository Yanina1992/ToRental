import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veicoli } from 'src/app/classes/veicoli';
import { IAlert } from 'src/app/interfaces/alert/ialert';
import { VeicoliService } from 'src/app/services/veicoli.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  veicolo: Veicoli = new Veicoli();
  veicoloExtra: Veicoli = new Veicoli();

  assicurazioni: IAlert[] | undefined;
  atp: IAlert[] | undefined;
  bolli: IAlert[] | undefined;
  bombole: IAlert[] | undefined;
  interventi: IAlert[] | undefined;
  multe: IAlert[] | undefined;
  revisioni: IAlert[] | undefined;
  sinistri: IAlert[] | undefined;
  tachigrafi: IAlert[] | undefined;
  tagliandi: IAlert[] | undefined;

  constructor(
    private veicoliSvc: VeicoliService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      this.veicoliSvc.getExtraById(params.id).subscribe((res) => {
        this.veicolo = res;

        this.assicurazioni = this.veicolo.current?.assicurazione;
        this.atp = this.veicolo.current?.atp;
        this.bolli = this.veicolo.current?.bollo;
        this.bombole = this.veicolo.current?.bombole;
        this.interventi = this.veicolo.current?.intervento;
        this. multe = this.veicolo.current?.multa;
        this.revisioni = this.veicolo.current?.revisione;
        this.sinistri = this. veicolo.current?.sinistro;
        this.tachigrafi = this.veicolo.current?.tachigrafo;
        this.tagliandi = this.veicolo.current?.tagliando;

        //this.bombole = this.veicolo.current?.bombole[0].data_pagamento;

        console.log('veicolo current', this.veicolo.current

        );
      });
    });
  }
}
