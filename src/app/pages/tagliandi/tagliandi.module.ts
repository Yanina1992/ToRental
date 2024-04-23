import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagliandiRoutingModule } from './tagliandi-routing.module';
import { TagliandiComponent } from './tagliandi.component';
import { DeleteTagliandiComponent } from './delete-tagliandi/delete-tagliandi.component';
import { DetailsTagliandiComponent } from './details-tagliandi/details-tagliandi.component';
import { EditTagliandiComponent } from './edit-tagliandi/edit-tagliandi.component';


@NgModule({
  declarations: [
    TagliandiComponent,
    DeleteTagliandiComponent,
    DetailsTagliandiComponent,
    EditTagliandiComponent,
  ],
  imports: [
    CommonModule,
    TagliandiRoutingModule
  ]
})
export class TagliandiModule { }
