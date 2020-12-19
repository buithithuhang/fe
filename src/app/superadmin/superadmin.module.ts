import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { TemplateManagementComponent } from './template-management/template-management.component';
import { SuperadminComponent } from './superadmin/superadmin.component';


@NgModule({
  declarations: [TemplateManagementComponent, SuperadminComponent],
  imports: [
    CommonModule,
    SuperadminRoutingModule
  ]
})
export class SuperadminModule { }
