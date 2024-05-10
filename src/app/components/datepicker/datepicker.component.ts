import { Component, EventEmitter, Injectable, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	NgbCalendar,
	NgbDateAdapter,
	NgbDateParserFormatter,
	NgbDatepickerModule,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
	readonly DELIMITER = '-';

	fromModel(value: string | null): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	toModel(date: NgbDateStruct | null): string | null {
		if (date) {
			const day = date.day.toString().padStart(2, '0');
			const month = date.month.toString().padStart(2, '0');
			const year = date.year;
			return `${day}${this.DELIMITER}${month}${this.DELIMITER}${year}`;
		}
		return null;
	}
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DELIMITER = '/';

	parse(value: string): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	format(date: NgbDateStruct | null): string {
		return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
	}
}

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [CommonModule, NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],

  providers: [
		{ provide: NgbDateAdapter, useClass: CustomAdapter },
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(()=> DatepickerComponent),
			multi: true
		}
	],
})
export class DatepickerComponent {

	model2: any;
	onChange: any = () => {};
	onTouched: any = () => {};

	constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {}

	get today() {
		return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
	}
  
	@Output() dateChange = new EventEmitter<string | undefined>();

	onDateChange(value: string){
		this.model2 = value;
		this.onChange(value);
		this.dateChange.emit(value);
	}

	selectToday(){
		this.model2 = this.today;
		this.onChange(this.model2);
		this.dateChange.emit(this.model2)
	}

	writeValue(value:any):void {
		this.model2 = value;
	}

	registerOnChange(fn:any):void{
		this.onChange = fn;
	}

	registerOnTouched(fn:any):void{
		this.onTouched = fn;
	}

	private stringToDate(dateStr:string):Date{
		const parts = dateStr.split('-');
		if(parts.length == 3){
			const date = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
			return date;
		}
		return new Date();
	}
}

