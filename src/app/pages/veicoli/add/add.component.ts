import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
dateControl = new FormControl();

model: NgbDateStruct | undefined;
date!: { year: number; month: number; };

isDatepickerOpen = false;

constructor(private calendar: NgbCalendar,
  private datePipe:DatePipe
  ) {}

toggleDatePicker() {
  this.isDatepickerOpen = !this.isDatepickerOpen;
  console.log(this.model);
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


