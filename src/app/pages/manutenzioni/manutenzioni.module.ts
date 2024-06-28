import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { ManutenzioniRoutingModule } from './manutenzioni-routing.module';
import { ManutenzioniComponent } from './manutenzioni.component';
import { ManutenzioniEditComponent } from './manutenzioni-edit/manutenzioni-edit.component';
import { ManutenzioniDeleteComponent } from './manutenzioni-delete/manutenzioni-delete.component';
import { ManutenzioniTableComponent } from './manutenzioni-table/manutenzioni-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CreateManutenzioneComponent } from './create-manutenzione/create-manutenzione.component';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { StandManutenzioniDetailsComponent } from './manutenzione-detail/stand-manutenzioni-details.component';
import { NoElementsComponent } from 'src/app/components/alert-messages/no-elements/no-elements.component';
import { StoricoComponent } from './storico/storico.component';


@NgModule({
  declarations: [
    ManutenzioniComponent,
    ManutenzioniEditComponent,
    ManutenzioniDeleteComponent,
    ManutenzioniTableComponent,
    CreateManutenzioneComponent,
    StoricoComponent
  ],
  imports: [
    CommonModule,
    ManutenzioniRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    HttpClientModule,
    DecimalPipe, 
    NgFor, 
    NgbTypeaheadModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    RouterModule,
    DatepickerComponent,
    StandManutenzioniDetailsComponent,
    NoElementsComponent
  ]
})
export class ManutenzioniModule { }
