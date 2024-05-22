import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { VeicoliRoutingModule } from './veicoli-routing.module';
import { VeicoliComponent } from './veicoli.component';
import { NgbDatepickerModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { StandDetailsComponent } from './detail/stand-details.component';

@NgModule({
  declarations: [
    VeicoliComponent,
    TableComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    VeicoliRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    DecimalPipe, 
    NgFor, 
    NgbTypeaheadModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    DatepickerComponent,
    StandDetailsComponent
  ]
})
export class VeicoliModule { }
