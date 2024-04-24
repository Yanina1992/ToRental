import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { TagliandoRoutingModule } from './tagliando-routing.module';
import { TagliandoComponent } from './tagliando.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TagliandoComponent
  ],
  imports: [
    CommonModule,
    TagliandoRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    HttpClientModule,
    DecimalPipe, 
    NgFor, 
    NgbTypeaheadModule,
    NgbPaginationModule,
    ReactiveFormsModule
  ]
})
export class TagliandoModule { }
