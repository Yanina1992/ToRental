/*import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-veicoli',
  templateUrl: './veicoli.component.html',
  styleUrls: ['./veicoli.component.scss']
})
export class VeicoliComponent {

	closeResult = '';

	constructor(private modalService: NgbModal) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}*/



//-------------------------------------------------------------------------------------------------------------------







//--------------------------------------------------------------------------------------------------------------------

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

