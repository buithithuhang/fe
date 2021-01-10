import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-job-public',
  templateUrl: './schedule-job-public.component.html',
  styleUrls: ['./schedule-job-public.component.scss']
})
export class ScheduleJobPublicComponent implements OnInit {

  constructor() { }
  cleanStatuses = [
    { id: 'Chưa dọn dẹp-0', name: 'Chưa dọn dẹp' },
    { id: 'Đang dọn dẹp-1', name: 'Đang dọn dẹp' },
    { id: 'Đã dọn dẹp-2', name: 'Đã dọn dẹp' }
  ];

  checkStatuses = [
    { id: 'Chưa kiểm tra-0', name: 'Chưa kiểm tra' },
    { id: 'Đang kiểm tra-1', name: 'Đang kiểm tra' },
    { id: 'Đã kiểm tra-2', name: 'Đã kiểm tra' }
  ];

  ngOnInit(): void {
  }

}
