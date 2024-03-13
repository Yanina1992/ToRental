import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeicoliRoutingModule } from './veicoli-routing.module';
import { VeicoliComponent } from './veicoli.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    VeicoliComponent
  ],
  imports: [
    CommonModule,
    VeicoliRoutingModule,
    NgbDatepickerModule,
  ]
})
export class VeicoliModule { }
