import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-veicoli',
  templateUrl: './veicoli.component.html',
  styleUrls: ['./veicoli.component.scss']
})
export class VeicoliComponent {
  dateControl = new FormControl();

  /*codice da prova*/
/*chat gpt*/
model: NgbDateStruct | undefined;
date: { year: number; month: number; } | undefined;

isDatepickerOpen = false;

constructor(private calendar: NgbCalendar) {}

toggleDatePicker() {
  this.isDatepickerOpen = !this.isDatepickerOpen;
}

selectToday() {
  this.model = this.calendar.getToday();
}

}
