import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

import { BolliRoutingModule } from './bolli-routing.module';
import { BolliComponent } from './bolli.component';
import { DeleteBolliComponent } from './delete-bolli/delete-bolli.component';
import { DetailsBolliComponent } from './details-bolli/details-bolli.component';
import { EditBolliComponent } from './edit-bolli/edit-bolli.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BolliComponent,
    DeleteBolliComponent,
    DetailsBolliComponent,
    EditBolliComponent,
  ],
  imports: [
    CommonModule,
    BolliRoutingModule,
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
export class BolliModule { }
