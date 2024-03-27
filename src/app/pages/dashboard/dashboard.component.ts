import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

public pieChartData: ChartConfiguration['data'] = {
  datasets: [{
    data: [300, 500, 100],
    backgroundColor: ['red', 'green', 'blue'],
    hoverBackgroundColor: ['darkred', 'darkgreen', 'darkblue']
  }],
  labels: ['Red', 'Green', 'Blue']
};

public pieChartOptions: ChartConfiguration['options'] = {
  responsive:true,
};

pieChartType: ChartType = 'pie';
}
