import { Component, OnInit } from '@angular/core';
import { ScheduleJobService } from './schedule-job.service';

@Component({
  selector: 'app-schedule-job',
  templateUrl: './schedule-job.component.html',
  styleUrls: ['./schedule-job.component.scss']
})
export class ScheduleJobComponent implements OnInit {

  constructor(private scheduleJobService: ScheduleJobService) { }

  hotels: any = [];
  checkStatuses: any = [];
  cleanStatuses: any = [];
  roomStatuses: any = [];
  floors: any = [];
  rooms: any = [];
  customers: any = [];
  users: any = [];

  ngOnInit(): void {

    // get hotel
    this.scheduleJobService.getHotel().subscribe((res: any) => {
      this.hotels = res.data;
    })
    // get floors 
    this.scheduleJobService.getFloors().subscribe((res: any) => {
      this.floors = res.data;
    })

    // get room status
    this.scheduleJobService.getRoomStatus().subscribe((res: any) => {
      this.roomStatuses = res.data;
    })
    // get clean status

    this.scheduleJobService.getCleanStatus().subscribe((res: any) => {
      this.cleanStatuses = res.data;
    })

    // get check status
    this.scheduleJobService.getCheckStatus().subscribe((res: any) => {
      this.checkStatuses = res.data;
    })

    // get rooms
    this.scheduleJobService.getRoom().subscribe((res: any) => {
      this.rooms = res.data;
      console.log(this.rooms)
    })
    // get  Customer
    this.scheduleJobService.getCustomer().subscribe((res: any) => {
      this.customers = res.data;
      console.log('customers' + this.customers)
    })

    // get users
    this.scheduleJobService.getUsers().subscribe((res: any) => {
      this.users = res.data;
    })
  }

  changeCustomer(room: any, customer: any) {
    // TODO:: update customer booked
    room.bookeds = [{}];
    room.bookeds[0].customer = customer;
  }

  changeEmployee(room: any, employee: any) {
    if (!room.assignments || room.assignments.length === 0) {
      room.assignments = [{}];
    }

    room.assignments[0].employee = employee;
  }

  changeSuppervisor(room: any, suppervisor: any) {
    if (!room.assignments || room.assignments.length === 0) {
      room.assignments = [{}];
    }
    room.assignments[0].suppervisor = suppervisor;
  }

  changeRoomStatus(room: any, roomStatus: any) {
    room.room_status = roomStatus;
  }

  changeCleanStatus(room: any, cleanStatus: any) {
    room.clean_status = cleanStatus;
  }

  changeCheckStatus(room: any, checkStatus: any) {
    room.check_status = checkStatus;
  }
}
