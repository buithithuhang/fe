import { Component, OnInit } from '@angular/core';
import { PublicJobService } from './public-job.service';

@Component({
  selector: 'app-public-job',
  templateUrl: './public-job.component.html',
  styleUrls: ['./public-job.component.scss']
})
export class PublicJobComponent implements OnInit {

  constructor(private publicJobService: PublicJobService) { }
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
  publicAreas: any;

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

  }

}
