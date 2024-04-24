import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { RevisioneRoutingModule } from './revisione-routing.module';
import { RevisioneComponent } from './revisione.component';
import { NgbDatepickerModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRevisioneComponent } from './edit-revisione/edit-revisione.component';
import { DetailsRevisioneComponent } from './details-revisione/details-revisione.component';


@NgModule({
  declarations: [
    RevisioneComponent,
    EditRevisioneComponent,
    DetailsRevisioneComponent
  ],
  imports: [
    CommonModule,
    RevisioneRoutingModule,
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
export class RevisioneModule { }
