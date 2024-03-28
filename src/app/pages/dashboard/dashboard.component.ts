import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Revisioni } from 'src/app/interfaces/alert/revisioni';
import { AlerService } from 'src/app/services/aler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private alertSvc: AlerService) {}

  public pieChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: ['red', 'green', 'blue'],
        hoverBackgroundColor: ['darkred', 'darkgreen', 'darkblue'],
      },
    ],
    labels: ['Red', 'Green', 'Blue'],
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  pieChartType: ChartType = 'pie';

  //Variabili per salvare le revisioni in scadenza in manierea scaglionata in base all'urgenza
  //Le revisioni che arrivano facendo la chiamata su revisioniAlertUrl sono solo quelle che scadono a breve
  revisioniAlert: Revisioni[] = [];
  //revisioni in scadenza scaglionate
  revisioniScadute: Revisioni[] = [];
  revisioniScadenzaBreveTermine: Revisioni[] = []; //scadenza tra 0-6 giorni (se livello=0 vuol dire che la revisione scade il giorno dopo)
  revisioniScadenzaMedioTermine: Revisioni[] = []; //7-14
  revisioniScadenzaLungoTermine: Revisioni[] = []; //15-30

  nRevisioniScadute:number = 0;
  nRevisioniScadenzaBreveTermine:number = 0;
  nRevisioniScadenzaMedioTermine:number = 0;
  nRevisioniScadenzaLungoTermine:number = 0;

  //Get
  ngOnInit() {
    this.alertSvc
      .getAllRevisioniAlert().subscribe((response:any) =>
        {
          //Raffo----------------------------
          Object.values(response.data).forEach((vehicle: any) => {

            if (vehicle.livello < 0)
            {
              this.revisioniScadute.push(vehicle);
              this.nRevisioniScadute = this.revisioniScadute.length
            }
            else if (vehicle.livello >= 0 && vehicle.livello < 7)
            {
              this.revisioniScadenzaBreveTermine.push(vehicle);
              this.nRevisioniScadenzaBreveTermine = this.revisioniScadenzaBreveTermine.length
            }
            else if (vehicle.livello >= 7 && vehicle.livello < 15)
            {
              this.revisioniScadenzaMedioTermine.push(vehicle);
              this.nRevisioniScadenzaMedioTermine = this.revisioniScadenzaMedioTermine.length
            }
            else if (vehicle.livello >= 15 && vehicle.livello < 30)
            {
              this.revisioniScadenzaLungoTermine.push(vehicle);
              this.nRevisioniScadenzaLungoTermine = this.revisioniScadenzaLungoTermine.length
            }
            else {
              console.warn('Livello di urgenza non gestito:', vehicle);
            }
        });      
        }
      )
  }}