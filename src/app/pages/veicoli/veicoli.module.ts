/*import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

import { VeicoliRoutingModule } from './veicoli-routing.module';
import { VeicoliComponent } from './veicoli.component';
import { NgbDatepickerModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import {HeaderComponent} from "../../../components/header/header.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';*/

import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

import { VeicoliRoutingModule } from './veicoli-routing.module';
import { VeicoliComponent } from './veicoli.component';
import { NgbDatepickerModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Assicurati di importare entrambi se necessario
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';

/*@NgModule({
  declarations: [
    VeicoliComponent,
    TableComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    VeicoliRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    HttpClientModule,
    DecimalPipe, 
    NgFor, 
    FormsModule, 
    NgbTypeaheadModule, 
    NgbPaginationModule,
    FormControl,
    ReactiveFormsModule
  ]
})
export class VeicoliModule { }*/

@NgModule({
  declarations: [
    VeicoliComponent,
    TableComponent,
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
    ReactiveFormsModule
  ]
})
export class VeicoliModule { }
