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
		type: 'no-elem',
		message: 'Nessun veicolo trovato.',
	}
] 

@Component({
  selector: 'app-no-elements',
  standalone: true,
  imports: [CommonModule, NgFor, NgbAlertModule],
  templateUrl: './no-elements.component.html',
  styleUrls: ['./no-elements.component.scss']
})
export class NoElementsComponent {
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
