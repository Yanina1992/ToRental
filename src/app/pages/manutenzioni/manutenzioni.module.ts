import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

import { ManutenzioniRoutingModule } from './manutenzioni-routing.module';
import { ManutenzioniComponent } from './manutenzioni.component';
import { ManutenzioniDetailsComponent } from './manutenzioni-details/manutenzioni-details.component';
import { ManutenzioniEditComponent } from './manutenzioni-edit/manutenzioni-edit.component';
import { ManutenzioniDeleteComponent } from './manutenzioni-delete/manutenzioni-delete.component';
import { ManutenzioniTableComponent } from './manutenzioni-table/manutenzioni-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CreateManutenzioneComponent } from './create-manutenzione/create-manutenzione.component';


@NgModule({
  declarations: [
    ManutenzioniComponent,
    ManutenzioniDetailsComponent,
    ManutenzioniEditComponent,
    ManutenzioniDeleteComponent,
    ManutenzioniTableComponent,
    CreateManutenzioneComponent
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
    RouterModule
  ]
})
export class ManutenzioniModule { }
