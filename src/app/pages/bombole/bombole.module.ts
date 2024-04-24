import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

import { BomboleRoutingModule } from './bombole-routing.module';
import { BomboleComponent } from './bombole.component';
import { DeleteBomboleComponent } from './delete-bombole/delete-bombole.component';
import { DetailsBomboleComponent } from './details-bombole/details-bombole.component';
import { EditBomboleComponent } from './edit-bombole/edit-bombole.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BomboleComponent,
    DeleteBomboleComponent,
    DetailsBomboleComponent,
    EditBomboleComponent
  ],
  imports: [
    CommonModule,
    BomboleRoutingModule,
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
export class BomboleModule { }
