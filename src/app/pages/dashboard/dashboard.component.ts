import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { IBombole } from 'src/app/interfaces/alert/ibombole';
import { IRevisioni } from 'src/app/interfaces/alert/irevisioni';
import { AlertService } from 'src/app/services/alert.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private alertSvc: AlertService) {}

  //PIECHART---------------------------------
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

  //REVISIONI VAR

  //Variabili per salvare le revisioni in scadenza in manierea scaglionata in base all'urgenza
  //Le revisioni che arrivano facendo la chiamata su revisioniAlertUrl sono solo quelle che scadono a breve
  revisioniAlert: IRevisioni[] = [];
  //revisioni in scadenza scaglionate
  revisioniScadute: IRevisioni[] = [];
  revisioniScadenzaBreveTermine: IRevisioni[] = []; //scadenza tra 0-6 giorni (se livello=0 vuol dire che la revisione scade il giorno dopo)
  revisioniScadenzaMedioTermine: IRevisioni[] = []; //7-14
  revisioniScadenzaLungoTermine: IRevisioni[] = []; //15-30

  nRevisioniScadute: number = 0;
  nRevisioniScadenzaBreveTermine: number = 0;
  nRevisioniScadenzaMedioTermine: number = 0;
  nRevisioniScadenzaLungoTermine: number = 0;

  //BOMBOLE VAR
  //Variabili per salvare le bombole in scadenza in manierea scaglionata in base all'urgenza
  //Le bombole che arrivano facendo la chiamata su bomboleAlertUrl sono solo quelle che scadono a breve
  bomboleAlert: IBombole[] = [];
  //bombole in scadenza scaglionate
  bomboleScadute: IBombole[] = [];
  bomboleScadenzaBreveTermine: IBombole[] = []; //scadenza tra 0-6 giorni (se livello=0 vuol dire che la revisione scade il giorno dopo)
  bomboleScadenzaMedioTermine: IBombole[] = []; //7-14
  bomboleScadenzaLungoTermine: IBombole[] = []; //15-30

  nBomboleScadute: number = 0;
  nBomboleScadenzaBreveTermine: number = 0;
  nBomboleScadenzaMedioTermine: number = 0;
  nBomboleScadenzaLungoTermine: number = 0;

  get isRevisioniScadute(): boolean {
    return this.nRevisioniScadute > 0;
  }

  get isBomboleScadute(): boolean {
    return this.nRevisioniScadute > 0;
  }

  //GET REVISIONI
  ngOnInit() {
    this.alertSvc.getAllRevisioniAlert().subscribe((response: any) => {
      //Raffo----------------------------
      Object.values(response.data).forEach((vehicle: any) => {
        if (vehicle.livello < 0) {
          this.revisioniScadute.push(vehicle);
          this.nRevisioniScadute = this.revisioniScadute.length;
        } else if (vehicle.livello >= 0 && vehicle.livello < 7) {
          this.revisioniScadenzaBreveTermine.push(vehicle);
          this.nRevisioniScadenzaBreveTermine =
            this.revisioniScadenzaBreveTermine.length;
        } else if (vehicle.livello >= 7 && vehicle.livello < 15) {
          this.revisioniScadenzaMedioTermine.push(vehicle);
          this.nRevisioniScadenzaMedioTermine =
            this.revisioniScadenzaMedioTermine.length;
        } else if (vehicle.livello >= 15 && vehicle.livello < 30) {
          this.revisioniScadenzaLungoTermine.push(vehicle);
          this.nRevisioniScadenzaLungoTermine =
            this.revisioniScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });

    //GET BOMBOLE
    this.alertSvc.getAllBomboleAlert().subscribe((response: any) => {
      //Raffo----------------------------
      Object.values(response.data).forEach((vehicle: any) => {
        if (vehicle.livello < 0) {
          this.bomboleScadute.push(vehicle);
          this.nBomboleScadute = this.bomboleScadute.length;
        } else if (vehicle.livello >= 0 && vehicle.livello < 7) {
          this.bomboleScadenzaBreveTermine.push(vehicle);
          this.nBomboleScadenzaBreveTermine =
            this.bomboleScadenzaBreveTermine.length;
        } else if (vehicle.livello >= 7 && vehicle.livello < 15) {
          this.bomboleScadenzaMedioTermine.push(vehicle);
          this.nBomboleScadenzaMedioTermine =
            this.bomboleScadenzaMedioTermine.length;
        } else if (vehicle.livello >= 15 && vehicle.livello < 30) {
          this.bomboleScadenzaLungoTermine.push(vehicle);
          this.nBomboleScadenzaLungoTermine =
            this.bomboleScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });

    this.initializeLineChart();
  }


  initializeLineChart() {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    const config: ChartConfiguration<'line', number[], string> = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
      },
    };

    // Initialize the Chart
    new Chart('lineChartCanvas', config);
  }
}
