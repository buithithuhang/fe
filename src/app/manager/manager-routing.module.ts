import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { ManagerComponent } from './manager/manager.component';
import { ScheduleJobPublicComponent } from './schedule-job-public/schedule-job-public.component';
import { ScheduleJobComponent } from './schedule-job/schedule-job.component';

const routes: Routes = [{
  path: '', pathMatch: '**', component: ManagerComponent, children: [
    { path: '', redirectTo: 'schedule-job', pathMatch: '**' },
    { path: 'schedule-job', component: ScheduleJobComponent, },
    { path: 'schedule-job-public', component: ScheduleJobPublicComponent, },
    { path: 'assignment', component: AssignmentComponent, },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
