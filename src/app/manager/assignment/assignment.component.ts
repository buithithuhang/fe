import { Component, OnInit } from '@angular/core';
import { AssignmentService } from './assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  constructor(private assignmentService: AssignmentService) { }
  floors = [
    { id: 'Tầng 1-0', name: 'Tầng 1' },
    { id: 'Tầng 2-1', name: 'Tầng 2' },
    { id: 'Tầng 3-2', name: 'Tầng 3' }
  ];

  hours = [
    { value: "00:00", viewValue: "00:00" },
    { value: "00:15", viewValue: "00:15" },
    { value: "00:30", viewValue: "00:30" },
    { value: "00:45", viewValue: "00:45" },
    { value: "01:00", viewValue: "01:00" },
    { value: "01:15", viewValue: "01:15" },
    { value: "01:30", viewValue: "01:30" },
    { value: "01:45", viewValue: "01:45" },
    { value: "02:00", viewValue: "02:00" },
    { value: "02:15", viewValue: "02:15" },
    { value: "02:30", viewValue: "02:30" },
    { value: "02:45", viewValue: "02:45" },
    { value: "03:00", viewValue: "03:00" },
    { value: "03:15", viewValue: "03:15" },
    { value: "03:30", viewValue: "03:30" },
    { value: "03:45", viewValue: "03:45" },
    { value: "04:00", viewValue: "04:00" },
    { value: "04:15", viewValue: "04:15" },
    { value: "04:30", viewValue: "04:30" },
    { value: "04:45", viewValue: "04:45" },
    { value: "05:00", viewValue: "05:00" },
    { value: "05:15", viewValue: "05:15" },
    { value: "05:30", viewValue: "05:30" },
    { value: "05:45", viewValue: "05:45" },
    { value: "06:00", viewValue: "06:00" },
    { value: "06:15", viewValue: "06:15" },
    { value: "06:30", viewValue: "06:30" },
    { value: "06:45", viewValue: "06:45" },
    { value: "07:00", viewValue: "07:00" },
    { value: "07:15", viewValue: "07:15" },
    { value: "07:30", viewValue: "07:30" },
    { value: "07:45", viewValue: "07:45" },
    { value: "08:00", viewValue: "08:00" },
    { value: "08:15", viewValue: "08:15" },
    { value: "08:30", viewValue: "08:30" },
    { value: "08:45", viewValue: "08:45" },
    { value: "09:00", viewValue: "09:00" },
    { value: "09:15", viewValue: "09:15" },
    { value: "09:30", viewValue: "09:30" },
    { value: "09:45", viewValue: "09:45" },
    { value: "10:00", viewValue: "10:00" },
    { value: "10:15", viewValue: "10:15" },
    { value: "10:30", viewValue: "10:30" },
    { value: "10:45", viewValue: "10:45" },
    { value: "11:00", viewValue: "11:00" },
    { value: "11:15", viewValue: "11:15" },
    { value: "11:30", viewValue: "11:30" },
    { value: "11:45", viewValue: "11:45" },
    { value: "12:00", viewValue: "12:00" },
    { value: "12:15", viewValue: "12:15" },
    { value: "12:30", viewValue: "12:30" },
    { value: "12:45", viewValue: "12:45" },
    { value: "13:00", viewValue: "13:00" },
    { value: "13:15", viewValue: "13:15" },
    { value: "13:30", viewValue: "13:30" },
    { value: "13:45", viewValue: "13:45" },
    { value: "14:00", viewValue: "14:00" },
    { value: "14:15", viewValue: "14:15" },
    { value: "14:30", viewValue: "14:30" },
    { value: "14:45", viewValue: "14:45" },
    { value: "15:00", viewValue: "15:00" },
    { value: "15:15", viewValue: "15:15" },
    { value: "15:30", viewValue: "15:30" },
    { value: "15:45", viewValue: "15:45" },
    { value: "16:00", viewValue: "16:00" },
    { value: "16:15", viewValue: "16:15" },
    { value: "16:30", viewValue: "16:30" },
    { value: "16:45", viewValue: "16:45" },
    { value: "17:00", viewValue: "17:00" },
    { value: "17:15", viewValue: "17:15" },
    { value: "17:30", viewValue: "17:30" },
    { value: "17:45", viewValue: "17:45" },
    { value: "18:00", viewValue: "18:00" },
    { value: "18:15", viewValue: "18:15" },
    { value: "18:30", viewValue: "18:30" },
    { value: "18:45", viewValue: "18:45" },
    { value: "19:00", viewValue: "19:00" },
    { value: "19:15", viewValue: "19:15" },
    { value: "19:30", viewValue: "19:30" },
    { value: "19:45", viewValue: "19:45" },
    { value: "20:00", viewValue: "20:00" },
    { value: "20:15", viewValue: "20:15" },
    { value: "20:30", viewValue: "20:30" },
    { value: "20:45", viewValue: "20:45" },
    { value: "21:00", viewValue: "21:00" },
    { value: "21:15", viewValue: "21:15" },
    { value: "21:30", viewValue: "21:30" },
    { value: "21:45", viewValue: "21:45" },
    { value: "22:00", viewValue: "22:00" },
    { value: "22:15", viewValue: "22:15" },
    { value: "22:30", viewValue: "22:30" },
    { value: "22:45", viewValue: "22:45" },
    { value: "23:00", viewValue: "23:00" },
    { value: "23:15", viewValue: "23:15" },
    { value: "23:30", viewValue: "23:30" },
    { value: "23:45", viewValue: "23:45" }
  ];

  chooses = [
    {value: 'Ngày-0', viewValue: 'Ngày'},
    {value: 'Tuần-1', viewValue: 'Tuần'},
    {value: 'Tháng-2', viewValue: 'Tháng'}
  ];
  rooms: any;
  publicAreas: any;
  users: any;

  ngOnInit(): void {


    // get rooms
    this.assignmentService.getRoom().subscribe((res: any) => {
      this.rooms = res.data;
      console.log(this.rooms)
    })

    this.assignmentService.getPublicArea().subscribe((res: any) => {
      this.publicAreas = res.data;
    })

    // get floors 
    this.assignmentService.getFloors().subscribe((res: any) => {
      this.floors = res.data;
    })
    // get users
    this.assignmentService.getUsers().subscribe((res: any) => {
      this.users = res.data;
    })
  }
  changeEmployee(room: any, employee: any) {
    if (!room.assignments || room.assignments.length === 0) {
      room.assignments = [{}];
    }

    room.assignments[0].employee = employee;
  }
}
