import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeicoliRoutingModule } from './veicoli-routing.module';
import { VeicoliComponent } from './veicoli.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VeicoliComponent
  ],
  imports: [
    CommonModule,
    VeicoliRoutingModule,
    NgbDatepickerModule,
    FormsModule
  ]
})
export class VeicoliModule { }
