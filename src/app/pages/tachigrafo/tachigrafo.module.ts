import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

import { TachigrafoRoutingModule } from './tachigrafo-routing.module';
import { TachigrafoComponent } from './tachigrafo.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TachigrafoComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    TachigrafoRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    DecimalPipe, 
    NgFor, 
    NgbTypeaheadModule,
    NgbPaginationModule,
    ReactiveFormsModule
  ]
})
export class TachigrafoModule { }
