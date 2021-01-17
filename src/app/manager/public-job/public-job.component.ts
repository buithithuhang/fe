import { Component, OnInit } from '@angular/core';
import { PublicJobService } from './public-job.service';

@Component({
  selector: 'app-public-job',
  templateUrl: './public-job.component.html',
  styleUrls: ['./public-job.component.scss']
})
export class PublicJobComponent implements OnInit {

  constructor(private publicJobService: PublicJobService) { }
  hotels: any = [];
  checkStatuses: any = [];
  cleanStatuses: any = [];
  roomStatuses: any = [];
  floors: any = [];
  publicAreas: any = [];
  users: any = [];

  ngOnInit(): void {

    // get hotel
    this.publicJobService.getHotel().subscribe((res: any) => {
      this.hotels = res.data;
    })
    // get floors 
    this.publicJobService.getFloors().subscribe((res: any) => {
      this.floors = res.data;
    })
    
    // get public-areas 
    this.publicJobService.getPublicArea().subscribe((res: any) => {
      this.publicAreas = res.data;
    })

    // get room status

    this.publicJobService.getRoomStatus().subscribe((res: any) => {
      this.roomStatuses = res.data;
    })
    // get clean status

    this.publicJobService.getCleanStatus().subscribe((res: any) => {
      this.cleanStatuses = res.data;
    })

    // get check status
    this.publicJobService.getCheckStatus().subscribe((res: any) => {
      this.checkStatuses = res.data;
    })
 
    // get users
    this.publicJobService.getUsers().subscribe((res: any) => {
      this.users = res.data;
    })

  }
  changeEmployee(publicArea: any, employee: any) {
    if (!publicArea.assignments || publicArea.assignments.length === 0) {
      publicArea.assignments = [{}];
    }

    publicArea.assignments[0].employee = employee;
  }

  changeSuppervisor(publicArea: any, suppervisor: any) {
    if (!publicArea.assignments || publicArea.assignments.length === 0) {
      publicArea.assignments = [{}];
    }
    publicArea.assignments[0].suppervisor = suppervisor;
  }

  changeCleanStatus(room: any, cleanStatus: any) {
    room.clean_status = cleanStatus;
  }

  changeCheckStatus(room: any, checkStatus: any) {
    room.check_status = checkStatus;
  }

}
