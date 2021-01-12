import { Component, OnInit } from '@angular/core';
import { ScheduleJobService } from './schedule-job.service';

@Component({
  selector: 'app-schedule-job',
  templateUrl: './schedule-job.component.html',
  styleUrls: ['./schedule-job.component.scss']
})
export class ScheduleJobComponent implements OnInit {

  constructor(private scheduleJobService: ScheduleJobService) { }
  hotels = [
    { id: 'Chưa dọn dẹp-0', name: 'Chưa dọn dẹp' },
    { id: 'Đang dọn dẹp-1', name: 'Đang dọn dẹp' },
    { id: 'Đã dọn dẹp-2', name: 'Đã dọn dẹp' }
  ];

  checkStatuses = [
    { id: 'Chưa kiểm tra-0', name: 'Chưa kiểm tra' },
    { id: 'Đang kiểm tra-1', name: 'Đang kiểm tra' },
    { id: 'Đã kiểm tra-2', name: 'Đã kiểm tra' }
  ];
  cleanStatuses = [
    { id: 'Chưa kiểm tra-0', name: 'Chưa kiểm tra' },
    { id: 'Đang kiểm tra-1', name: 'Đang kiểm tra' },
    { id: 'Đã kiểm tra-2', name: 'Đã kiểm tra' }
  ];
  roomStatuses = [
    { id: 'Phòng trống-0', name: 'Phòng trống' },
    { id: 'Khách trong phòng-1', name: 'Khách trong phòng' },
    { id: 'Khách ra ngoài-2', v: 'Khách ra ngoài' }
  ];

  floors = [
    { id: 'Tầng 1-0', name: 'Tầng 1' },
    { id: 'Tầng 2-1', name: 'Tầng 2' },
    { id: 'Tầng 3-2', name: 'Tầng 3' }
  ];
  rooms: any;
  customers: any;
  users: any;
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
      console.log('customers' + this.customers)
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
}
