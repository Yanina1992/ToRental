import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { AssicurazioniRoutingModule } from './assicurazioni-routing.module';
import { AssicurazioniComponent } from './assicurazioni.component';
import { DeleteAssicurazioniComponent } from './delete-assicurazioni/delete-assicurazioni.component';
import { EditAssicurazioniComponent } from './edit-assicurazioni/edit-assicurazioni.component';
import { DetailsAssicurazioniComponent } from './details-assicurazioni/details-assicurazioni.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AssicurazioniComponent,
    DeleteAssicurazioniComponent,
    EditAssicurazioniComponent,
    DetailsAssicurazioniComponent,
  ],
  imports: [
    CommonModule,
    AssicurazioniRoutingModule,
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
export class AssicurazioniModule { }
