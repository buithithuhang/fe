import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCheckListTemplateComponent } from './check-list-template/create/create.component';
import { DeleteCheckListTemplateComponent } from './check-list-template/delete/delete.component';
import { CheckListTemplateComponent } from './check-list-template/check-list-template.component';
import { CheckListTemplateService } from './check-list-template/check-list-template.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    CheckListTemplateComponent,
    CreateCheckListTemplateComponent,
    DeleteCheckListTemplateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CheckListTemplateService
  ]
})
export class AdminModule { }
