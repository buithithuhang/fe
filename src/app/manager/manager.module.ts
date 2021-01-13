import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager/manager.component';
import { ScheduleJobComponent } from './schedule-job/schedule-job.component';
import { ScheduleJobService } from './schedule-job/schedule-job.service';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentService } from './assignment/assignment.service';
import { PublicJobComponent } from './public-job/public-job.component';
import { PublicJobService } from './public-job/public-job.service';
import { CreateBookComponent } from './booked/create/create.component';
import { BookedComponent } from './booked/booked.component';
import { BookedService } from './booked/booked.service';
import { DeleteBookComponent } from './booked/delete/delete.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';


@NgModule({
  declarations: [ManagerComponent, ScheduleJobComponent, 
    PublicJobComponent,
    
    AssignmentComponent, 
    CreateBookComponent,

    EmployeeComponent,

    CreateBookComponent,
    DeleteBookComponent,
    BookedComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ScheduleJobService,
    PublicJobService,
    AssignmentService,
    EmployeeService,
    BookedService
  ]
})
export class ManagerModule { }
