import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { IBombole } from 'src/app/interfaces/alert/ibombole';
import { IRevisioni } from 'src/app/interfaces/alert/irevisioni';
import { AlertService } from 'src/app/services/alert.service';
import { Chart } from 'chart.js';
import { IAssicurazioni } from 'src/app/interfaces/alert/iassicurazioni';
import { IAtp } from 'src/app/interfaces/alert/iatp';
import { IBolli } from 'src/app/interfaces/alert/ibolli';
import { ITachigrafi } from 'src/app/interfaces/alert/itachigrafi';
import { ITagliandi } from 'src/app/interfaces/alert/itagliandi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private alertSvc: AlertService) {}

  //CHARTS-------------------------------------------------------------------
  //PieChart
  /*public pieChartData: ChartConfiguration['data'] = {
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

  //LineChart---
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
  }*/
  //---------------------------------//----------------------------------//

  //REVISIONI variables and methods
  //Variables to save expiring R. staggered based on urgency
  //The R. coming in by calling revisionAlertUrl are only those expiring soon
  revisioniAlert: IRevisioni[] = [];
  // Expiring R. staggered
  revisioniScadute: IRevisioni[] = [];
  revisioniScadenzaBreveTermine: IRevisioni[] = []; //Expires between 0-6 days (if level = 0, it means the R. expires the next day)
  revisioniScadenzaMedioTermine: IRevisioni[] = []; //7-14
  revisioniScadenzaLungoTermine: IRevisioni[] = []; //15-30
  //Variables to calculate the total ammount of expired R. in each case
  nRevisioniScadute: number = 0;
  nRevisioniScadenzaBreveTermine: number = 0;
  nRevisioniScadenzaMedioTermine: number = 0;
  nRevisioniScadenzaLungoTermine: number = 0;
  //Checking if there are any R. already expired; if there are, they are displayed in the footer of the card with an alert icon
  get isRevisioniScadute(): boolean {
    return this.nRevisioniScadute > 0;
  }
  //ASSICURAZIONI variables and methods
  //Variables to save expiring A. staggered based on urgency
  //The A. coming in by calling assicurazioniAlertUrl are only those expiring soon
  assicurazioniAlert: IAssicurazioni[] = [];
  // Expiring A. staggered
  assicurazioniScadute: IAssicurazioni[] = [];
  assicurazioniScadenzaBreveTermine: IAssicurazioni[] = []; //Expires between 0-6 days (if level = 0, it means the A. expires the next day)
  assicurazioniScadenzaMedioTermine: IAssicurazioni[] = []; //7-14
  assicurazioniScadenzaLungoTermine: IAssicurazioni[] = []; //15-30
  //Variables to calculate the total ammount of expired A. in each case
  nAssicurazioniScadute: number = 0;
  nAssicurazioniScadenzaBreveTermine: number = 0;
  nAssicurazioniScadenzaMedioTermine: number = 0;
  nAssicurazioniScadenzaLungoTermine: number = 0;
  //Checking if there are any A. already expired; if there are, they are displayed in the footer of the card with an alert icon
  get isAssicurazioniScadute(): boolean {
    return this.nAssicurazioniScadute > 0;
  }
  //ATP certificates variables and methods
  //Variables to save expiring ATP certificates staggered based on urgency
  //The ATP certificates coming in by calling atpAlertUrl are only those expiring soon
  atpAlert: IAtp[] = [];
  // Expiring ATP certificates staggered
  atpScaduti: IAtp[] = [];
  atpScadenzaBreveTermine: IAtp[] = []; //Expires between 0-6 days (if level = 0, it means the ATP expires the next day)
  atpScadenzaMedioTermine: IAtp[] = []; //7-14
  atpScadenzaLungoTermine: IAtp[] = []; //15-30
  //Variables to calculate the total ammount of expired ATP certificates in each case
  nAtpScaduti: number = 0;
  nAtpScadenzaBreveTermine: number = 0;
  nAtpScadenzaMedioTermine: number = 0;
  nAtpScadenzaLungoTermine: number = 0;
  //Checking if there are any ATP certificates already expired; if there are, they are displayed in the footer of the card with an alert icon
  get isAtpScaduti(): boolean {
    return this.nAtpScaduti > 0;
  }
  //BOLLI variables and methods
  //Variables to save expiring B. staggered based on urgency
  //The B. coming in by calling bolliAlertUrl are only those expiring soon
  bolliAlert: IBolli[] = [];
  // Expiring B. staggered
  bolliScaduti: IBolli[] = [];
  bolliScadenzaBreveTermine: IBolli[] = []; //Expires between 0-6 days (if level = 0, it means the B. expires the next day)
  bolliScadenzaMedioTermine: IBolli[] = []; //7-14
  bolliScadenzaLungoTermine: IBolli[] = []; //15-30
  //Variables to calculate the total ammount of expired B. in each case
  nBolliScaduti: number = 0;
  nBolliScadenzaBreveTermine: number = 0;
  nBolliScadenzaMedioTermine: number = 0;
  nBolliScadenzaLungoTermine: number = 0;
  //Checking if there are any B. already expired; if there are, they are displayed in the footer of the card with an alert icon
  get isBolliScaduti(): boolean {
    return this.nBolliScaduti > 0;
  }

  //BOMBOLE variables and methods
  //Variables to save expiring B. staggered based on urgency
  //The R. coming in by calling bomboleAlertUrl are only those expiring soon
  bomboleAlert: IBombole[] = [];
  // Expiring B. staggered
  bomboleScadute: IBombole[] = [];
  bomboleScadenzaBreveTermine: IBombole[] = []; //Expires between 0-6 days (if level = 0, it means the B. expires the next day)
  bomboleScadenzaMedioTermine: IBombole[] = []; //7-14
  bomboleScadenzaLungoTermine: IBombole[] = []; //15-30
  //Variables to calculate the total ammount of expired B. in each case
  nBomboleScadute: number = 0;
  nBomboleScadenzaBreveTermine: number = 0;
  nBomboleScadenzaMedioTermine: number = 0;
  nBomboleScadenzaLungoTermine: number = 0;
  //Checking if there are any B. already expired; if there are, they are displayed in the footer of the card with an alert icon
  get isBomboleScadute(): boolean {
    return this.nBomboleScadute > 0;
  }
  //TACHIGRAFI variables and methods
  //Variables to save expiring T. staggered based on urgency
  //The T. coming in by calling tachigrafiAlertUrl are only those expiring soon
  tachigrafiAlert: ITachigrafi[] = [];
  // Expiring T. staggered
  tachigrafiScaduti: ITachigrafi[] = [];
  tachigrafiScadenzaBreveTermine: ITachigrafi[] = []; //Expires between 0-6 days (if level = 0, it means the T. expires the next day)
  tachigrafiScadenzaMedioTermine: ITachigrafi[] = []; //7-14
  tachigrafiScadenzaLungoTermine: ITachigrafi[] = []; //15-30
  //Variables to calculate the total ammount of expired T. in each case
  nTachigrafiScaduti: number = 0;
  nTachigrafiScadenzaBreveTermine: number = 0;
  nTachigrafiScadenzaMedioTermine: number = 0;
  nTachigrafiScadenzaLungoTermine: number = 0;
  //Checking if there are any T. already expired; if there are, they are displayed in the footer of the card with an alert icon
  get isTachigrafiScaduti(): boolean {
    return this.nTachigrafiScaduti > 0;
  }
  //TAGLIANDI variables and methods
  //Variables to save expiring T. staggered based on urgency
  //The T. coming in by calling talgiandiAlertUrl are only those expiring soon
  tagliandiAlert: ITagliandi[] = [];
  // Expiring T. staggered
  tagliandiScaduti: ITagliandi[] = [];
  tagliandiScadenzaBreveTermine: ITagliandi[] = []; //Expires between 0-6 days (if level = 0, it means the T. expires the next day)
  tagliandiScadenzaMedioTermine: ITagliandi[] = []; //7-14
  tagliandiScadenzaLungoTermine: ITagliandi[] = []; //15-30
  //Variables to calculate the total ammount of expired T. in each case
  nTagliandiScaduti: number = 0;
  nTagliandiScadenzaBreveTermine: number = 0;
  nTagliandiScadenzaMedioTermine: number = 0;
  nTagliandiScadenzaLungoTermine: number = 0;
  //Checking if there are any T. already expired; if there are, they are displayed in the footer of the card with an alert icon
  get isTagliandiScaduti(): boolean {
    return this.nTagliandiScaduti > 0;
  }

  
  ngOnInit() {
    //Get all REVISIONI Alert
    this.alertSvc.getAllRevisioniAlert().subscribe((response: any) => {
      //Checking the 'livello' of each vehicle, in which the number of days elapsed since the expiration date is saved
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
        } else if (vehicle.livello >= 15 && vehicle.livello <= 30) {
          this.revisioniScadenzaLungoTermine.push(vehicle);
          this.nRevisioniScadenzaLungoTermine =
            this.revisioniScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });
    //Get all ASSICURAZIONI Alert
    this.alertSvc.getAllAssicurazioniAlert().subscribe((response: any) => {
      //Checking the 'livello' of each vehicle, in which the number of days elapsed since the expiration date is saved
      Object.values(response.data).forEach((vehicle: any) => {
        if (vehicle.livello < 0) {
          this.assicurazioniScadute.push(vehicle);
          this.nAssicurazioniScadute = this.assicurazioniScadute.length;
        } else if (vehicle.livello >= 0 && vehicle.livello < 7) {
          this.assicurazioniScadenzaBreveTermine.push(vehicle);
          this.nAssicurazioniScadenzaBreveTermine =
            this.assicurazioniScadenzaBreveTermine.length;
        } else if (vehicle.livello >= 7 && vehicle.livello < 15) {
          this.assicurazioniScadenzaMedioTermine.push(vehicle);
          this.nAssicurazioniScadenzaMedioTermine =
            this.assicurazioniScadenzaMedioTermine.length;
        } else if (vehicle.livello >= 15 && vehicle.livello <= 30) {
          this.assicurazioniScadenzaLungoTermine.push(vehicle);
          this.nAssicurazioniScadenzaLungoTermine =
            this.assicurazioniScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });
    //Get all ATP Alert
    this.alertSvc.getAllAtpAlert().subscribe((response: any) => {
      //Checking the 'livello' of each vehicle, in which the number of days elapsed since the expiration date is saved
      Object.values(response.data).forEach((vehicle: any) => {
        if (vehicle.livello < 0) {
          this.atpScaduti.push(vehicle);
          this.nAtpScaduti = this.revisioniScadute.length;
        } else if (vehicle.livello >= 0 && vehicle.livello < 7) {
          this.atpScadenzaBreveTermine.push(vehicle);
          this.nAtpScadenzaBreveTermine =
            this.atpScadenzaBreveTermine.length;
        } else if (vehicle.livello >= 7 && vehicle.livello < 15) {
          this.atpScadenzaMedioTermine.push(vehicle);
          this.nAtpScadenzaMedioTermine =
            this.atpScadenzaMedioTermine.length;
        } else if (vehicle.livello >= 15 && vehicle.livello <= 30) {
          this.atpScadenzaLungoTermine.push(vehicle);
          this.nAtpScadenzaLungoTermine =
            this.atpScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });
    //Get all BOLLI Alert
    this.alertSvc.getAllBolliAlert().subscribe((response: any) => {
      //Checking the 'livello' of each vehicle, in which the number of days elapsed since the expiration date is saved
      Object.values(response.data).forEach((vehicle: any) => {
        if (vehicle.livello < 0) {
          this.bolliScaduti.push(vehicle);
          this.nBolliScaduti = this.bolliScaduti.length;
        } else if (vehicle.livello >= 0 && vehicle.livello < 7) {
          this.bolliScadenzaBreveTermine.push(vehicle);
          this.nBolliScadenzaBreveTermine =
            this.bolliScadenzaBreveTermine.length;
        } else if (vehicle.livello >= 7 && vehicle.livello < 15) {
          this.bolliScadenzaMedioTermine.push(vehicle);
          this.nBolliScadenzaMedioTermine =
            this.bolliScadenzaMedioTermine.length;
        } else if (vehicle.livello >= 15 && vehicle.livello <= 30) {
          this.bolliScadenzaLungoTermine.push(vehicle);
          this.nBolliScadenzaLungoTermine =
            this.bolliScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });
    //Get all BOMBOLE Alert
    this.alertSvc.getAllBomboleAlert().subscribe((response: any) => {
      //Checking the 'livello' of each vehicle, in which the number of days elapsed since the expiration date is saved
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
        } else if (vehicle.livello >= 15 && vehicle.livello <= 30) {
          this.bomboleScadenzaLungoTermine.push(vehicle);
          this.nBomboleScadenzaLungoTermine =
            this.bomboleScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });
    //Get all TACHIGRAFI Alert
    this.alertSvc.getAllTachigrafiAlert().subscribe((response: any) => {
      //Checking the 'livello' of each vehicle, in which the number of days elapsed since the expiration date is saved
      Object.values(response.data).forEach((vehicle: any) => {
        if (vehicle.livello < 0) {
          this.tachigrafiScaduti.push(vehicle);
          this.nTachigrafiScaduti = this.tachigrafiScaduti.length;
        } else if (vehicle.livello >= 0 && vehicle.livello < 7) {
          this.tachigrafiScadenzaBreveTermine.push(vehicle);
          this.nTachigrafiScadenzaBreveTermine =
            this.tachigrafiScadenzaBreveTermine.length;
        } else if (vehicle.livello >= 7 && vehicle.livello < 15) {
          this.tachigrafiScadenzaMedioTermine.push(vehicle);
          this.nTachigrafiScadenzaMedioTermine =
            this.tachigrafiScadenzaMedioTermine.length;
        } else if (vehicle.livello >= 15 && vehicle.livello >= 30) {
          this.tachigrafiScadenzaLungoTermine.push(vehicle);
          this.nTachigrafiScadenzaLungoTermine =
            this.tachigrafiScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });
    //Get all TAGLIANDI Alert
    this.alertSvc.getAllTagliandiAlert().subscribe((response: any) => {
      //Checking the 'livello' of each vehicle, in which the number of days elapsed since the expiration date is saved
      Object.values(response.data).forEach((vehicle: any) => {
        if (vehicle.livello < 0) {
          this.tagliandiScaduti.push(vehicle);
          this.nTagliandiScaduti = this.tagliandiScaduti.length;
        } else if (vehicle.livello >= 0 && vehicle.livello < 7) {
          this.tagliandiScadenzaBreveTermine.push(vehicle);
          this.nTagliandiScadenzaBreveTermine =
            this.tagliandiScadenzaBreveTermine.length;
        } else if (vehicle.livello >= 7 && vehicle.livello < 15) {
          this.tagliandiScadenzaMedioTermine.push(vehicle);
          this.nTagliandiScadenzaMedioTermine =
            this.tagliandiScadenzaMedioTermine.length;
        } else if (vehicle.livello >= 15 && vehicle.livello >= 30) {
          this.tagliandiScadenzaLungoTermine.push(vehicle);
          this.nTagliandiScadenzaLungoTermine =
            this.tagliandiScadenzaLungoTermine.length;
        } else {
          console.warn('Livello di urgenza non gestito:', vehicle);
        }
      });
    });
    //Initialize Line Chart in the ngOnInit method
    //this.initializeLineChart();
  }
}
