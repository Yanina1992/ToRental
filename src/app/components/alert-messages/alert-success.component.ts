import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'Veicolo creato correttamente',
	}
] 

@Component({
  selector: 'app-alert-success',
  standalone: true,
  imports: [CommonModule, NgFor, NgbAlertModule],
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.scss']
})
export class AlertSuccessComponent {
  alerts: Alert[] = [];

	constructor() {
		this.reset();
	}

	/*close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}*/

	reset() {
		this.alerts = Array.from(ALERTS);
	}
}
