import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-manager-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }
  employees: any;
  employeeSelected:any;
  ngOnInit(): void {

    this.service.getUsers().subscribe((res: any) => {
      this.employees = res.data;
    })
  }
  selectionChange() {
    console.log(this.employeeSelected);
  }
}
