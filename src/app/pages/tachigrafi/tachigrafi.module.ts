import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TachigrafiRoutingModule } from './tachigrafi-routing.module';
import { TachigrafiComponent } from './tachigrafi.component';
import { DeleteTachigrafiComponent } from './delete-tachigrafi/delete-tachigrafi.component';
import { DetailsTachigrafiComponent } from './details-tachigrafi/details-tachigrafi.component';
import { EditTachigrafiComponent } from './edit-tachigrafi/edit-tachigrafi.component';


@NgModule({
  declarations: [
    TachigrafiComponent,
    DeleteTachigrafiComponent,
    DetailsTachigrafiComponent,
    EditTachigrafiComponent,
  ],
  imports: [
    CommonModule,
    TachigrafiRoutingModule
  ]
})
export class TachigrafiModule { }
