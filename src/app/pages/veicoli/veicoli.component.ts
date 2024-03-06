import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-veicoli',
  templateUrl: './veicoli.component.html',
  styleUrls: ['./veicoli.component.scss']
})
export class VeicoliComponent {
  dateControl = new FormControl();

model: NgbDateStruct | undefined;
date: { year: number; month: number; } | undefined;

isDatepickerOpen = false;

constructor(private calendar: NgbCalendar,
  private datePipe:DatePipe
  ) {}

toggleDatePicker() {
  this.isDatepickerOpen = !this.isDatepickerOpen;
}

selectToday() {
  this.model = this.calendar.getToday();
}

formatDate(date: NgbDateStruct | undefined): string {
  if (date) {
    return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'dd-MM-yyyy') || '';
  }
  return '';
}

}
