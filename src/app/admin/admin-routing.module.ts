import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CheckListTemplateComponent } from './check-list-template/check-list-template.component';

const routes: Routes = [
  {
    path: '', pathMatch: '**', component: AdminComponent, children: [
      { path: '', redirectTo: 'check-list-template', pathMatch: '**' },
      { path: 'check-list-template', component: CheckListTemplateComponent, }
      ,]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
