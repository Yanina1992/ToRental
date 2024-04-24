import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { AtpRoutingModule } from './atp-routing.module';
import { AtpComponent } from './atp.component';
import { DeleteAtpComponent } from './delete-atp/delete-atp.component';
import { DetailsAtpComponent } from './details-atp/details-atp.component';
import { EditAtpComponent } from './edit-atp/edit-atp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AtpComponent,
    DeleteAtpComponent,
    DetailsAtpComponent,
    EditAtpComponent
  ],
  imports: [
    CommonModule,
    AtpRoutingModule,
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
export class AtpModule { }
