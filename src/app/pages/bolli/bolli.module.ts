import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BolliRoutingModule } from './bolli-routing.module';
import { BolliComponent } from './bolli.component';
import { DeleteBolliComponent } from './delete-bolli/delete-bolli.component';
import { DetailsBolliComponent } from './details-bolli/details-bolli.component';
import { EditBolliComponent } from './edit-bolli/edit-bolli.component';


@NgModule({
  declarations: [
    BolliComponent,
    DeleteBolliComponent,
    DetailsBolliComponent,
    EditBolliComponent,
  ],
  imports: [
    CommonModule,
    BolliRoutingModule
  ]
})
export class BolliModule { }
